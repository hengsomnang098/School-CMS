import { makeAutoObservable, runInAction } from "mobx";
import { request } from "../api/config/request";
import { Modal, message } from "antd";

export default class MediaStore {
  medias = [];
  loading = false;
  open = false;
  formValues = {};
  fileSelected = [];
  filePreview = [];

  constructor() {
    makeAutoObservable(this);
  }

  getList = async (contentId) => {
    var param = {
      contentId: contentId,
    };
    this.loading = true;
    const res = await request(`albums`, "get", param);
    if (res) {
      runInAction(() => {
        this.medias = res.object;
        this.loading = false;
      });
    } else {
      runInAction(() => {
        this.medias = [];
        this.loading = false;
      });
    }
  };

  handleClearValue = () => {
    this.formValues = {
      id: "",
      contentId: "",
      albumFiles: [],
    };
    this.handleClearImage();
  };

  handleChangeFile = (e) => {
    runInAction(() => {
      const files = Array.from(e.target.files);
      const filePreviews = files.map((file) => URL.createObjectURL(file));
      this.fileSelected = files;
      this.filePreview = filePreviews;
    });
  };

  handleClearImage = () => {
    this.filePreview = [];
    this.fileSelected = [];
  };

  handleClickNew = () => {
    this.open = true;
    this.handleClearValue();
  };

  handleClickEdit = (item, contentId) => {
    this.formValues = {
      ...item,
      contentId: contentId,
    };

    this.filePreview = item.mediaUrl;
    this.open = true;
    this.loading = false;
  };

  handleCloseModal = () => {
    runInAction(() => {
      this.handleClearValue();
      this.open = false;
    });
  };

  handleClickDelete = async (item) => {
    Modal.confirm({
      title: "Are you sure delete this item?",
      okText: "Yes",
      cancelText: "No",
      onOk: async () => {
        const res = await request(`albums/${item.id}`, "delete");
        if (res) {
          runInAction(() => {
            this.loading = true;
            message.success("Delete Sucessful");
            this.getList(item.contentId, "");
            this.loading = false;
          });
        }
      },
    });
  };

  handleFinish = async (item, contentId) => {
    this.loading = true;
    var id = this.formValues.id;
    var form = new FormData();

    if (id != null && this.fileSelected.length > 0) {
      this.fileSelected.forEach((file) => {
        form.append("albumFiles", file);
      });
      form.append("contentId", contentId);
    }
    var messages = id ? "upload Images sucessfully" : "create sucessfully";
    const res = await request(`albums/upload/${contentId}`, "post", form);
    if (res) {
      runInAction(() => {
        message.success(messages);
        this.getList(contentId, "");
        this.handleCloseModal();
        this.loading = false;
      });
    }
  };
}
