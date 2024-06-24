import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Banner from "./Banner";
const Layout = () => {
  return (
    <div>
      <div className="mb-[90px] bg-green-50">
        <Navbar />
      </div>
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
