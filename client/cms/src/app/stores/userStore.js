import { makeAutoObservable, runInAction } from "mobx";
import { request } from "../api/config/request";
import { setAccessToken, setRoles, setUser } from "../api/config/helper";
import { Modal, message } from "antd";

export default class UserStore {
  user = [];
  loading = false;
  open = false;
  formValues = {};
  fileSelected = null;
  filePreview = null;

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
    this.fileSelected = null;
    this.filePreview = null;
  };

  handleChangeImage = (e) => {
    this.filePreview = URL.createObjectURL(e.target.files[0]);
    this.fileSelected = e.target.files[0];
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
          this.getList("");
        }
      },
    });
  };

  handleFinish = async (item) => {
    var id = this.formValues.id;
    var form = new FormData();
    var data = {
      ...item,
      roles: [item.roles],
      id: id,
    };

    var url = id == null ? "auth/register" : `users/update/${id}`;
    try {
      const res = await request(url, "post", data);
      var messages = id == null ? "Register Sucessful" : "Update Sucessful";
      if (res) {
        runInAction(async () => {
          if (this.fileSelected != null && id != null) {
            form.append("userId", id);
            form.append("file", this.fileSelected);
            const img = await request(`users/update/profile`, "put", form);
            if (img) {
              data.profile = img;
            } else {
              return false;
            }
          }
          this.loading = true;
          message.success(messages);
          this.open = false;
          this.getList("");
        });
      }
    } catch (error) {
      this.loading = false;
      console.error("Error Response:", error.response?.data); // Log the error response
      message.error("An error occurred while processing your request.");
    }
  };
}
