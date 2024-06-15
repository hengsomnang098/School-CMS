import { makeAutoObservable, runInAction } from "mobx";
import { request } from "../api/config/request";
import { Modal, message } from "antd";

export default class RoleStore {
  roles = [];
  loading = false;
  open = false;
  formValues = {};
  constructor() {
    makeAutoObservable(this);
  }

  roleList = async () => {
    this.loading = true;
    const res = await request("roles", "get");
    runInAction(() => {
      if (res) {
        this.roles = res.object;
      }
      this.loading = false;
    });
  };

  handleEdit = (item) => {
    this.formValues = {
      ...item,
      id: item.id,
      name: item.name,
    };
    this.open = true;
    this.loading = false;
  };

  handleClearValue = () => {
    this.formValues = {
      id: null,
      name: "",
    };
  };

  handleCloseModal = () => {
    runInAction(() => {
      this.handleClearValue();
      this.open = false;
    });
  };

  handleClickNew = () => {
    runInAction(() => {
      this.open = true;
      this.handleClearValue();
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
        var data = {
          id: item.id,
        };
        const res = await request(`roles/${data.id}`, "delete", data);
        if (res) {
          message.success("Delete Sucessful");
          this.open = false;
          this.roleList();
        }
      },
    });
  };
  handleFinish = async (item) => {
    this.loading = true;
    var id = this.formValues.id;
    var data = {
      ...item,
      id: id,
      name: item.name,
    };
    const method = id == null ? "post" : "put";
    const url = id == null ? "roles" : "roles/" + id;
    const res = await request(url, method, data);
    var messages = id ? "update  sucessfull" : "create  sucessfull";
    runInAction(() => {
      if (res) {
        message.success(messages);
        this.handleCloseModal();
        this.roleList();
      }
      this.loading = false;
    });
  };
}
