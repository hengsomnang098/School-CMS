import { makeAutoObservable } from "mobx";
export default class CardStore {
  selectedKey = localStorage.getItem("selectedKey") || "/dashboard";

  constructor() {
    makeAutoObservable(this);
  }
  selectKey(key) {
    this.selectedKey = key;
    localStorage.setItem("selectedKey", key); // Store the selected key in localStorage
  }
}
