import { makeAutoObservable, runInAction } from "mobx";
import { request } from "../api/config/request";
import { setAccessToken, setRoles, setUser } from "../api/config/helper";

export default class UserStore {
  user = [];
  loading = false;

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
}
