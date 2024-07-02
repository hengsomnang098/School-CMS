import { Button, Space, Modal, Input, Form, Select } from "antd";
import { useEffect } from "react";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

const ArticleModal = () => {
  const { t } = useTranslation("global");
  const { articleStore, categoryStore } = useStore();
  const { formValues, handleCloseModal, handleFinish, loading, open } =
    articleStore;
  const [formCat] = Form.useForm();
  useEffect(() => {
    formCat.setFieldsValue(formValues);
  }, [formValues, formCat]);
  return (
    <>
      <Modal
        forceRender
        title={
          formCat.getFieldValue("id") == null ? "New Article" : "Update Article"
        }
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
                message: "Please input nameKh!",
              },
            ]}
          >
            <Input placeholder="Article Name" />
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
              {categoryStore.categories ? (
                categoryStore.categories.map((item, index) => (
                  <Select.Option
                    label={item.nameEn}
                    key={index}
                    value={item.id}
                  >
                    {item.nameEn}
                  </Select.Option>
                ))
              ) : (
                <></>
              )}
            </Select>
          </Form.Item>

          <Form.Item style={{ textAlign: "right" }}>
            <Space>
              <Button onClick={handleCloseModal}>{t("button.cancel")}</Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                {formValues.id == null ? t("button.save") : t("button.update")}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default observer(ArticleModal);
