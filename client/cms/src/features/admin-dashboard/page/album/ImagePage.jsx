import { useParams } from "react-router-dom";
import { useEffect } from "react";

import MainPage from "../../components/page/MainPage";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";
import ImageHeader from "./ImageHeader";
import ImageTable from "./ImageTable";
import ImageModal from "./ImageModal";

const ImagePage = () => {
  const { mediaStore } = useStore();
  const { getList, loading } = mediaStore;
  const { contentId } = useParams();

  useEffect(() => {
    getList(contentId);
  }, [contentId, getList]);

  return (
    <MainPage loading={loading}>
      <ImageHeader />
      <ImageTable />
      <ImageModal />
    </MainPage>
  );
};

export default observer(ImagePage);
