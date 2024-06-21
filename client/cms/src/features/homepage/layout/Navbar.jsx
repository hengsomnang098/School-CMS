import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import logoLarge from "../assets/SISlogo.png";
import logoSmall from "../assets/SISlogo2.png";
import MobileMenu from "../components/Navbar/MobileMenu";
import { FaSearch, FaTimes } from "react-icons/fa";
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { key: "/about", label: "About" },
    {
      key: "/ourprograms",
      label: "Our Programs",
      children: ourProgramsContents.map((content) => ({
        key: `/content/${content.id}`,
        label: content.title,
      })),
    },
    {
      key: "/admission",
      label: "Admissions",
      children: admissionContents.map((content) => ({
        key: `/content/${content.id}`,
        label: content.title,
      })),
    },
    {
      key: "/activities",
      label: "Activites",
      children: activitiesContents.map((content) => ({
        key: `/content/${content.id}`,
        label: content.title,
      })),
    },
    { key: "/contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setNavbarBackground("bg-white");
        setNavbarShadow(true);
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

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setSearchOpen(false);
  };

  const handleCloseSearch = () => {
    setSearchOpen(false);
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
            <ul className="hidden md:flex text-md font-serif font-bold drop-shadow-lg space-x-6">
              {menuItems.map((item) => (
                <li
                  key={item.key}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="py-2 text-lg px-4 font-mono tracking-wider rounded-md transition-colors duration-300 relative overflow-hidden group-hover:text-green-500"
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
            <div className="ml-4">
              <button
                className="text-green-600 focus:outline-none focus:text-green-800"
                onClick={handleSearchClick}
              >
                <FaSearch className="text-2xl" />
              </button>
            </div>
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
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          menuItems={menuItems}
        />
      )}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md mx-auto">
            <form onSubmit={handleSearchSubmit} className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-gray-700">Search</label>
                <button
                  type="button"
                  onClick={handleCloseSearch}
                  className="text-gray-500 focus:outline-none"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-200"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
