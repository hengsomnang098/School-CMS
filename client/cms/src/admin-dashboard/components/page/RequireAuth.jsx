import { Outlet } from "react-router-dom";
import { getRoles } from "../../../config/helper";
import NotFoundPage from "../../page/NotFoundPage";
import { observer } from "mobx-react-lite";
  
const RequireAuth = () => {
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
