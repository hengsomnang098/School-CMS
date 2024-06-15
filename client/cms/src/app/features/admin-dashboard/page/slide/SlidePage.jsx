import { useEffect } from "react";

import MainPage from "../../components/page/MainPage";

import { observer } from "mobx-react-lite";
import { useStore } from "../../../../stores/store";
import SlideHeader from "./SlideHeader";
import SlideTable from "./SlideTable";
import SlideModal from "./SlideModal";

const SlidePage = () => {
  const { slideStore } = useStore();
  const { getList, loading } = slideStore;

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <MainPage loading={loading}>
      <SlideHeader />
      <SlideTable />
      <SlideModal />
    </MainPage>
  );
};

export default observer(SlidePage);
