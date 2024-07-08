/* eslint-disable react/prop-types */
import { Modal, Form, Input, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { EditOutlined, StopOutlined, SaveOutlined } from "@ant-design/icons";

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
            label="Category Khmer"
            name={"nameKh"}
            rules={[
              {
                required: true,
                message: "Please input NameKh!",
              },
            ]}
          >
            <Input placeholder="Name KH" />
          </Form.Item>
          <Form.Item
            label="Category English"
            name={"nameEn"}
            rules={[
              {
                required: true,
                message: "Please input NameEn!",
              },
            ]}
          >
            <Input placeholder="nameEn" />
          </Form.Item>

          <Form.Item>
            <div className="flex flex-row text-right gap-2 justify-end">
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
                  formValues.id == null ? <SaveOutlined /> : <EditOutlined />
                }
                type="primary"
                htmlType="submit"
                loading={loading}
              >
                {formValues.id == null ? t("button.save") : t("button.update")}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default observer(CategoryModal);
