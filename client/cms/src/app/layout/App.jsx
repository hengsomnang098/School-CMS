import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import React from "react";

// Import essential components directly
import MainLayout from "../../features/admin-dashboard/components/layout/MainLayout";
import RequireAuth from "../../features/admin-dashboard/components/page/RequireAuth";
import LoginPage from "../../features/admin-dashboard/page/LoginPage";
import ServerErrorPage from "../../features/admin-dashboard/page/ServerErrorPage";
import NotFoundPage from "../../features/admin-dashboard/page/NotFoundPage";
import Layout from "../../features/homepage/layout/Layout";
import Home from "../../features/homepage/pages/Home";
import AboutPage from "../../features/homepage/pages/AboutPage";
import Contact from "../../features/homepage/pages/Contact";
import ManagementTeamsPage from "../../features/homepage/pages/ManagementTeamsPage";
import ListAllContentNews from "../../features/homepage/components/News/ListAllContentNews";
import ListAllContentEvents from "../../features/homepage/components/Events/ListAllContentEvent";
import SingleMember from "../../features/homepage/components/ManagementTeams/SingleMember";
import SingleContent from "../../features/homepage/components/Contents/SingleContent";

// Use React.lazy for non-essential or heavier components
const UserPage = React.lazy(() =>
  import("../../features/admin-dashboard/page/user/UserPage")
);
const ArticlesPage = React.lazy(() =>
  import("../../features/admin-dashboard/page/article/ArticlePage")
);
const HomePage = React.lazy(() =>
  import("../../features/admin-dashboard/page/home/HomePage")
);
const CategoryPage = React.lazy(() =>
  import("../../features/admin-dashboard/page/category/CategoryPage")
);
const ImagePage = React.lazy(() =>
  import("../../features/admin-dashboard/page/album/ImagePage")
);
const SlidePage = React.lazy(() =>
  import("../../features/admin-dashboard/page/slide/SlidePage")
);
const StudentPage = React.lazy(() =>
  import("../../features/admin-dashboard/page/student/StudentPage")
);
const StaffPage = React.lazy(() =>
  import("../../features/admin-dashboard/page/managementTeam/StaffPage")
);
const ContentPage = React.lazy(() =>
  import("../../features/admin-dashboard/page/contents/ContentPage")
);

function App() {
  return (
    <Routes>
      {/* Dashboard routes */}
      <Route
        element={
          <RequireAuth allowedRoles={["USERS", "SUPER-ADMIN", "ADMIN", "IT"]} />
        }
      >
        <Route element={<MainLayout />}>
          <Route
            path="/dashboard"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </React.Suspense>
            }
          />
          <Route
            path="/dashboard/category"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <CategoryPage />
              </React.Suspense>
            }
          />
          <Route
            path="/dashboard/article"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <ArticlesPage />
              </React.Suspense>
            }
          />
          <Route
            path="/dashboard/content"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <ContentPage />
              </React.Suspense>
            }
          />
          <Route
            path="/dashboard/content/albums/:contentId"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <ImagePage />
              </React.Suspense>
            }
          />
          <Route
            path="/dashboard/manage-banners"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <SlidePage />
              </React.Suspense>
            }
          />
          <Route
            path="/dashboard/student"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <StudentPage />
              </React.Suspense>
            }
          />
          <Route
            path="/dashboard/staff"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <StaffPage />
              </React.Suspense>
            }
          />

          {/* Protected routes for admin */}
          <Route
            element={
              <RequireAuth allowedRoles={["ADMIN", "IT", "SUPER-ADMIN"]} />
            }
          >
            <Route
              path="/dashboard/users"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <UserPage />
                </React.Suspense>
              }
            />
          </Route>
        </Route>
      </Route>

      {/* Error page */}
      <Route path="/server-error" element={<ServerErrorPage />} />

      {/* Homepage routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/managementteams" element={<ManagementTeamsPage />} />
        <Route path="/schoolnews" element={<ListAllContentNews />} />
        <Route path="/schoolevents" element={<ListAllContentEvents />} />
        <Route path="/event/:id" element={<SingleContent />} />
        <Route path="/new/:id" element={<SingleContent />} />
        <Route path="/content/:id" element={<SingleContent />} />
        <Route path="/teams/:id" element={<SingleMember />} />
      </Route>

      {/* Fallback route for 404 */}
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default observer(App);
