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

// homepage import --------------
import NotFound from "../../features/homepage/pages/NotFound";
import Home from "../../features/homepage/pages/Home";
import About from "../../features/homepage/pages/About";
import Contact from "../../features/homepage/pages/Contact";
import OurProgramsPage from "../../features/homepage/pages/OurProgramsPage";
import Layout from "../../features/homepage/layout/Layout";
import Admission from "../../features/homepage/pages/Admission";
import ActivitiesPage from "../../features/homepage/pages/ActivitiesPage";
import ManagementTeamsPage from "../../features/homepage/pages/ManagementTeamsPage";
import EventsPage from "../../features/homepage/pages/EventsPages";
import SingleMember from "../../features/homepage/components/ManagementTeams/SingleMember";
import SingleContent from "../../features/homepage/components/Contents/SingleContent";
import SchoolNewsPage from "../../features/homepage/pages/SchoolNewsPage";
import ListAllContentNews from "../../features/homepage/components/News/ListAllContentNews";
import ListAllContentEvents from "../../features/homepage/components/Events/ListAllContentEvent";
import React from "react";

// import ContentForm from "../../features/admin-dashboard/page/contents/ContentForm";

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
        {/* <Route element={<RequireAuth allowedRoles={["SUPER-ADMIN", "IT"]} />}>
          <Route path="/dashboard/roles" element={<RolePage />} />
        </Route> */}

        {/* Protected Route  */}

        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/server-error" element={<ServerErrorPage />} />
      {/*   homepage route */}
      <Route element={<Layout />}>
        {/* pages*/}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourprograms" element={<OurProgramsPage />} />
        <Route path="/managementteams" element={<ManagementTeamsPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/schoolnews" element={<ListAllContentNews />} />
        <Route path="/schoolevents" element={<ListAllContentEvents />} />

        <Route path="*" element={<NotFound />} />
        {/* contents */}
        <Route path="/event/:id" element={<SingleContent />} />
        <Route path="/new/:id" element={<SingleContent />} />
        <Route path="/content/:id" element={<SingleContent />} />
        <Route path="*" element={<NotFound />} />
        {/* Teams*/}
        <Route path="/teams/:id" element={<SingleMember />} />
      </Route>

      <Route path="*" element={<NotFound />} />

      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default observer(App);
