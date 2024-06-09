import { useEffect, useState, useRef } from "react";
import { request } from "../../config/request";
import {
  Table,
  Button,
  Space,
  Modal,
  Input,
  Form,
  Select,
  message,
  // Tag,
  Typography,
} from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import MainPage from "../components/page/MainPage";
import { Link } from "react-router-dom";

const { Title } = Typography;
const ContentPage = () => {
  const [list, setList] = useState();
  const [articles, setArticles] = useState([]);

  const [description, setDescription] = useState(list?.description || "");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formCat] = Form.useForm();

  const quillRef = useRef(null);

  useEffect(() => {
    getList();
  }, [formCat]);

  const getList = async () => {
    setLoading(true);
    const res = await request("contents", "get");
    const article = await request("articles", "get");
    setLoading(false);
    if (res) {
      setList(res.object);
      setArticles(article.object);
    }
  };

  const onClickBtnEdit = (item) => {
    formCat.setFieldsValue({
      ...item,
      id: item.id, //
      title: item.title,
      description: item.description,
      article: item.article.id,
    });
    setOpen(true);
    console.log(quillRef);
  };
  const onClickBtnDelete = async (item) => {
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
        const res = await request(`categories/${data.id}`, "delete", data);
        if (res) {
          message.success("Delete Sucessful");
          getList();
        }
      },
    });
  };

  const onFinish = async (item) => {
    var id = formCat.getFieldValue("id");
    // item.description = description;
    var data = {
      ...item,
      id: id,
      title: item.title,
      description: description,
      articleId: item.article,
    };
    var method = id == null ? "post" : "put";
    var url = id == null ? "contents" : `contents/${id}`;
    var messages = id ? "update  sucessfull" : "create  sucessfull";
    const res = await request(url, method, data);
    if (res) {
      message.success(messages);
      getList();
      onCloseModal();
    }
  };

  const onCloseModal = () => {
    formCat.resetFields();
    setOpen(false);
  };
  function truncate(str) {
    if (str) {
      return str.length > 40 ? str.substring(0, 37) + "..." : str;
    }
  }
  return (
    <MainPage loading={loading}>
      <Typography>
        <Title level={3}>Manage Content</Title>
      </Typography>
      <div className="flex 2xl:flex-row flex-col gap-2 justify-center size-16">
        <Button
          onClick={() => {
            setOpen(true);
          }}
          type="primary"
          size="large"
        >
          New
        </Button>
      </div>

      <Table
        rowKey="id"
        dataSource={list}
        pagination={{
          pageSize: 5,
          // total: 100,
        }}
        // onChange={}
        columns={[
          {
            key: "id",
            title: "id",
            dataIndex: "id",
            // render: (value, item, index) => index + 1,
            responsive: ["sm"],
          },
          {
            key: "title",
            title: "Name title",
            dataIndex: "title",
            render: (value) => {
              return truncate(value);
            },
          },
          {
            key: "description",
            title: "Description",
            dataIndex: "description",
            responsive: ["sm"],
            render: (value) => {
              return truncate(value);
            },
          },
          {
            key: "article",
            title: "Article Name",
            dataIndex: "article",
            responsive: ["sm"],
            render: (value) => {
              return value.name;
            },
          },
          {
            key: "mediaList",
            title: "Manage Images ",
            dataIndex: "mediaList",
            responsive: ["sm"],
            render: (value, item) => (
              <Space>
                {/* <Button
                  size="large"
                  // onClick={}
                  type="primary"
                >
                  Manage Images
                </Button> */}
                <Link to={`../dashboard/content/medias/${item.id}`}>
                  Manage Images
                </Link>
              </Space>
            ),
          },
          {
            key: "Action",
            title: "Action",
            dataIndex: "Status",
            render: (value, item) => (
              <Space>
                <Button
                  size="large"
                  onClick={() => onClickBtnEdit(item)}
                  type="primary"
                >
                  Edit
                </Button>
                <Button
                  size="large"
                  onClick={() => onClickBtnDelete(item)}
                  type="primary"
                  danger
                >
                  Delete
                </Button>
              </Space>
            ),
          },
        ]}
      />
      {/* Model for Content */}
      <Modal
        forceRender
        title={
          formCat.getFieldValue("id") == null ? "New Content" : "Update Content"
        }
        open={open}
        onCancel={onCloseModal}
        footer={null}
      >
        <Form form={formCat} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Title"
            name={"title"}
            rules={[
              {
                required: true,
                message: "Please input title!",
              },
            ]}
          >
            <Input placeholder="title" />
          </Form.Item>
          <Form.Item
            label="Description"
            name={"description"}
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            {/* <Input placeholder="description" /> */}

            <ReactQuill
              ref={quillRef}
              theme="snow"
              value={description}
              onChange={setDescription}
            />
          </Form.Item>
          <Form.Item
            label="ArticleName"
            name={"article"}
            rules={[
              {
                required: true,
                message: "Please Select Article!",
              },
            ]}
          >
            <Select
              placeholder="Select Article"
              showSearch
              optionFilterProp="label"
            >
              {articles ? (
                articles.map((item, index) => (
                  <Select.Option label={item.name} key={index} value={item.id}>
                    {item.name}
                  </Select.Option>
                ))
              ) : (
                <></>
              )}
            </Select>
          </Form.Item>
          <Form.Item style={{ textAlign: "right" }}>
            <Space>
              <Button onClick={onCloseModal}>Cancel</Button>
              <Button type="primary" htmlType="submit">
                {formCat.getFieldValue("id") == null ? "Save" : "Update"}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </MainPage>
  );
};

export default ContentPage;
