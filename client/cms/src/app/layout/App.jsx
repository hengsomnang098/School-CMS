import { BrowserRouter, Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";

// dashboard import-------------
import UserPage from "../../features/admin-dashboard/page/UserPage";
import ArticlesPage from "../../features/admin-dashboard/page/article/ArticlePage";
import ContentPage from "../../features/admin-dashboard/page/contents/ContentPage";
import HomePage from "../../features/admin-dashboard/page/HomePage";
import NotFoundPage from "../../features/admin-dashboard/page/NotFoundPage";
import MainLayout from "../../features/admin-dashboard/components/layout/MainLayout";
import LoginPage from "../../features/admin-dashboard/page/LoginPage";
import SlidePage from "../../features/admin-dashboard/page/slide/SlidePage";
import StudentPage from "../../features/admin-dashboard/page/student/StudentPage";
import StaffPage from "../../features/admin-dashboard/page/managementTeam/StaffPage";
import CategoryPage from "../../features/admin-dashboard/page/category/CategoryPage";
import RolePage from "../../features/admin-dashboard/page/role/RolePage";
import ImagePage from "../../features/admin-dashboard/page/album/ImagePage";
import RequireAuth from "../../features/admin-dashboard/components/page/RequireAuth";

// homepage import --------------
import Home from "../../features/homepage/pages/Home";
import About from "../../features/homepage/pages/About";
import Contact from "../../features/homepage/pages/Contact";
import OurPrograms from "../../features/homepage/pages/OurProgramsPage";
import Layout from "../../features/homepage/layout/Layout";
import CategoryList from "../../features/homepage/components/Categories/CategoryList";
import ListByCategory from "../../features/homepage/components/Categories/ListByCategory";
import ListByArticle from "../../features/homepage/components/Articles/ListByArticle";
import Admission from "../../features/homepage/pages/Admission";
import AllArtByCat from "../../features/homepage/components/Categories/AllArtByCat";
import ArticleList from "../../features/homepage/components/Articles/ArticleList";
import NewsPage from "../../features/homepage/pages/NewsPage";
import ManagementTeamsPage from "../../features/homepage/pages/ManagementTeamsPage";
import EventsPage from "../../features/homepage/pages/EventsPages";
import SingleMember from "../../features/homepage/components/ManagementTeams/SingleMember";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/teams/:id",
  //     element: <SingleMember />,
  // loader: async ({ params }) => {
  //   const data = await fetchData(params.id);
  //   return data;
  // },
  //   },
  // ]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* dashboard route */}
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<HomePage />} />
            <Route path="/dashboard/category" element={<CategoryPage />} />
            <Route path="/dashboard/article" element={<ArticlesPage />} />
            <Route path="/dashboard/content" element={<ContentPage />} />
            <Route path="/dashboard/manage-banners" element={<SlidePage />} />
            <Route path="/dashboard/student" element={<StudentPage />} />
            <Route
              path="/dashboard/content/medias/:id"
              element={<ImagePage />}
            />

            {/* Protected Route  */}
            <Route element={<RequireAuth />}>
              <Route path="/dashboard/staff" element={<StaffPage />} />
              <Route path="/dashboard/users" element={<UserPage />} />
              <Route path="/dashboard/roles" element={<RolePage />} />
            </Route>

            {/* Protected Route  */}

            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/*   homepage route */}
          <Route element={<Layout />}>
            {/* pages*/}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ourprograms" element={<OurPrograms />} />
            <Route path="/managementteams" element={<ManagementTeamsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/event/:id" element={<EventsPage />} />
            {/* <Route path="/events" element={<EventsPage />} /> */}
            <Route path="/admission" element={<Admission />} />
            {/* categories*/}
            <Route path="/category" element={<CategoryList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/category/:id" element={<ListByCategory />} />
            <Route path="/category/:id/articles" component={<AllArtByCat />} />
            {/* articles*/}
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/article/:id" element={<ListByArticle />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* Teams*/}
            <Route path="/teams/:id" element={<SingleMember />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>{" "}
      </BrowserRouter>{" "}
    </>
  );
}

export default observer(App);
