/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
  Image,
  Typography,
} from "antd";
import MainPage from "../components/page/MainPage";

const { Title } = Typography;

const ImagePage = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formCat] = Form.useForm();
  const { id } = useParams();
  const contentId = id;
  useEffect(() => {
    getList();
  }, [formCat]);

  const getList = async () => {
    setLoading(true);
    const res = await request(`medias/content/${contentId}`, "get");
    if (res) {
      setList(res);
      setLoading(false);
    }
  };

  const onClickBtnEdit = (item) => {
    formCat.setFieldsValue({
      ...item,
      contentId: contentId,
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
        const res = await request(`medias/${data.id}`, "delete", data);
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
      contentId: contentId,
    };
    var method = id == null ? "post" : "put";
    var url = id == null ? "medias" : `medias/photo/${id}`;
    var messages = id ? "update  sucessfull" : "create  sucessfull";
    const res = await request(url, method, data);
    console.log(data);
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
        <Title level={3}>Manage Image</Title>
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
            title: "Name",
            dataIndex: "name",
          },
          {
            key: "mediaType",
            title: "MediaType",
            dataIndex: "mediaType",
            responsive: ["sm"],
          },
          // {
          //   key: "mediaUrl",
          //   title: "MediaUrl",
          //   dataIndex: "mediaUrl",
          //   responsive: ["sm"],
          // },
          {
            key: "mediaUrl",
            title: "Image",
            dataIndex: "mediaUrl",
            render: (value, item) => {
              if (value != null && value != "") {
                return (
                  <>
                    <Image src={item.mediaUrl} width={40} height={30} />
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
          formCat.getFieldValue("id") == null ? "New Image" : "Update Image"
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
            <Input placeholder="Name Image" />
          </Form.Item>

          <Form.Item
            label="MediaType"
            name={"mediaType"}
            rules={[
              {
                required: true,
                message: "Please Select MediaType!",
              },
            ]}
          >
            {/* <Input placeholder="nameEn" /> */}
            <Select>
              <Select.Option value="image">Image</Select.Option>
              <Select.Option value="files">Files</Select.Option>
              <Select.Option value="video">Video</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="MediaUrl"
            name={"mediaUrl"}
            rules={[
              {
                required: true,
                message: "Please input mediaUrl",
              },
            ]}
          >
            <img src={list.mediaUrl} name="mediaUrl" id="" alt="" />
          </Form.Item>
          <input type="file" name="mediaUrl" id="" src={list.mediaUrl} />
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

export default ImagePage;
