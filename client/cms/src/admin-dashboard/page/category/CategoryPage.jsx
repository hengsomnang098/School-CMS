import { useEffect } from "react";
import { Form } from "antd";
import MainPage from "../../components/page/MainPage";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import CategoryTable from "./CategoryTable";
import CategoryHeader from "./CategoryHeader";
import CategoryModal from "./CategoryModal";
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

  return (
    <MainPage loading={loading}>
      <CategoryHeader handleClickNew={handleClickNew} />
      <CategoryTable
        categories={categories}
        handleClickEdit={handleClickEdit}
        onClickBtnDelete={handleDelete}
      />

      <CategoryModal
        formValues={formValues}
        handleCloseModal={handleCloseModal}
        formCat={formCat}
        onFinish={onFinish}
        loading={loading}
        open={open}
      />
    </MainPage>
  );
};

export default observer(CategoryPage);
