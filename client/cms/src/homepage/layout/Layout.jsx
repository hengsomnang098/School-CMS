import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Banner from "./Banner";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
