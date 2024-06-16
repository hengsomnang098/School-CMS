import { makeAutoObservable } from "mobx";

export default class ContentStore {
  content = [];
  loading = false;
  open = false;
  formValues = {};
  
  constructor() {
    makeAutoObservable(this);
  }
}
