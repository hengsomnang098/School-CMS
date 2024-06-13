import { makeAutoObservable } from "mobx";

export default class BannerStore {
  bannerList = [];
  loading = false;
  open = false;
  formValues = {};

  constructor() {
    makeAutoObservable(this);
  }
  
  getList = async () => {};
}
