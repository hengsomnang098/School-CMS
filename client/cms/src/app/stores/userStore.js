import { makeAutoObservable, runInAction } from "mobx";
import { request } from "../api/config/request";
import { setAccessToken, setRoles, setUser } from "../api/config/helper";

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
      console.log(res);
    }
  };

  handleClearValue = () => {
    this.formValues = {
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      roles: "",
    };
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
}
