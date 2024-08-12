import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";

// dashboard import-------------
import UserPage from "../../features/admin-dashboard/page/user/UserPage";
import ArticlesPage from "../../features/admin-dashboard/page/article/ArticlePage";
// import ContentPage from "../../features/admin-dashboard/page/contents/ContentPage";
import HomePage from "../../features/admin-dashboard/page/home/HomePage";
import NotFoundPage from "../../features/admin-dashboard/page/NotFoundPage";
import MainLayout from "../../features/admin-dashboard/components/layout/MainLayout";
import LoginPage from "../../features/admin-dashboard/page/LoginPage";
import SlidePage from "../../features/admin-dashboard/page/slide/SlidePage";
import StudentPage from "../../features/admin-dashboard/page/student/StudentPage";
import StaffPage from "../../features/admin-dashboard/page/managementTeam/StaffPage";
import CategoryPage from "../../features/admin-dashboard/page/category/CategoryPage";
// import RolePage from "../../features/admin-dashboard/page/role/RolePage";
import ImagePage from "../../features/admin-dashboard/page/album/ImagePage";
import RequireAuth from "../../features/admin-dashboard/components/page/RequireAuth";
import ServerErrorPage from "../../features/admin-dashboard/page/ServerErrorPage";
import React from "react";

function App() {
  const LazyLoad = React.lazy(() =>
    import("../../features/admin-dashboard/page/contents/ContentPage")
  );
  return (
    <Routes
      element={
        <RequireAuth allowedRoles={["USERS", "SUPER-ADMIN", "ADMIN", "IT"]} />
      }
    >
      {/* dashboard route */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/dashboard/category" element={<CategoryPage />} />
        <Route path="/dashboard/article" element={<ArticlesPage />} />
        <Route
          path="/dashboard/content"
          element={
            <React.Suspense>
              <LazyLoad />
            </React.Suspense>
          }
        />
        <Route
          path="/dashboard/content/albums/:contentId"
          element={<ImagePage />}
        />
        <Route path="/dashboard/content/albums" element={<ImagePage />} />
        <Route path="/dashboard/manage-banners" element={<SlidePage />} />
        <Route path="/dashboard/student" element={<StudentPage />} />
        <Route path="/dashboard/staff" element={<StaffPage />} />
        {/* Protected Route  */}
        <Route
          element={
            <RequireAuth allowedRoles={["ADMIN", "IT", "SUPER-ADMIN"]} />
          }
        >
          <Route path="/dashboard/users" element={<UserPage />} />
        </Route>
        {/* Protected Route  */}
      </Route>
      <Route path="/server-error" element={<ServerErrorPage />} />

      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default observer(App);
