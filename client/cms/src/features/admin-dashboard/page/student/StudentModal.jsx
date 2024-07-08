import { Modal, Form, Input, Button } from "antd";
import { useStore } from "../../../../app/stores/store";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { EditOutlined, SaveOutlined, StopOutlined } from "@ant-design/icons";
const StudentModal = () => {
  const [formCat] = Form.useForm();

  const { t } = useTranslation("global");

  const { studentStore } = useStore();
  const { formValues, handleCloseModal, loading, open, handleFinish } =
    studentStore;

  useEffect(() => {
    formCat.setFieldsValue(formValues);
  }, [formCat, formValues]);
  return (
    <div>
      <Modal
        forceRender
        title={formValues.id == null ? "New Student" : "Update Student"}
        open={open}
        onCancel={handleCloseModal}
        footer={null}
      >
        <Form form={formCat} layout="vertical" onFinish={handleFinish}>
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
          <Form.Item
            label="Description"
            name={"description"}
            rules={[
              {
                required: true,
                message: "Please input Description!",
              },
            ]}
          >
            <Input placeholder="Description" />
          </Form.Item>

          <Form.Item>
            <div className="flex flex-row justify-end gap-2">
              <Button
                className="bg-yellow-500 text-white"
                iconPosition="end"
                icon={<StopOutlined />}
                onClick={handleCloseModal}
              >
                {t("button.cancel")}
              </Button>
              <Button
                icon={
                  formValues.id == null ? <SaveOutlined /> : <EditOutlined />
                }
                iconPosition="end"
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
    </div>
  );
};

export default observer(StudentModal);
