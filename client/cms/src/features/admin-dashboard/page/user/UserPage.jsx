import { useMemo } from "react";
// import { Form } from "antd";
import MainPage from "../../components/page/MainPage";
import { useStore } from "../../../../app/stores/store";
import { observer } from "mobx-react-lite";

import UserTable from "./UserTable";
import UserHeader from "./UserHeader";
import UserModal from "./UserModal";

const UserPage = () => {
  const { userStore, roleStore } = useStore();
  const { getList, loading } = userStore;

  // const [formCat] = Form.useForm();

  useMemo(() => {
    roleStore.roleList();
    getList("");
  }, [getList, roleStore]);

  return (
    <MainPage loading={loading}>
      <UserHeader />
      <UserTable />
      <UserModal />
    </MainPage>
  );
};

export default observer(UserPage);
