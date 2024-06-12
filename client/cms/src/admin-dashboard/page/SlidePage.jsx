/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { request } from "../../config/request";
import {
  Table,
  Button,
  Space,
  Modal,
  Input,
  Form,
  message,
  Image,
  Typography,
} from "antd";
import MainPage from "../components/page/MainPage";

const { Title } = Typography;

const SlidePage = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [formCat] = Form.useForm();

  const [fileSelected, setFileSelected] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const fileRef = useRef(null);

  const onChangeFile = (e) => {
    var file = e.target.files[0];
    var filePreView = URL.createObjectURL(file);
    setFileSelected(file);
    setFilePreview(filePreView);
    // console.log(file);
    // console.log(filePreView);
  };

  const onClearImage = () => {
    // fileRef.current.value = null;
    setFilePreview(null);
    setFileSelected(null);
  };

  useEffect(() => {
    getList();
  }, [formCat]);

  const getList = async () => {
    setLoading(true);
    const res = await request(`slides`, "get");
    if (res) {
      setList(res.object);
      setLoading(false);
    }
  };

  const onClickBtnEdit = (item) => {
    formCat.setFieldsValue({
      ...item,
    });
    setOpen(true);
    setFilePreview(item.imageUrl);
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
        setLoading(false);
        var data = {
          id: item.id,
        };
        const res = await request(`slides/${data.id}`, "delete", data);
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
    var form = new FormData();
    var data = {
      ...item,
    };
    if (fileSelected != null && id != null) {
      form.append("slideId", id);
      form.append("file", fileSelected);
      const img = await request(`slides/upload/image`, "put", form);
      if (img) {
        data.imageUrl = img;
      } else {
        return false;
      }
    }

    var method = id == null ? "post" : "put";
    var url = id == null ? "slides" : `slides/${id}`;
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
    onClearImage();
  };
  return (
    <MainPage loading={loading}>
      <Typography>
        <Title level={3}>Manage Banner</Title>
      </Typography>

      <Space>
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
            key: "name",
            title: "Name",
            dataIndex: "name",
          },
          {
            key: "description",
            title: "Description",
            dataIndex: "description",
            responsive: ["sm"],
          },
          {
            key: "imageUrl",
            title: "ImageUrl",
            dataIndex: "imageUrl",
            responsive: ["sm"],
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
          formCat.getFieldValue("id") == null ? "New Banner" : "Update Banner"
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
            label="description"
            name={"description"}
            rules={[
              {
                required: true,
                message: "Please Select description!",
              },
            ]}
          >
            <Input placeholder="Name Image" />
          </Form.Item>
          {formCat.getFieldValue("id") != null ? (
            <>
              {" "}
              <Form.Item label="imageUrl" name={"imageUrl"}>
                <Image
                  // src={list.mediaUrl}
                  src={
                    filePreview
                      ? filePreview
                      : "data:image/png;base64,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"
                  }
                  className="w-full"
                />
              </Form.Item>
              <input
                ref={fileRef}
                type="file"
                onChange={onChangeFile}
                src={filePreview}
              />
              <button onClick={onClearImage}>Clear Image</button>
            </>
          ) : (
            <></>
          )}

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

export default SlidePage;
