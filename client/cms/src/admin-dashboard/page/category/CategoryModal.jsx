/* eslint-disable react/prop-types */
import { Modal, Form, Input, Space, Button } from "antd";
const CategoryModal = ({
  formValues,
  handleCloseModal,
  formCat,
  onFinish,
  loading,
  open,
}) => {
  return (
    <>
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
    </>
  );
};

export default CategoryModal;
