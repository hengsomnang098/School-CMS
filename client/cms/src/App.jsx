import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./admin-dashboard/page/HomePage";
import AboutPage from "./admin-dashboard/page/AboutPage";
import ContactPage from "./admin-dashboard/page/ContactPage";
import NotFoundPage from "./admin-dashboard/page/NotFoundPage";
import MainLayout from "./admin-dashboard/components/layout/MainLayout";
import CategoryPage from "./admin-dashboard/page/CategoryPage";
import LoginPage from "./admin-dashboard/page/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/category" element={<CategoryPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
