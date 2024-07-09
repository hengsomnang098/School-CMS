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
      const columnIndex = Math.floor(index / 6);
      columns[columnIndex].push({
        key: `/content/${content.id}`,
        label: content.title,
      });
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
    if (
      hoveredMenu === key &&
      menuItems.find((item) => item.key === key)?.children
    ) {
      // If hovered and has dropdown, do nothing (cannot click)
      return;
    }
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
        className={`shadow-md  h-[90px] ${navbarBackground} fixed top-0 w-full z-50 transition-all duration-500 ${
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
          <p className="block lg:hidden text-2xl ml-8 text-green-700 text-center font-bold font-serif">
            SIS
          </p>
          <nav className="flex items-center ">
            <ul className="hidden md:flex text-md font-khmermont font-bold drop-shadow-lg space-x-6">
              {menuItems.map((item) => (
                <li
                  key={item.key}
                  className="relative group "
                  onMouseEnter={() => handleMouseEnter(item.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`py-2 text-lg px-4 tracking-widest transition-colors duration-300 relative overflow-hidden group-hover:text-green-500 ${
                      item.children ? "cursor-default" : "cursor-pointer"
                    }`}
                    onClick={() => handleClick(item.key)}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-115"></span>
                  </button>
                  {item.children && hoveredMenu === item.key && (
                    <ul
                      className="absolute left-0 top-full max-h-64 bg-green-50 text-gray-800 shadow-lg opacity-100 transition-opacity duration-300 z-10 grid gap-x-4 w-72"
                      style={{
                        gridTemplateColumns: `repeat(${
                          item.children.filter((col) => col.length > 0).length
                        }, auto)`,
                      }}
                    >
                      {item.children.map((subItems, index) => (
                        <li
                          key={`${item.key}-${index}`}
                          className={`${
                            index < item.children.length - 1
                              ? "border-r border-gray-300"
                              : ""
                          }`}
                        >
                          {subItems.map((subItem) => (
                            <div
                              className="hover:bg-green-400"
                              key={subItem.key}
                            >
                              <button
                                className="block w-full text-left pl-6 pr-8 py-2 hover:translate-x-2  hover:text-white"
                                onClick={() => handleClick(subItem.key)}
                              >
                                <p className="font-khmermont tracking-wider text-md">
                                  {subItem.label}
                                </p>
                              </button>
                            </div>
                          ))}
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
