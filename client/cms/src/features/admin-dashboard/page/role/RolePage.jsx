import { useMemo } from "react";
import MainPage from "../../components/page/MainPage";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";
import RoleHeader from "./RoleHeader";
import RoleTable from "./RoleTable";
import RoleModal from "./RoleModal";

const RolePage = () => {
  const { roleStore } = useStore();
  const { roleList, loading } = roleStore;

  useMemo(() => {
    roleList();
  }, [roleList]);

  return (
    <MainPage loading={loading}>
      <RoleHeader />
      <RoleTable />
      <RoleModal />
    </MainPage>
  );
};

export default observer(RolePage);
