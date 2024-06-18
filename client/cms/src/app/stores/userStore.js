import { makeAutoObservable, runInAction } from "mobx";
import { request } from "../api/config/request";
import { setAccessToken, setRoles, setUser } from "../api/config/helper";
import { Modal } from "antd";

export default class UserStore {
  user = [];
  loading = false;
  open = false;
  formValues = {};
  fileSelected = "";
  filePreview = "";

  constructor() {
    makeAutoObservable(this);
  }

  handleLogin = async (item) => {
    this.loading = true;
    var email = item.email;
    var password = item.password;
    if (email == "" || password == "") {
      alert("Please fill in email or password!");
      return false;
    }
    var data = {
      email: email,
      password: password,
    };
    const res = await request("auth/login", "post", data);
    if (res) {
      if (res.error) {
        alert(res.message);
        this.loading = false;
      } else {
        setUser(res.object.email);
        setAccessToken(res.object.token);
        setRoles(res.object.roles);
        runInAction(() => {
          this.loading = false;
        });
      }
    }
    runInAction(() => {
      this.loading = false;
    });
  };

  getList = async (firstname) => {
    this.loading = true;
    const params = { firstname };

    const res = await request("users", "get", params);
    if (res) {
      runInAction(() => {
        this.user = res.object;
        this.loading = false;
      });
    }
  };

  handleClearImage = () => {
    this.fileSelected = "";
    this.filePreview = "";
  };

  handleClearValue = () => {
    this.formValues = {
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      roles: "",
    };
    this.handleClearImage();
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
      firstName: item.firstname,
      lastName: item.lastname,
      email: item.email,
      roles: item.roles[0],
    };
    this.filePreview = item.profile;
    this.open = true;
    this.loading = false;
  };

  handleStatus = async (item) => {
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
        var con = item.status === "ACTIVE" ? "disable" : "enable";
        const res = await request(`users/${con}/${data.id}`, "post", data);
        if (res) {
          this.open = false;
          this.getList();
        }
      },
    });
  };
}
