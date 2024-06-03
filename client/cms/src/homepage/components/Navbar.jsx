import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const menuItems = [
  { key: "1", label: "Home", path: "/" },
  { key: "2", label: "About", path: "/about" },
  { key: "3", label: "Our Program", path: "/ourprograms" },
  { key: "4", label: "Contact", path: "/contact" },
  { key: "5", label: "Categories", path: "/categorieslist" },
];

const Navbar = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        {menuItems.map((item) => (
          <Menu.Item key={item.key}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default Navbar;
