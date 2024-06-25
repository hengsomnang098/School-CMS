import { makeAutoObservable, runInAction } from "mobx";
import { request } from "../api/config/request";
import { Modal, message } from "antd";

export default class MediaStore {
  medias = [];
  loading = false;
  open = false;
  formValues = {};
  fileSelected = "";
  filePreview = "";

  constructor() {
    makeAutoObservable(this);
  }

  getList = async (contentId, mediaType) => {
    var param = {
      contentId: contentId || "",
      mediaType: mediaType || "",
    };
    this.loading = true;
    const res = await request(`albums`, "get", param);
    if (res) {
      runInAction(() => {
        this.medias = res.object;
        this.loading = false;
      });
    }
  };

  handleClearValue = () => {
    this.formValues = {
      id: null,
      name: "",
      contentId: null,
      mediaType: null,
      mediaUrl: "",
    };
    this.handleClearImage();
  };

  handleChangeFile = (e) => {
    runInAction(() => {
      var file = e.target.files[0];
      var filePreView = URL.createObjectURL(file);
      this.fileSelected = file;
      this.filePreview = filePreView;
    });
  };
  handleClearImage = () => {
    this.filePreview = null;
    this.fileSelected = null;
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
        const res = await request(`medias/${item.id}`, "delete");
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
    if (id != null && this.fileSelected !== "") {
      form.append("mediaId", id);
      form.append("file", this.fileSelected);
    } else {
      var data = {
        ...item,
        mediaUrl: this.filePreview,
        contentId: contentId,
      };
    }
    var req = id == null ? data : form;
    var method = id == null ? "post" : "put";
    var url = id == null ? `albums/upload/${contentId}` : `albums/upload/${id}`;
    var messages = id ? "upload Image  sucessfull" : "create  sucessfull";
    const res = await request(url, method, req);
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
