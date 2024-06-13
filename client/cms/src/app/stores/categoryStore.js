import { makeAutoObservable, runInAction } from "mobx";
import { request } from "../../config/request";
import { Modal, message } from "antd";
export default class CategoryStore {
  categories = [];
  open = false;
  formValues = {};
  loading = false;
  constructor() {
    makeAutoObservable(this);
  }
  getList = async () => {
    this.loading = true;
    const res = await request("categories", "get");

    runInAction(() => {
      if (res) {
        this.categories = res.object;
      }
      this.loading = false;
      this.open = false;
    });
  };

  handleClearValue = () => {
    this.formValues = {
      id: null,
      nameKh: "",
      nameEn: "",
    };
  };

  handleClickEdit = (item) => {
    this.formValues = {
      ...item,
      // id: item.id,
      // nameKh: item.nameKh,
      // nameEn: item.nameEn,
    };
    this.open = true;
    this.loading = false;
  };

  handleClickNew = () => {
    runInAction(() => {
      this.open = true;
      this.handleClearValue();
    });
  };

  handleCloseModal = () => {
    runInAction(() => {
      this.handleClearValue();
      this.open = false;
    });
  };

  handleSubMid = async (item) => {
    var id = this.formValues.id;
    this.loading = true;
    const data = { ...item };
    const method = id == null ? "post" : "put";
    const url = id == null ? "categories" : "categories/" + id;
    const res = await request(url, method, data);
    var messages = id ? "update  sucessfull" : "create  sucessfull";

    runInAction(() => {
      if (res) {
        message.success(messages);
        this.getList();
      }
      this.handleCloseModal();
      this.loading = false;
    });
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
        const res = await request(`categories/${item.id}`, "delete");
        runInAction(() => {
          this.loading = true;
          if (res) {
            message.success("Delete  Sucessfull");
            this.getList();
          }
          this.loading = false;
        });
      },
    });
  };
}
