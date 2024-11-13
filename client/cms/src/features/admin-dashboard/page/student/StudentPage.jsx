import { useMemo } from "react";
import MainPage from "../../components/page/MainPage";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../app/stores/store";
import StudentHeader from "./StudentHeader";
import StudentTable from "./StudentTable";
import StudentModal from "./StudentModal";

const StudentPage = () => {
  const { studentStore } = useStore();
  const { getList, loading } = studentStore;

  useMemo(() => {
    getList();
  }, [getList]);

  return (
    <MainPage loading={loading}>
      <StudentHeader />
      <StudentTable />
      <StudentModal />
    </MainPage>
  );
};

export default observer(StudentPage);
