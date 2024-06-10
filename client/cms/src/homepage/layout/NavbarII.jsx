import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const MobileMenuToggle = ({ isOpen, toggleMenu }) => (
  <button className="md:hidden" onClick={toggleMenu}>
    {isOpen ? (
      <svg
        className="h-6 w-6 text-gray-800 hover:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        className="h-6 w-6 text-gray-800 hover:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    )}
  </button>
);

const Navbar = () => {
  const navigate = useNavigate();
  const categories = useFetch("categories");
  const articles = useFetch("articles");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { key: "/", label: "Home" },
    { key: "/about", label: "About" },
    { key: "/ourprograms", label: "Our Programs" },
    { key: "/admission", label: "Admission" },
    { key: "/articlepage", label: "ArticlePage" },
    {
      key: "categorieslist",
      label: "Categories",
      children: categories.map((category) => ({
        key: `/category/${category.id}`,
        label: category.nameEn,
      })),
    },
    {
      key: "articleslist",
      label: "Articles",
      children: articles.map((article) => ({
        key: `/article/${article.id}`,
        label: article.name,
      })),
    },
  ];

  const handleClick = (key) => {
    navigate(key);
    setMobileMenuOpen(false); // Close mobile menu on navigation
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-green-300 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Logo</div>
          {/* Mobile menu toggle */}
          <MobileMenuToggle
            isOpen={isMobileMenuOpen}
            toggleMenu={toggleMobileMenu}
          />
        </div>
        {/* Mobile menu */}
        <nav className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <ul className="mt-4">
            {menuItems.map((item) => (
              <li key={item.key} className="py-2">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-green-400 hover:text-white"
                  onClick={() => handleClick(item.key)}
                >
                  {item.label}
                </button>
                {item.children && (
                  <ul className="pl-4">
                    {item.children.map((subItem) => (
                      <li key={subItem.key}>
                        <Link
                          to={subItem.key}
                          className="block w-full text-left px-4 py-2 hover:bg-green-400 hover:text-white"
                          onClick={() => {
                            handleClick(subItem.key);
                            setMobileMenuOpen(false); // Close mobile menu on link click
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
        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.key} className="relative group">
                <button
                  className="py-2 px-4 rounded-md transition-colors duration-300 hover:bg-green-400 hover:text-white"
                  onClick={() => handleClick(item.key)}
                >
                  {item.label}
                </button>
                {item.children && (
                  <ul
                    className={`absolute left-0 mt-2 w-48 bg-green-300 text-gray-800 rounded-md shadow-lg opacity-0 ${
                      isMobileMenuOpen ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-300`}
                  >
                    {item.children.map((subItem) => (
                      <li key={subItem.key}>
                        <Link
                          to={subItem.key}
                          className="block w-full text-left px-4 py-2 hover:bg-green-400 hover:text-white"
                          onClick={() => {
                            handleClick(subItem.key);
                            setMobileMenuOpen(false); // Close mobile menu on link click
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
    </header>
  );
};

export default Navbar;
