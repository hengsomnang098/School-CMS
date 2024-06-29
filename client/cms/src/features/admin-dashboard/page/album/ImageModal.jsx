import { Button, Space, Modal, Form } from "antd";
import { useEffect } from "react";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
const ImageModal = () => {
  const { mediaStore } = useStore();
  const {
    formValues,
    handleCloseModal,
    handleFinish,
    loading,
    open,
    handleChangeFile,
  } = mediaStore;

  const [formCat] = Form.useForm();
  const { contentId } = useParams();

  useEffect(() => {
    formCat.setFieldsValue(formValues);
  }, [formValues, formCat]);

  const handleUploadChange = ({ fileList }) => {
    handleChangeFile(fileList);
  };
  handleUploadChange;

  return (
    <>
      <Modal
        forceRender
        title={"New Albums"}
        open={open}
        onCancel={handleCloseModal}
        footer={null}
      >
        <Form
          form={formCat}
          layout="vertical"
          onFinish={(value) => {
            handleFinish(value, contentId);
          }}
        >
          <Form.Item label="Ablums" name={"albumFiles"}>
            <input type="file" multiple onChange={(e) => handleChangeFile(e)} />
            {/* <Upload
              listType="picture-card"
              fileList={filePreview}
              onChange={handleChangeFile}
              onRemove={handleClearImage}
            >
              {filePreview.length >= 8 ? null : <div>Upload</div>}
            </Upload> */}
          </Form.Item>

          {/* <button onClick={handleClearImage}>Clear Image</button> */}

          <Form.Item style={{ textAlign: "right" }}>
            <Space>
              <Button onClick={handleCloseModal}>Cancel</Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                Upload
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default observer(ImageModal);
