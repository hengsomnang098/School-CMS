import { makeAutoObservable, runInAction } from "mobx";
import { request } from "../api/config/request";
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
    this.loading = true;
    const res = await request("slides", "get");
    runInAction(() => {
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
    this.handleClearFile();
    runInAction(() => {
      this.formValues.id = null;
      this.formValues = {
        name: "",
        description: "",
        imageUrl: "",
      };
      this.handleClearFile();
    });
  };

  handleClearFile = () => {
    runInAction(() => {
      this.filePreview = "";
      this.fileSelected = "";
    });
  };

  handleEdit = (item) => {
    console.log(item);
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
            runInAction(() => {
              message.success("Delete Sucessful");
              // Call the getList function to refresh the data
              this.handleClearFile();
              this.handleClearValue();
              this.getList();
            });
          }
        },
      });
    });
  };

  handleFinish = async (item) => {
    var id = this.formValues.id;

    var data = {
      name: item.name,
      description: item.description,
      imageUrl: item.imageUrl,
    };

    var method = id == null ? "post" : "put";
    var url = id == null ? "slides" : `slides/${id}`;
    var messages = id ? "update  sucessfull" : "create  sucessfull";
    const res = await request(url, method, data);
    if (res) {
      runInAction(async () => {
        var form = new FormData();
        if (this.fileSelected !== "") {
          form.append("slideId", res.object.id);
          form.append("file", this.fileSelected);
          await request(`slides/upload/image`, "put", form);
          // this.filePreview = res.object.imageUrl;
        }
        message.success(messages);
        // Call the getList function to refresh the data
        this.handleClearValue();
        this.getList();
      });
    }
  };

  handleCloseModal = () => {
    runInAction(() => {
      this.open = false;
      this.handleClearValue();
    });
  };

  handleClickNew = () => {
    runInAction(() => {
      this.open = true;
      this.handleClearValue();
    });
  };

  get slideCount() {
    return Array.isArray(this.slides) ? this.slides.length : 0;
  }
}
