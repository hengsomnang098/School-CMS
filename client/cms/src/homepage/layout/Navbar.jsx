import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { request } from "../../config/request";

const { Header } = Layout;

const Navbar = () => {
  const [current, setCurrent] = useState("home");
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const menuItems = [
    { key: "", label: "Home", path: "/" },
    { key: "about", label: "About", path: "/about" },
    { key: "ourprograms", label: "Our Program", path: "/" },
    { key: "contact", label: "Contact", path: "/contact" },
    { key: "articlepage", label: "ArticlePage", path: "/articlepage" },
    {
      key: "categorieslist",
      label: "Categories",
      path: "/category",
      children: categories,
    },
    {
      key: "articleslist",
      label: "Articles",
      path: "/article",
      children: articles,
    },
  ];
  const navigate = useNavigate();

  useEffect(() => {
    getListCategory();
    getListArticles();
  }, []);

  const getListArticles = async () => {
    const res = await request("articles", "get");
    if (res) {
      const data = res.map(function (article) {
        return {
          key: String(`/article/${article.id}`).trim(),
          label: article.name,
          path: "/articleslist/" + article.id,
        };
      });
      setArticles(data);
    }
  };
  const getListCategory = async () => {
    const res = await request("categories", "get");
    if (res) {
      const data = res.map(function (category) {
        return {
          key: String(`/category/${category.id}`).trim(),
          label: category.nameEn,
          path: "/categorieslist/" + category.id,
        };
      });
      setCategories(data);
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
