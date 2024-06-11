import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import logoLarge from "../../assets/SISlogo.png"; // Large screen logo
import logoSmall from "../../assets/SISlogo2.png"; // Small screen logo

const Navbar = () => {
  const navigate = useNavigate();
  const categories = useFetch("categories");
  const articles = useFetch("articles");
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("bg-transparent");
  const [navbarShadow, setNavbarShadow] = useState(false); // State to toggle shadow visibility

  const menuItems = [
    { key: "/about", label: "About" },
    { key: "/ourprograms", label: "Our Programs" },
    { key: "/admission", label: "Admission" },
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setNavbarBackground("bg-transparent");
        setNavbarShadow(false); // No shadow when at top
      } else {
        setNavbarBackground("bg-white");
        setNavbarShadow(true); // Add shadow when scrolled down
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (key) => {
    navigate(key);
  };

  const handleMouseEnter = (key) => {
    setHoveredMenu(key);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <header
      className={`shadow-md drop-shadow-lg h-[130px] ${navbarBackground} fixed top-0 w-full z-50 transition-all duration-500 ${
        navbarShadow ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 h-full">
        <Link to="/" className="flex items-center">
          <img
            src={logoLarge}
            alt="Southwest International School"
            className="hidden lg:block h-16"
          />
          <img
            src={logoSmall}
            alt="Southwest International School"
            className="block lg:hidden h-16"
          />
        </Link>
        <nav>
          <ul className="hidden md:flex text-md font-serif font-bold  drop-shadow-lg space-x-6">
            {menuItems.map((item) => (
              <li
                key={item.key}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.key)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="py-2 text-md px-4 rounded-md transition-colors duration-300 relative overflow-hidden"
                  onClick={() => handleClick(item.key)}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
                {item.children && hoveredMenu === item.key && (
                  <ul className="absolute left-0 top-full w-full bg-white text-gray-800 rounded-md shadow-lg opacity-100 transition-opacity duration-300 z-10">
                    {item.children.map((subItem) => (
                      <li key={subItem.key}>
                        <button
                          className="block w-full text-left px-4 py-2 hover:bg-green-400 hover:text-white"
                          onClick={() => handleClick(subItem.key)}
                        >
                          {subItem.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            className="text-green-600 focus:outline-none focus:text-green-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-[130px] left-0 w-full z-10">
          <nav className="px-2 pt-2 pb-4 space-y-1">
            {menuItems.map((item) => (
              <div key={item.key}>
                <Link
                  to={item.key}
                  className="block text-green-600 hover:text-green-800 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4">
                    {item.children.map((subItem) => (
                      <Link
                        key={subItem.key}
                        to={subItem.key}
                        className="block text-green-600 hover:text-green-800 px-3 py-2 rounded-md text-base font-medium"
                        onClick={() => setMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
