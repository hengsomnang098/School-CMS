import { Navigate, Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { getRoles } from "../../../../app/api/config/helper";
// Adjust the import path as necessary

const RequireAuth = observer(({ allowedRoles }) => {
  const userRoles = getRoles();

  const isAuthenticated = userRoles && userRoles.length > 0;
  const hasAccess = userRoles.some((role) => allowedRoles.includes(role));

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!hasAccess) {
    return <Navigate to="/not-found-page" />;
  }

  return <Outlet />;
});

export default RequireAuth;
