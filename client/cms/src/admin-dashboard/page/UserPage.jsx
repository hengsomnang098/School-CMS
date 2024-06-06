import { useEffect, useState, useRef } from "react";
import { request } from "../../config/request";
import {
  Table,
  Button,
  Space,
  Modal,
  Input,
  Form,
  // Select,
  message,
  // Tag,
  Typography,
} from "antd";
// import { formartDateClient } from "../config/helper";
import MainPage from "../components/page/MainPage";

const { Title } = Typography;
const UserPage = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formCat] = Form.useForm();

  const filterRef = useRef({
    firstname: "",
  });

  useEffect(() => {
    formCat.setFieldsValue({
      firstname: "",
    });
    getList();
  }, [formCat]);

  const getList = async () => {
    setLoading(true);
    var param = {
      firstname: filterRef.current.firstname,
    };
    const res = await request("users", "get", param);
    setLoading(false);
    if (res) {
      setList(res.object);
    }
  };

  const onChangeSearch = (e) => {
    filterRef.current.firstname = e.target.value;
    getList();
  };

  const onClickBtnEdit = (item) => {
    formCat.setFieldsValue({
      ...item,
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
        const res = await request(`users/${data.id}`, "delete", data);
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
      ...item,
      id: id,
      name: item.name,
    };
    var method = id == null ? "post" : "put";
    var url = id == null ? "users" : `users/${id}`;
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
        <Title level={3}>Manage Users</Title>
      </Typography>
      <Space>
        <Input.Search
          allowClear
          onChange={onChangeSearch}
          placeholder="Name or Code"
          size="large"
          className="2xl:w-96"
        />
        <Button
          onClick={() => {
            setOpen(true);
          }}
          type="primary"
          size="large"
        >
          New
        </Button>
      </Space>

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
            key: "firstname",
            title: "Firstname",
            dataIndex: "firstname",
          },
          {
            key: "lastname",
            title: "Lastname",
            dataIndex: "lastname",
          },
          {
            key: "email",
            title: "Email",
            dataIndex: "email",
          },
          {
            key: "Profile",
            title: "Profile",
            dataIndex: "profile",
          },
          {
            key: "status",
            title: "status",
            dataIndex: "status",
            responsive: ["md"],
            // render: (value) =>
            //   value == 1 ? (
            //     <Tag color="green">Actived</Tag>
            //   ) : (
            //     <Tag color="red">InActived</Tag>
            //   ),
          },
          {
            key: "Action",
            title: "Action",
            dataIndex: "Action",
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
          formCat.getFieldValue("id") == null ? "New Roles" : "Update Roles"
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
                message: "Please input Name!",
              },
            ]}
          >
            <Input placeholder="Name" />
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

export default UserPage;
