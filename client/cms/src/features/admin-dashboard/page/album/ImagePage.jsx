/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";

import MainPage from "../../components/page/MainPage";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";
import ImageHeader from "./ImageHeader";
import ImageTable from "./ImageTable";
import ImageModal from "./ImageModal";

const ImagePage = () => {
  const { mediaStore } = useStore();
  const { getList, loading } = mediaStore;
  const { id } = useParams();
  const contentId = id;

  const filterRef = useRef({
    contentId: contentId,
    mediaType: "",
  });

  useEffect(() => {
    var contentId = filterRef.current.contentId;
    var mediaType = filterRef.current.mediaType;
    getList(contentId, mediaType);
  }, [getList, contentId]);

  return (
    <MainPage loading={loading}>
      <ImageHeader />
      <ImageTable />
      <ImageModal />
    </MainPage>
  );
};

export default observer(ImagePage);
