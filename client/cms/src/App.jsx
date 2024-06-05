import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./admin-dashboard/page/HomePage";
import AboutPage from "./admin-dashboard/page/AboutPage";
import ContactPage from "./admin-dashboard/page/ContactPage";
import NotFoundPage from "./admin-dashboard/page/NotFoundPage";
import MainLayout from "./admin-dashboard/components/layout/MainLayout";
import CategoryPage from "./admin-dashboard/page/CategoryPage";
import LoginPage from "./admin-dashboard/page/LoginPage";
import Home from "./homepage/pages/Home";
import About from "./homepage/pages/About";
import Contact from "./homepage/pages/Contact";
import OurPrograms from "./homepage/pages/OurPrograms";
import Layout from "./homepage/Layout";
import CategoryList from "./homepage/components/CategoryList";
import ArticlePage from "./admin-dashboard/page/ArticlePage";
import ContentPage from "./admin-dashboard/page/ContentPage";
import ListByCategory from "./homepage/components/ListByCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* dashboard route */}
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<HomePage />} />
            <Route path="/dashboard/about" element={<AboutPage />} />
            <Route path="/dashboard/contact" element={<ContactPage />} />
            <Route path="/dashboard/category" element={<CategoryPage />} />
            <Route path="/dashboard/article" element={<ArticlePage />} />
            <Route path="/dashboard/content" element={<ContentPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          {/*   homepage route */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ourprograms" element={<OurPrograms />} />
            <Route path="/category/" element={<CategoryList />} />
            <Route path="/category/:id" element={<ListByCategory />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
