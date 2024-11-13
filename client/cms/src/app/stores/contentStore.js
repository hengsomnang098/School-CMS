import { makeAutoObservable, runInAction, action } from "mobx";
import { request } from "../api/config/request";
import { Modal, message } from "antd";
import { debounce } from "lodash";

export default class ContentStore {
  content = [];
  loading = false;
  open = false;
  formValues = {};
  description = "";
  filePreview = null;
  fileSelected = null;
  dataFetched = false; // Flag to check if data is already fetched
  cacheExpiryTime = 0; // Cache expiry time initialized

  constructor() {
    makeAutoObservable(this);
    this.getList = debounce(this.getList, 300);
  }

  // Fetch content with caching mechanism
  getList = async () => {
    const currentTime = Date.now();
    // Check if the cache has expired (e.g., 5-minute expiry)
    if (currentTime < this.cacheExpiryTime) return;

    this.loading = true;
    try {
      const res = await request("contents", "get");
      if (res) {
        runInAction(() => {
          this.content = res.object;
          this.loading = false;
          this.cacheExpiryTime = currentTime + 5 * 60 * 1000; // Set cache to expire in 5 minutes
        });
      }
    } catch (error) {
      runInAction(() => {
        this.loading = false;
        console.error("Failed to fetch content:", error);
      });
    }
  };

  // Computed property for sorting content by ID
  get sortContentById() {
    return this.content ? this.content.slice().sort((a, b) => b.id - a.id) : [];
  }

  // Computed property to filter content based on description
  get searchContent() {
    return this.content
      ? this.content.filter((item) =>
          item.title.toLowerCase().includes(this.description.toLowerCase())
        )
      : [];
  }

  // Computed property to count content items
  get countContent() {
    return this.content ? this.content.length : 0;
  }

  // Action to set description
  setDescription = action((description) => {
    this.description = description || "";
  });

  // Handle file change
  handleChangeFile = (e) => {
    this.filePreview = URL.createObjectURL(e.target.files[0]);
    this.fileSelected = e.target.files[0];
  };

  // Clear image file
  handleClearImage = () => {
    this.filePreview = null;
    this.fileSelected = null;
  };

  // Clear form values and image
  handleClearValue = () => {
    this.formValues = {
      title: "",
      description: "",
      imageUrl: "",
      id: null,
      article: undefined,
    };
    this.handleClearImage();
  };

  // Open modal for new content
  handleClickNew = () => {
    this.handleClearValue();
    runInAction(() => {
      this.loading = true;
      this.open = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  };

  // Close modal and clear values
  handleCloseModal = () => {
    runInAction(() => {
      this.open = false;
      this.handleClearValue();
    });
  };

  // Edit existing content
  handleClickEdit = (item) => {
    this.formValues = {
      ...item,
      title: item.title,
      description: item.description,
      image: item.imageUrl,
      id: item.id,
      status: item.status,
      article:
        item.article === null ? "" : item.article.id || item.article.name,
    };
    this.filePreview = item.thumbnail;
    runInAction(() => {
      this.open = true;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  };

  // Delete content with confirmation
  handleClickDelete = async (item) => {
    Modal.confirm({
      title: "Delete",
      content: "Are you sure you want to delete?",
      okText: "Yes",
      cancelText: "No",
      okType: "danger",
      centered: true,
      onOk: async () => {
        const data = { id: item.id };
        try {
          const res = await request(`contents/${data.id}`, "delete", data);
          if (res) {
            runInAction(() => {
              message.success("Delete Successful");
              this.content = this.content.filter(
                (contentItem) => contentItem.id !== item.id
              );
            });
          }
        } catch (error) {
          console.error("Failed to delete content:", error);
        }
      },
    });
  };

  // Handle form submission
  handleFinish = async (item) => {
    this.loading = true;
    const id = this.formValues.id;
    const form = new FormData();
    const data = { ...item, id, articleId: item.article };
    const method = id == null ? "post" : "put";
    const url = id == null ? "contents" : `contents/${id}`;
    const messages = id ? "Update successful" : "Create successful";

    try {
      const res = await request(url, method, data);
      if (res) {
        runInAction(async () => {
          if (this.fileSelected !== null) {
            form.append("contentId", res.object.id);
            form.append("file", this.fileSelected);
            const img = await request(`contents/upload/image`, "put", form);
            if (img) {
              data.imageUrl = img;
            } else {
              return;
            }
          }
          message.success(messages);

          if (id == null) {
            this.content.push(res.object);
          } else {
            this.content = this.content.map((contentItem) =>
              contentItem.id === id ? res.object : contentItem
            );
          }
          this.handleCloseModal();
        });
      }
    } catch (error) {
      console.error("Failed to submit content:", error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  // Handle status update
  handleStatus = async (item) => {
    this.loading = true;
    const data = { id: item.id };
    const status = {
      status: item.status === "DRAFT" ? "DRAFT" : "PUBLISHED",
    };
    try {
      const res = await request(
        `contents/update/status/${item.id}?status=${status.status}`,
        "put",
        data
      );
      if (res) {
        runInAction(() => {
          message.success("Status update successful");
          this.getList();
        });
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
