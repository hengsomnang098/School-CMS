import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* dashboard route */}
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<HomePage />} />
            <Route path="/aboutpage" element={<AboutPage />} />
            <Route path="/contactpage" element={<ContactPage />} />
            <Route path="/categorypage" element={<CategoryPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          {/*   homepage route */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ourprograms" element={<OurPrograms />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
