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
  const [navbarOpacity, setNavbarOpacity] = useState(1);
  const [navbarShadow, setNavbarShadow] = useState(false);
  const [mouseOverNavbar, setMouseOverNavbar] = useState(false);

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
      const scrolled = window.scrollY;
      const navbarHeight = 90;
      const scrollThreshold = navbarHeight * 2;

      if (scrolled < scrollThreshold) {
        const opacity = 1 - scrolled / scrollThreshold;
        setNavbarOpacity(opacity);
      } else {
        setNavbarOpacity(0.5);
      }

      setNavbarShadow(scrolled > 0);
    };

    const handleMouseEnterNavbar = () => {
      setMouseOverNavbar(true);
    };

    const handleMouseLeaveNavbar = () => {
      setMouseOverNavbar(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mouseenter", handleMouseEnterNavbar);
    window.addEventListener("mouseleave", handleMouseLeaveNavbar);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseenter", handleMouseEnterNavbar);
      window.removeEventListener("mouseleave", handleMouseLeaveNavbar);
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
        className={`shadow-md shadow-gray-400 h-[90px] bg-green-50 bg-opacity-100 fixed top-0 w-full z-50 transition-all duration-300 ${
          navbarShadow ? "shadow-lg" : "shadow-md"
        } ${
          mouseOverNavbar
            ? "opacity-100 shadow-lg shadow-green-300"
            : "opacity-90"
        }`}
        onMouseEnter={() => setMouseOverNavbar(true)}
        onMouseLeave={() => setMouseOverNavbar(false)}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6 h-full">
          <NavHeader />
          <nav className="flex items-center">
            <ul className="hidden md:flex text-md font-bold drop-shadow-lg space-x-6">
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
