import { useEffect, useState, useRef } from "react";
import { request } from "../../config/request";
import {
  Table,
  Button,
  Space,
  Modal,
  Input,
  Form,
  Image,
  message,
  Tag,
  Typography,
  Select,
} from "antd";
import MainPage from "../components/page/MainPage";

const { Title } = Typography;
const UserPage = () => {
  const [list, setList] = useState([]);
  const [roles, setRoles] = useState([]);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formCat] = Form.useForm();

  const filterRef = useRef({
    firstname: "",
  });

  useEffect(() => {
    formCat.setFieldsValue({
      firstname: "",
      roles: "",
    });
    getList();
  }, [formCat]);

  const getList = async () => {
    setLoading(true);
    var param = {
      firstname: filterRef.current.firstname,
    };
    const res = await request("users", "get", param);
    const role = await request("roles", "get");
    setLoading(false);
    if (res) {
      setList(res.object);
      setRoles(role.object);
    }
  };

  const onChangeSearch = (e) => {
    filterRef.current.firstname = e.target.value;
    getList();
  };

  const onClickBtnEdit = (item) => {
    formCat.setFieldsValue({
      ...item,
      roles: filterRef.current.roles,
    });
    setOpen(true);
    console.log(item);
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
        // const res = await request(`users/${data.id}`, "delete", data);
        // if (res) {
        //   message.success("Delete Sucessful");
        //   getList();
        // }
        console.log(data);
      },
    });
  };

  const onFinish = async (item) => {
    var id = formCat.getFieldValue("id");
    var data = {
      ...item,
      id: id,
    };
    // var method = id == null ? "post" : "put";
    var url = id == null ? "users" : `users/update/${id}`;
    var messages = id ? "update  sucessfull" : "create  sucessfull";
    const res = await request(url, "post", data);
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
        <Title level={3}>Manage Users </Title>
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
            render: (value) => {
              if (value != null && value != "") {
                return (
                  <>
                    <Image
                      //  src={item.mediaUrl}
                      src={value}
                      width={40}
                      height={30}
                    />
                  </>
                );
              } else {
                return (
                  <div
                    style={{ height: 30, width: 40, backgroundColor: "#888" }}
                  ></div>
                );
              }
            },
          },
          {
            key: "status",
            title: "status",
            dataIndex: "status",
            responsive: ["md"],
            render: (value) =>
              value == "ACTIVE" ? (
                <Tag color="green">ACTIVE</Tag>
              ) : (
                <Tag color="red">INACTIVIED</Tag>
              ),
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
                  Manage Status
                </Button>
              </Space>
            ),
          },
        ]}
      />
      <Modal
        forceRender
        title={
          formCat.getFieldValue("id") == null ? "New Users" : "Update Users"
        }
        open={open}
        onCancel={onCloseModal}
        footer={null}
      >
        <Form form={formCat} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Frist Name"
            name={"firstname"}
            rules={[
              {
                required: true,
                message: "Please input Frist Name!",
              },
            ]}
          >
            <Input placeholder="Frist Name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name={"lastname"}
            rules={[
              {
                required: true,
                message: "Please input Last Name!",
              },
            ]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name={"email"}
            rules={[
              {
                required: true,
                message: "Please input Email!",
              },
            ]}
          >
            <Input placeholder="Email" />
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
              {roles ? (
                roles.map((item, index) => (
                  <Select.Option
                    label={item.name}
                    key={index}
                    value={item.name}
                  >
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

export default UserPage;
