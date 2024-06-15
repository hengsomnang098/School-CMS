import { makeAutoObservable, runInAction } from "mobx";
import { request } from "../api/config/request";
import { Modal, message } from "antd";

export default class ArticleStore {
  articles = [];
  open = false;
  formValues = {};
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  articleList = async () => {
    this.loading = true;
    const res = await request("articles", "get");
    runInAction(() => {
      if (res) {
        this.articles = res.object;
      }

      this.loading = false;
      this.open = false;
    });
  };

  handleClickNew = () => {
    runInAction(() => {
      this.open = true;
      this.handleClearValue();
    });
  };

  handleClearValue = () => {
    this.formValues = {
      id: null,
      name: "",
      category: "",
    };
    this.loading = false;
  };

  handleCloseModal = () => {
    runInAction(() => {
      this.handleClearValue();
      this.open = false;
    });
  };

  handleClickEdit = (item) => {
    this.formValues = {
      ...item,
      id: item.id,
      name: item.name,
      category: item.category === null ? "" : item.category.id,
    };
    this.open = true;
    this.loading = false;
  };

  handleDelete = async (item) => {
    Modal.confirm({
      title: "Delete",
      content: "Are you sure you want to delete ?",
      okText: "Yes",
      cancelText: "No",
      okType: "danger",
      centered: true,
      onOk: async () => {
        this.loading = true;
        var data = {
          id: item.id,
        };
        const res = await request(`articles/${data.id}`, "delete", data);
        if (res) {
          message.success("De;ete Successfully");
          runInAction(() => {
            this.articleList();
            this.handleClearValue();
            this.open = false;
          });
        }
      },
    });
  };

  handleFinish = async (item) => {
    var id = this.formValues.id;
    var data = {
      ...item,
      id: id,
      name: item.name,
      categoryId: item.category,
    };
    var method = id == null ? "post" : "put";
    var url = id == null ? "articles" : `articles/${data.id}`;
    var messages = id ? "update  sucessfull" : "create  sucessfull";
    this.loading = true;
    const res = await request(url, method, data);
    if (res) {
      message.success(messages);
      runInAction(() => {
        this.handleClearValue();
        this.open = false;
        this.articleList();
      });
    }
  };
}
