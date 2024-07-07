/* eslint-disable react/prop-types */
import { Modal, Form, Input, Space, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { PlusOutlined, EditOutlined, StopOutlined } from "@ant-design/icons";

const CategoryModal = () => {
  const { t } = useTranslation("global");
  const { categoryStore } = useStore();
  const [formCat] = Form.useForm();
  const { formValues, handleCloseModal, handleSubMid, loading, open } =
    categoryStore;

  useEffect(() => {
    formCat.setFieldsValue(formValues);
  }, [formValues, formCat]);

  return (
    <>
      <Modal
        forceRender
        title={formValues.id == null ? "New Catetory" : "Update Category"}
        open={open}
        onCancel={handleCloseModal}
        footer={null}
      >
        <Form form={formCat} layout="vertical" onFinish={handleSubMid}>
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
              <Button
                iconPosition="end"
                className="bg-yellow-500 text-white"
                icon={<StopOutlined />}
                onClick={handleCloseModal}
              >
                {t("button.cancel")}
              </Button>
              <Button
                iconPosition="end"
                icon={
                  formValues.id == null ? <PlusOutlined /> : <EditOutlined />
                }
                type="primary"
                htmlType="submit"
                loading={loading}
              >
                {formValues.id == null ? t("button.save") : t("button.update")}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default observer(CategoryModal);
