import { useEffect } from "react";

import MainPage from "../../components/page/MainPage";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";
import StaffHeader from "./StaffHeader";
import StaffTable from "./StaffTable";
import StaffModal from "./StaffModal";

const StaffPage = () => {
  const { managementTeamStore } = useStore();
  const { getList, loading } = managementTeamStore;

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <MainPage loading={loading}>
      <StaffHeader />
      <StaffTable />
      <StaffModal />
    </MainPage>
  );
};

export default observer(StaffPage);
