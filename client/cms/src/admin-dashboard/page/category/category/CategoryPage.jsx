import { useEffect } from "react";
import { Table, Button, Space, Modal, Input, Form, Typography } from "antd";
import MainPage from "../../../components/page/MainPage";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";

const { Title } = Typography;
const CategoryPage = () => {
  const [formCat] = Form.useForm();
  const { categoryStore } = useStore();
  const {
    formValues,
    getList,
    handleClickNew,
    categories,
    loading,
    handleClickEdit,
    open,
    handleCloseModal,
    handleSubMid,
    handleDelete,
  } = categoryStore;

  useEffect(() => {
    getList();
  }, [getList]);

  useEffect(() => {
    formCat.setFieldsValue(formValues);
  }, [formValues, formCat]);

  const onFinish = (values) => {
    values.id = formCat.getFieldValue("id");
    handleSubMid(values);
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
        handleDelete(item);
      },
    });
  };

  return (
    <MainPage loading={loading}>
      <Typography>
        <Title level={3}>Manage Category</Title>
      </Typography>
      <div className="flex 2xl:flex-row flex-col gap-2 justify-center size-16">
        <Button
          onClick={() => {
            handleClickNew();
          }}
          type="primary"
          size="large"
        >
          New
        </Button>
      </div>

      <Table
        rowKey="id"
        dataSource={categories}
        pagination={{
          pageSize: 5,
        }}
        columns={[
          {
            key: "id",
            title: "id",
            dataIndex: "id",
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
                  // onClick={() => onClickBtnEdit(item)}
                  onClick={() => handleClickEdit(item)}
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
        title={formValues.id == null ? "New Catetory" : "Update Category"}
        open={open}
        onCancel={handleCloseModal}
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
              <Button onClick={handleCloseModal}>Cancel</Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                {formValues.id == null ? "Save" : "Update"}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </MainPage>
  );
};

export default observer(CategoryPage);
