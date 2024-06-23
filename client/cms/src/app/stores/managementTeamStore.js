import { makeAutoObservable, runInAction } from "mobx";
import { request } from "../api/config/request";
import { Modal, message } from "antd";

export default class ManagementTeamStore {
  managementTeam = [];
  open = false;
  loading = false;
  formValues = {};
  fileSelected = "";
  filePreview = "";

  constructor() {
    makeAutoObservable(this);
  }

  getList = async () => {
    this.loading = true;
    const res = await request("teams", "get");
    runInAction(() => {
      if (res) {
        this.managementTeam = res.object;
      }
      this.loading = false;
    });
  };

  handleClickNew = () => {
    this.open = true;
    this.handleClearValues();
  };

  handleCloseModal = () => {
    this.open = false;
    this.handleClearValues();
  };

  handleClearValues = () => {
    runInAction(() => {
      this.formValues.id = null;
      this.formValues = {
        name: "",
        description: "",
        photoUrl: "",
        bio: "",
      };
      this.handleClearFile();
    });
  };

  handleClearFile = () => {
    runInAction(() => {
      this.fileSelected = "";
      this.filePreview = "";
    });
  };

  handleEdit = (item) => {
    this.formValues = {
      ...item,
    };
    this.filePreview = item.photoUrl;
    this.open = true;
    this.loading = false;
  };

  handleChangeFile = (e) => {
    if (e.target) {
      runInAction(() => {
        var file = e.target.files[0];
        var filePreView = URL.createObjectURL(file);
        this.fileSelected = file;
        this.filePreview = filePreView;
      });
    }
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
        const res = await request(`teams/${data.id}`, "delete", data);
        if (res) {
          runInAction(() => {
            message.success("Delete Sucessful");
            this.getList();
          });
        }
      },
    });
  };

  handleFinish = async (item) => {
    this.loading = true;
    var id = this.formValues.id;
    var form = new FormData();
    const data = {
      ...item,
      photoUrl: item.photoUrl,
      id: id,
      name: item.name,
      description: item.description,
      bio: item.bio,
    };

    var method = id == null ? "post" : "put";
    var url = id == null ? "teams" : `teams/${id}`;
    var messages = id ? "update  sucessfull" : "create  sucessfull";
    const res = await request(url, method, data);
    if (res) {
      runInAction(async () => {
        if (this.fileSelected !== "") {
          form.append("teamId", res.object.id);
          form.append("file", this.fileSelected);
          const img = await request(`teams/upload/image`, "put", form);
          if (img) {
            data.photoUrl = img;
          }
        }
        message.success(messages);
        this.getList();
        this.open = false;
      });
    }
  };
}
