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
  // Select,
  message,
  // Tag,
  Typography,
} from "antd";
import MainPage from "../components/page/MainPage";
import { isEmptyOrNull } from "../../config/helper";

const { Title } = Typography;
const StudentPage = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formCat] = Form.useForm();

  useEffect(() => {
    getList();
  }, [formCat]);

  const getList = async () => {
    setLoading(true);
    const res = await request("students", "get");
    setLoading(false);
    if (res) {
      setList(res.object);
    }
  };

  const onClickBtnEdit = (item) => {
    formCat.setFieldsValue({
      ...item,
      id: item.id, //
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
        setLoading(true);
        var data = {
          id: item.id,
        };
        const res = await request(`students/${data.id}`, "delete", data);
        if (res) {
          message.success("Delete Sucessful");
          getList();
        }
      },
    });
  };

  const onFinish = async (item) => {
    setLoading(true);
    var id = formCat.getFieldValue("id");
    var data = {
      ...item,
      id: id,
    };
    var method = id == null ? "post" : "put";
    var url = id == null ? "students" : `students/${data.id}`;
    var messages = id ? "update  sucessfull" : "create  sucessfull";
    isEmptyOrNull(data) ? message.error("Please input data") : "";
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
        <Title level={3}>Manage Student</Title>
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
            title: "name",
            dataIndex: "name",
          },
          {
            key: "description",
            title: "description",
            dataIndex: "description",
            responsive: ["sm"],
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
                  loading={loading}
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
          formCat.getFieldValue("id") == null ? "New Student" : "Update Student"
        }
        open={open}
        onCancel={onCloseModal}
        footer={null}
      >
        <Form form={formCat} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="name"
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
          <Form.Item
            label="description"
            name={"description"}
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input placeholder="Description" />
          </Form.Item>

          <Form.Item style={{ textAlign: "right" }}>
            <Space>
              <Button onClick={onCloseModal}>Cancel</Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                {formCat.getFieldValue("id") == null ? "Save" : "Update"}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </MainPage>
  );
};

export default StudentPage;
