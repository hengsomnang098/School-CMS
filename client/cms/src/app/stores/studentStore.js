import { makeAutoObservable, runInAction } from "mobx";
import { request } from "../api/config/request";
import { Modal, message } from "antd";

export default class StudentStore {
  students = [];
  loading = false;
  open = false;
  formValues = {};

  constructor() {
    makeAutoObservable(this);
  }

  getList = async () => {
    this.loading = true;
    const res = await request("students", "get");
    if (res) {
      runInAction(() => {
        this.students = res.object;
        this.loading = false;
        this.open = false;
      });
    }
  };

  handleClearValue = () => {
    this.formValues = {
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };
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

  handleEdit = (item) => {
    this.formValues = {
      ...item,
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      phone: item.phone,
    };
    this.open = true;
    this.loading = false;
  };

  handleDelete = async (item) => {
    Modal.confirm({
      title: "Delete",
      content: "Are you sure you want to delete?",
      okText: "Yes",
      cancelText: "No",
      okType: "danger",
      centered: true,
      onOk: async () => {
        var data = {
          id: item.id,
        };
        const res = await request(`students/${data.id}`, "delete", data);
        if (res) {
          runInAction(() => {
            this.loading = true;
            message.success("Delete Successfully");
            this.getList();
            this.handleClearValue();
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
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      phone: item.phone,
    };
    var method = id == null ? "post" : "put";
    var url = id == null ? "students" : `students/${data.id}`;
    var messages = id ? "update  sucessfull" : "create  sucessfull";
    this.loading = true;
    const res = await request(url, method, data);
    if (res) {
      message.success(messages);
      runInAction(() => {
        this.handleClearValue();
        this.open = false;
        this.getList();
      });
    }
  };
}
