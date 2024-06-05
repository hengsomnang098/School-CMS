import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { request } from "../../config/request";

const { Header } = Layout;

const Navbar = () => {
  const [current, setCurrent] = useState("home");
  const [children, setChildren] = useState([]);
  const menuItems = [
    { key: "home", label: "Home", path: "/" },
    { key: "about", label: "About", path: "/about" },
    { key: "ourprograms", label: "Our Program", path: "/" },
    { key: "contact", label: "Contact", path: "/contact" },
    {
      key: "categorieslist",
      label: "Categories",
      path: "/categorieslist",
      children: children,
    },
  ];
  const navigate = useNavigate();

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await request("categories", "get");
    if (res) {
      const child = res.map(function (category) {
        return {
          key: String(`/category/${category.id}`).trim(),
          label: category.nameEn,
          path: "/categorieslist/" + category.id,
        };
      });
      setChildren(child);
    }
  };

  const onClick = (e) => {
    navigate(e.key);
    setCurrent(e.key);
  };
  return (
    <Header>
      <div className="logo" />
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
        items={menuItems}
      />
    </Header>
  );
};

export default Navbar;
