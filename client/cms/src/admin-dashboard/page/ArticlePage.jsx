import {
  useEffect,
  useState,
  //  useRef
} from "react";
import { request } from "../../config/request";
import {
  Table,
  Button,
  Space,
  Modal,
  Input,
  Form,
  message,
  // Tag,
  Typography,
  Select,
} from "antd";
// import { formartDateClient } from "../config/helper";
import MainPage from "../components/page/MainPage";

const { Title } = Typography;
const CategoryPage = () => {
  const [list, setList] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formCat] = Form.useForm();

  useEffect(() => {
    getList();
  }, [formCat]);

  const getList = async () => {
    setLoading(true);
    const res = await request("articles", "get");
    const category = await request("categories", "get");
    setLoading(false);
    if (res) {
      setList(res);
      setCategory(category);
    }
  };

  const onClickBtnEdit = (item) => {
    formCat.setFieldsValue({
      ...item,
      id: item.id, //
      name: item.name,
      category: item.category.nameEn,
    });
    setOpen(true);
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
        const res = await request(`articles/${data.id}`, "delete", data);
        if (res) {
          message.success("Delete Sucessful");
          getList();
        }
      },
    });
  };

  const onFinish = async (item) => {
    var id = formCat.getFieldValue("id");
    var data = {
      id: id,
      name: item.name,
      categoryId: item.category,
    };
    var method = id == null ? "post" : "put";
    var url = id == null ? "articles" : `articles/${data.id}`;
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

  return (
    <MainPage loading={loading}>
      <Typography>
        <Title level={3}>Manage Article</Title>
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
            key: "name",
            title: "Name Article",
            dataIndex: "name",
          },
          {
            key: "category",
            title: "category Name",
            dataIndex: "category",
            // responsive: ["sm"],
            render: (value) => {
              return value.nameEn;
            },
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
      <Modal
        forceRender
        title={
          formCat.getFieldValue("id") == null ? "New Article" : "Update Article"
        }
        open={open}
        onCancel={onCloseModal}
        footer={null}
      >
        <Form form={formCat} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name={"name"}
            rules={[
              {
                required: true,
                message: "Please input nameKh!",
              },
            ]}
          >
            <Input placeholder="Article Name" />
          </Form.Item>
          <Form.Item
            label="Category Name"
            name={"category"}
            rules={[
              {
                required: true,
                message: "Please Select Category!",
              },
            ]}
          >
            <Select
              placeholder="Select Category"
              showSearch
              optionFilterProp="label"
            >
              {category.map((item, index) => (
                <Select.Option label={item.nameEn} key={index} value={item.id}>
                  {item.nameEn}
                </Select.Option>
              ))}
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

export default CategoryPage;
