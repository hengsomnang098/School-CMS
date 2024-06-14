import { Outlet } from "react-router-dom";
import { getRoles } from "../../../config/helper";
import NotFoundPage from "../../page/NotFoundPage";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";

const RequireAuth = () => {
  const { userStore } = useStore();
  const { currentUser } = userStore();
  if (!currentUser) {
    return <NotFoundPage />;
  }
  const roles = getRoles();
  return (
    <>
      {roles.includes("SUPER-ADMIN") || roles.includes("ADMIN") ? (
        <Outlet />
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default observer(RequireAuth);
