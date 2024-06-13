import { useEffect } from "react";

import MainPage from "../../components/page/MainPage";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import CategoryTable from "./CategoryTable";
import CategoryHeader from "./CategoryHeader";
import CategoryModal from "./CategoryModal";
const CategoryPage = () => {
  const { categoryStore } = useStore();
  const { getList, loading } = categoryStore;

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <MainPage loading={loading}>
      <CategoryHeader />
      <CategoryTable />
      <CategoryModal />
    </MainPage>
  );
};

export default observer(CategoryPage);
