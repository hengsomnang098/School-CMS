import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Navbar = () => {
  const navigate = useNavigate();
  const categories = useFetch("categories");
  const articles = useFetch("articles");

  const menuItems = [
    { key: "/", label: "Home" },
    { key: "/about", label: "About" },
    { key: "/ourprograms", label: "Our Programs" },
    { key: "/admission", label: "Admission" },
    { key: "/articlepage", label: "ArticlePage" },
    {
      key: "categories",
      label: "Categories",
      children: categories.map((category) => ({
        key: `/category/${category.id}`,
        label: category.nameEn,
      })),
    },
    {
      key: "articles",
      label: "Articles",
      children: articles.map((article) => ({
        key: `/article/${article.id}`,
        label: article.name,
      })),
    },
  ];

  const handleClick = (key) => {
    navigate(key);
  };

  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMouseEnter = (key) => {
    setHoveredMenu(key);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <header className="bg-green-300 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Logo</div>
          {/* Navigation menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {menuItems.map((item) => (
                <li
                  key={item.key}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`py-2 px-4 rounded-md transition-colors duration-300 hover:bg-green-500 hover:text-white ${
                      hoveredMenu === item.key && item.children
                        ? "bg-green-500 text-white"
                        : ""
                    }`}
                    onClick={() => handleClick(item.key)}
                  >
                    {item.label}
                  </button>
                  {item.children && (
                    <ul
                      className={`absolute left-0 mt-2 w-48 bg-green-300 text-gray-800 rounded-md shadow-lg opacity-0 ${
                        hoveredMenu === item.key ? "opacity-100" : "opacity-0"
                      } transition-opacity duration-300`}
                    >
                      {item.children.map((subItem) => (
                        <li key={subItem.key}>
                          <Link
                            to={subItem.key}
                            className="block w-full text-left px-4 py-2 hover:bg-green-400 hover:text-white"
                            onClick={() => {
                              handleClick(subItem.key);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
