import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";

import MainPage from "../../components/page/MainPage";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";
import ImageHeader from "./ImageHeader";
import ImageTable from "./ImageTable";
import ImageModal from "./ImageModal";

const ImagePage = () => {
  const { mediaStore } = useStore();
  const { getList, loading, getAll } = mediaStore;
  const { contentId } = useParams();

  useMemo(() => {
    contentId ? getList(contentId) : getAll();
  }, [contentId, getAll, getList]);

  return (
    <MainPage loading={loading}>
      <ImageHeader />
      <ImageTable />
      <ImageModal />
    </MainPage>
  );
};

export default observer(ImagePage);
