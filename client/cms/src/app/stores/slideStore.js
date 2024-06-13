import { makeAutoObservable, runInAction } from "mobx";
import { request } from "../../config/request";
import { Modal, message } from "antd";
export default class SlideStore {
  slides = [];
  open = false;
  formValues = {};
  loading = false;
  fileSelected = "";
  filePreview = "";

  constructor() {
    makeAutoObservable(this);
  }
  getList = async () => {
    const res = await request("slides", "get");
    runInAction(() => {
      this.loading = true;
      if (res) {
        this.slides = res.object;
      }
      this.loading = false;
      this.open = false;
    });
  };

  handleChangeFile = (e) => {
    runInAction(() => {
      var file = e.target.files[0];
      var filePreView = URL.createObjectURL(file);
      this.fileSelected = file;
      this.filePreview = filePreView;
    });
  };

  handleClearValue = () => {
    runInAction(() => {
      this.formValues.id = null;
      this.formValues = {
        name: "",
        description: "",
        imageUrl: "",
      };
      this.filePreview = "";
      this.fileSelected = "";
    });
  };

  handleClearFile = () => {
    runInAction(() => {
      this.fileSelected = "";
      this.filePreview = "";
    });
  };

  handleEdit = (item) => {
    runInAction(() => {
      this.open = true;
      this.loading = false;
      this.formValues = {
        ...item,
      };
      this.filePreview = item.imageUrl;
    });
  };

  handleDelete = async (item) => {
    runInAction(() => {
      Modal.confirm({
        title: "Delete",
        content: "Are you sure you want to delete ?",
        okText: "Yes",
        cancelText: "No",
        okType: "danger",
        centered: true,
        onOk: async () => {
          var data = {
            id: item.id,
          };
          const res = await request(`slides/${item.id}`, "delete", data);
          if (res) {
            this.loading = true;
            this.getList();
            this.loading = false;
            this.open = false;
            message.success("Delete Sucessful");
          }
        },
      });
    });
  };

  handleFinish = async (item) => {
    var id = this.formValues.id;
    var form = new FormData();
    var data = {
      ...item,
    };
    if (this.fileSelected != null && id != null) {
      form.append("slideId", id);
      form.append("file", this.fileSelected);
      const img = await request(`slides/upload/image`, "put", form);
      if (img) {
        data.imageUrl = img;
      } else {
        return false;
      }
    }
    var method = id == null ? "post" : "put";
    var url = id == null ? "slides" : `slides/${id}`;
    var messages = id ? "update  sucessfull" : "create  sucessfull";
    const res = await request(url, method, data);
    if (res) {
      runInAction(() => {
        this.loading = true;
        message.success(messages);
        this.getList();
        this.handleClearFile();
        this.handleClearValue();
        this.loading = false;
        this.open = false;
      });
    }
  };

  handleCloseModal = () => {
    runInAction(() => {
      this.open = false;
      this.handleClearFile();
      this.handleClearValue();
    });
  };

  handleClickNew = () => {
    runInAction(() => {
      this.open = true;
      this.handleClearFile();
      this.handleClearValue();
    });
  };
}
