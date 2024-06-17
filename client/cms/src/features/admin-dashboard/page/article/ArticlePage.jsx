import { useEffect } from "react";
import MainPage from "../../components/page/MainPage";

import { observer } from "mobx-react-lite";
import ArticleHeader from "./ArticleHeader";
import ArticleTable from "./ArticleTable";
import ArticleModal from "./ArticleModal";
import { useStore } from "../../../../app/stores/store";

const CategoryPage = () => {
  const { articleStore, categoryStore } = useStore();
  const { articleList, loading } = articleStore;

  useEffect(() => {
    articleList();
    categoryStore.getList();
  }, [categoryStore, articleList]);

  return (
    <MainPage loading={loading}>
      <ArticleHeader />
      <ArticleTable />
      <ArticleModal />
    </MainPage>
  );
};

export default observer(CategoryPage);
