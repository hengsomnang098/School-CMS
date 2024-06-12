import { Outlet } from "react-router-dom";
import { getRoles } from "../../../config/helper";

const RequireAuth = () => {
  const roles = getRoles();
  return (
    <>
      {roles.includes("SUPER-ADMIN") || roles.includes("ADMIN") ? (
        <Outlet />
      ) : (
        <h1> You Not Have Permission to access it</h1>
      )}
    </>
  );
};

export default RequireAuth;
