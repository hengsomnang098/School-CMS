import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import logoLarge from "../assets/SISlogo.png";
import logoSmall from "../assets/SISlogo2.png";
import MobileMenu from "../components/Navbar/MobileMenu";
import useContentFetcher from "../hooks/useContentFetcher";

const Navbar = () => {
  const navigate = useNavigate();
  const ourProgramsContents = useContentFetcher("Our Programs");
  const admissionContents = useContentFetcher("Admissions");
  const activitiesContents = useContentFetcher("Activities");
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("bg-transparent");
  const [navbarShadow, setNavbarShadow] = useState(false);

  const reduceContent = (contents) => {
    const columns = [[], [], []];
    contents.forEach((content, index) => {
      if (index < 6) {
        columns[0].push({
          key: `/content/${content.id}`,
          label: content.title,
        });
      } else if (index < 12) {
        columns[1].push({
          key: `/content/${content.id}`,
          label: content.title,
        });
      } else if (index < 18) {
        columns[2].push({
          key: `/content/${content.id}`,
          label: content.title,
        });
      }
    });
    return columns;
  };

  const flattenContent = (contents) => {
    return contents.reduce((acc, column) => acc.concat(column), []);
  };

  const menuItems = [
    { key: "/about", label: "About" },
    {
      key: "/ourprograms",
      label: "Our Programs",
      children: reduceContent(ourProgramsContents),
      mobileChildren: flattenContent(reduceContent(ourProgramsContents)),
    },
    {
      key: "/admission",
      label: "Admissions",
      children: reduceContent(admissionContents),
      mobileChildren: flattenContent(reduceContent(admissionContents)),
    },
    {
      key: "/activities",
      label: "Activities",
      children: reduceContent(activitiesContents),
      mobileChildren: flattenContent(reduceContent(activitiesContents)),
    },
    { key: "/contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setNavbarBackground("bg-green-100");
        setNavbarShadow(true);
      } else {
        setNavbarBackground("bg-green-100");
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
    <>
      <header
        className={`shadow-md drop-shadow-lg h-[90px] ${navbarBackground} fixed top-0 w-full z-50 transition-all duration-500 ${
          navbarShadow ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6 h-full">
          <Link to="/" className="flex items-center">
            <img
              src={logoLarge}
              alt="Southwest International School"
              className="hidden lg:block h-12"
            />
            <img
              src={logoSmall}
              alt="Southwest International School"
              className="block lg:hidden h-16"
            />
          </Link>
          <nav className="flex items-center">
            <ul className="hidden md:flex text-md font-khmermont font-bold drop-shadow-lg space-x-6">
              {menuItems.map((item) => (
                <li
                  key={item.key}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="py-2 text-lg px-4 tracking-wider rounded-md transition-colors duration-300 relative overflow-hidden group-hover:text-green-500"
                    onClick={() => handleClick(item.key)}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </button>
                  {item.children && hoveredMenu === item.key && (
                    <ul
                      className={`absolute left-0 top-full max-h-64 bg-white text-gray-800 rounded-md shadow-lg opacity-100 transition-opacity duration-300 z-10 grid gap-x-4`}
                      style={{
                        gridTemplateColumns: `repeat(${
                          item.children.filter((col) => col.length > 0).length
                        }, auto)`,
                      }}
                    >
                      {item.children.map(
                        (subItems, index) =>
                          subItems.length > 0 && (
                            <li
                              key={index}
                              className={`${
                                index < item.children.length - 1
                                  ? "border-r border-gray-300"
                                  : ""
                              }`}
                            >
                              {subItems.map((subItem) => (
                                <button
                                  key={subItem.key}
                                  className={`block w-full text-left px-4 py-2 hover:bg-green-400 hover:text-white`}
                                  onClick={() => handleClick(subItem.key)}
                                >
                                  {subItem.label}
                                </button>
                              ))}
                            </li>
                          )
                      )}
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
      </header>
      {menuOpen && (
        <MobileMenu
          menuItems={menuItems.map((item) => ({
            ...item,
            children: item.mobileChildren,
          }))}
          onClose={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
