import { useCallback, useEffect } from "react";

import "react-quill/dist/quill.snow.css";
import MainPage from "../../components/page/MainPage";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import ContentHeader from "./ContentHeader";
import ContentTable from "./ContentTable";
import ContentModal from "./ContentModal";

const ContentPage = () => {
  const { contentStore } = useStore();
  const { getList, loading } = contentStore;

  useCallback(() => {
    getList();
  }, [getList]);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <MainPage loading={loading}>
      <ContentHeader />
      <ContentTable />
      <ContentModal />
    </MainPage>
  );
};

export default observer(ContentPage);
