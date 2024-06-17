import { useEffect } from "react";

import "react-quill/dist/quill.snow.css";
import MainPage from "../../components/page/MainPage";
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";
import ContentHeader from "./ContentHeader";
import ContentTable from "./ContentTable";
import ContentModal from "./ContentModal";

const ContentPage = () => {
  const { contentStore, articleStore } = useStore();
  const { getList, loading } = contentStore;

  useEffect(() => {
    getList();
    articleStore.articleList();
  }, [articleStore, getList]);

  return (
    <MainPage loading={loading}>
      <ContentHeader />
      <ContentTable />
      <ContentModal />
    </MainPage>
  );
};

export default observer(ContentPage);
