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
// import { formartDateClient } from "../config/helper";
import MainPage from "../components/page/MainPage";

const { Title } = Typography;
const CategoryPage = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formCat] = Form.useForm();

  useEffect(() => {
    getList();
  }, [formCat]);

  const getList = async () => {
    setLoading(true);

    const res = await request("categories", "get");
    setLoading(false);
    if (res) {
      setList(res.object);
    }
  };

  const onClickBtnEdit = (item) => {
    formCat.setFieldsValue({
      id: item.id, //
      nameKh: item.nameKh,
      nameEn: item.nameEn,
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
    var data = {
      id: id,
      nameKh: item.nameKh,
      nameEn: item.nameEn,
    };
    var method = id == null ? "post" : "put";
    var url = id == null ? "categories" : `categories/${data.id}`;
    var messages = id ? "update  sucessfull" : "create  sucessfull";
    const res = await request(url, method, data);
    if (res) {
      message.success(messages);
      getList();
      onCloseModal();
    }
  };

  // const onChangeSearch = (e) => {
  //   filterRef.current.txt_search = e.target.value;
  //   getList();
  // };
  // const onChangeStatus = (value) => {
  //   filterRef.current.status = value;
  //   getList();
  // };

  const onCloseModal = () => {
    formCat.resetFields();
    // formCat.setFieldsValue({
    //   Status: "1",
    // });
    setOpen(false);
  };

  return (
    <MainPage loading={loading}>
      <Typography>
        <Title level={3}>Manage Category</Title>
      </Typography>
      <div className="flex 2xl:flex-row flex-col gap-2 justify-center size-16">
        {/* <Input.Search
          allowClear
          onChange={onChangeSearch}
          placeholder="Name or Code"
          size="large"
          className="2xl:w-96"
        />
        <Select
          onChange={onChangeStatus}
          placeholder="Status"
          className="2xl:w-36"
          size="large"
          defaultValue={"1"}
        >
          <Select.Option value={"1"}>Active</Select.Option>
          <Select.Option value={"0"}>InActive</Select.Option>
        </Select> */}
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
            key: "nameKh",
            title: "Name Khmer",
            dataIndex: "nameKh",
          },
          {
            key: "nameEn",
            title: "Name English",
            dataIndex: "nameEn",
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
          formCat.getFieldValue("id") == null
            ? "New Catetory"
            : "Update Category"
        }
        open={open}
        onCancel={onCloseModal}
        footer={null}
      >
        <Form form={formCat} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="nameKh"
            name={"nameKh"}
            rules={[
              {
                required: true,
                message: "Please input nameKh!",
              },
            ]}
          >
            <Input placeholder="Name KH" />
          </Form.Item>
          <Form.Item
            label="nameEn"
            name={"nameEn"}
            rules={[
              {
                required: true,
                message: "Please input nameEn!",
              },
            ]}
          >
            <Input placeholder="nameEn" />
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
