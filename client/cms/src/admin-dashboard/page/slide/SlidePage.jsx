import { useEffect, useRef } from "react";
import { Form } from "antd";
import MainPage from "../../components/page/MainPage";

import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import SlideHeader from "./SlideHeader";
import SlideTable from "./SlideTable";
import SlideModal from "./SlideModal";

const SlidePage = () => {
  const { slideStore } = useStore();
  const {
    slides,
    getList,
    loading,
    open,
    handleEdit,
    formValues,
    handleCloseModal,
    filePreview,
    handleChangeFile,
    handleClearFile,
    handleDelete,
    handleFinish,
  } = slideStore;

  const [formCat] = Form.useForm();
  const fileRef = useRef(null);

  useEffect(() => {
    getList();
  }, [getList]);

  useEffect(() => {
    formCat.setFieldsValue(formValues);
  }, [formValues, formCat]);

  return (
    <MainPage loading={loading}>
      <SlideHeader />

      <SlideTable
        slides={slides}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        loading={loading}
      />

      <SlideModal
        formValues={formValues}
        handleCloseModal={handleCloseModal}
        formCat={formCat}
        handleFinish={handleFinish}
        filePreview={filePreview}
        fileRef={fileRef}
        handleChangeFile={handleChangeFile}
        handleClearFile={handleClearFile}
        loading={loading}
        open={open}
      />
    </MainPage>
  );
};

export default observer(SlidePage);
