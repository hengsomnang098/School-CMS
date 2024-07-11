import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MobileMenu from "../components/Navbar/MobileMenu";
import useContentFetcher from "../hooks/useContentFetcher";
import MenuItem from "../components/Navbar/MenuItem";
import MobileMenuToggle from "../components/Navbar/MobileMenuToggle";
import NavHeader from "../components/Navbar/NavHeader";

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

  return (
    <>
      <header
        className={`shadow-md h-[90px] ${navbarBackground} fixed top-0 w-full z-50 transition-all duration-500 ${
          navbarShadow ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6 h-full">
          <NavHeader />
          <nav className="flex items-center">
            <ul className="hidden md:flex text-md font-khmermont font-bold drop-shadow-lg  space-x-6">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.key}
                  item={item}
                  hoveredMenu={hoveredMenu}
                  handleClick={handleClick}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />
              ))}
            </ul>
          </nav>
          <MobileMenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
