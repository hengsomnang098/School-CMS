import { useMemo } from "react";

import MainPage from "../../components/page/MainPage";

import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";
import SlideHeader from "./SlideHeader";
import SlideTable from "./SlideTable";
import SlideModal from "./SlideModal";

const SlidePage = () => {
  const { slideStore } = useStore();
  const { getList, loading } = slideStore;

  useMemo(() => {
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
