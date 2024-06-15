import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { fetchArticlesByCatName } from "../../../api/config/api";
import logoLarge from "../../../../assets/SISlogo.png";
import logoSmall from "../../../../assets/SISlogo2.png";
import MobileMenu from "../components/MobileMenu";
const Navbar = () => {
  const navigate = useNavigate();
  const categories = useFetch("categories");
  const articles = useFetch("articles");
  const [ourProgramsArticles, setOurProgramsArticles] = useState([]);
  const [admissionArticles, setAdmissionArticles] = useState([]);
  const [newsArticles, setNewsArticles] = useState([]);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("bg-transparent");
  const [navbarShadow, setNavbarShadow] = useState(false);

  useEffect(() => {
    const fetchOurProgramsArticles = async () => {
      try {
        const response = await fetchArticlesByCatName("Our Programs");
        setOurProgramsArticles(response.object);
      } catch (error) {
        console.error("Error fetching 'Our Programs' articles:", error.message);
      }
    };
    const fetchAdmissionArticles = async () => {
      try {
        const response = await fetchArticlesByCatName("Admissions");
        setAdmissionArticles(response.object);
      } catch (error) {
        console.error("Error fetching 'Admission' articles:", error.message);
      }
    };
    const fetchNewsArticles = async () => {
      try {
        const response = await fetchArticlesByCatName("News");
        setNewsArticles(response.object);
      } catch (error) {
        console.error("Error fetching 'News' articles:", error.message);
      }
    };
    fetchNewsArticles();
    fetchAdmissionArticles();
    fetchOurProgramsArticles();
  }, []);

  const menuItems = [
    { key: "/about", label: "About" },
    {
      key: "/ourprograms",
      label: "Our Programs",
      children: ourProgramsArticles.map((article) => ({
        key: `/category/${article.id}`,
        label: article.name,
      })),
    },
    {
      key: "/admission",
      label: "Admissions",
      children: admissionArticles.map((article) => ({
        key: `/article/${article.id}`,
        label: article.name,
      })),
    },

    {
      key: "/news",
      label: "News",
      children: newsArticles.map((article) => ({
        key: `/article/${article.id}`,
        label: article.name,
      })),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setNavbarBackground("bg-transparent");
        setNavbarShadow(false);
      } else {
        setNavbarBackground("bg-white");
        setNavbarShadow(true);
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
          <ul className="hidden md:flex text-md font-serif font-bold drop-shadow-lg space-x-6">
            {menuItems.map((item) => (
              <li
                key={item.key}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.key)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="py-2 text-md px-4 rounded-md transition-colors duration-300 relative overflow-hidden group-hover:text-green-500"
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
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          menuItems={menuItems}
        />
      )}
    </header>
  );
};

export default Navbar;
