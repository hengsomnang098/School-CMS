// src/components/Navbar/Navbar.js

import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch";

const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();
  const categories = useFetch("categories");
  const articles = useFetch("articles");

  const menuItems = [
    { key: "", label: "Home", path: "/" },
    { key: "about", label: "About", path: "/about" },
    { key: "ourprograms", label: "Our Program", path: "/" },
    { key: "admission", label: "Admission", path: "/admission" },
    { key: "articlepage", label: "ArticlePage", path: "/articlepage" },
    {
      key: "categorieslist",
      label: "Categories",
      children: categories.map((category) => ({
        key: String(`/category/${category.id}`).trim(),
        label: category.nameEn,
        path: `/categorieslist/${category.id}`,
      })),
    },
    {
      key: "articleslist",
      label: "Articles",
      children: articles.map((article) => ({
        key: String(`/article/${article.id}`).trim(),
        label: article.name,
        path: `/articleslist/${article.id}`,
      })),
    },
  ];

  const onClick = (e) => {
    navigate(e.key);
  };

  return (
    <Header>
      <div className="logo" />
      <Menu
        onClick={onClick}
        mode="horizontal"
        theme="dark"
        items={menuItems}
      />
    </Header>
  );
};

export default Navbar;
