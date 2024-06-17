import { makeAutoObservable, runInAction, action } from "mobx";
import { request } from "../api/config/request";
import { Modal, message } from "antd";

export default class ContentStore {
  content = [];
  loading = false;
  open = false;
  formValues = {};
  description = "";
  filePreview = null;
  fileSelected = null;

  constructor() {
    makeAutoObservable(this);
  }

  getList = async () => {
    this.loading = true;
    const res = await request("contents", "get");
    if (res) {
      runInAction(() => {
        this.content = res.object;
        this.loading = false;
      });
    }
  };

  setDescription = action((description) => {
    this.description = description || "";
  });

  handleChangeFile = (e) => {
    this.filePreview = URL.createObjectURL(e.target.files[0]);
    this.fileSelected = e.target.files[0];
  };

  handleClearImage = () => {
    this.filePreview = null;
    this.fileSelected = null;
  };

  handleClearValue = () => {
    this.formValues = {
      title: "",
      description: "",
      imageUrl: "",
      id: null,
      article: undefined,
      category: [],
    };
    this.handleClearImage();
  };

  handleClickNew = () => {
    this.handleClearValue();
    this.open = true;
  };

  handleCloseModal = () => {
    runInAction(() => {
      this.open = false;
      this.handleClearValue();
    });
  };

  handleClickEdit = (item) => {
    this.formValues = {
      ...item,
      title: item.title,
      description: item.description,
      image: item.imageUrl,
      id: item.id,
      category: item.article.category === null ? "" : item.article.category.id,
      article:
        item.article === null ? "" : item.article.id || item.article.name,
    };
    this.filePreview = item.imageUrl;
    runInAction(() => {
      this.open = true;
    });
  };

  handleClickDelete = async (item) => {
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
        const res = await request(`contents/${data.id}`, "delete", data);
        if (res) {
          runInAction(() => {
            message.success("Delete Sucessful");
            this.getList();
          });
        }
      },
    });
  };

  handleFinish = async (item) => {
    this.loading = true;
    var id = this.formValues.id;
    var form = new FormData();
    var data = {
      ...item,
      id: id,
      // title: item.title,
      // description: item.description,
      articleId: item.article,
    };
    if (this.fileSelected !== null && id !== null) {
      form.append("contentId", id);
      form.append("file", this.fileSelected);
      const img = await request(`contents/upload/image`, "put", form);
      if (img) {
        data.imageUrl = img;
      } else {
        return false;
      }
    }
    var method = id == null ? "post" : "put";
    var url = id == null ? "contents" : `contents/${id}`;
    var messages = id ? "update  sucessfull" : "create  sucessfull";
    const res = await request(url, method, data);
    if (res) {
      runInAction(() => {
        message.success(messages);
        this.getList();
        this.handleCloseModal();
      });
    }
  };
}
