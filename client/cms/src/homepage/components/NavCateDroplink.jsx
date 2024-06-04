import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavCate = () => {
  const [categories, setCategories] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      const url = `http://localhost:8080/api/categories`;
      const res = await fetch(url);
      const data = await res.json();
      setCategories(data.object);
    }

    fetchCategories();
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-white font-bold focus:outline-none">
        Categories
      </button>
      <ul
        className={`absolute bg-white text-black shadow-md mt-2 py-2 px-4 rounded-md ${
          isHovered ? "block" : "hidden"
        }`}
      >
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link
              to={`/category/${cat.id}`}
              className={`block text-gray-800 border border-b-amber-400 p-3 ${
                selectedCategoryId === cat.id
                  ? "bg-slate-500 text-blue-500 cursor-pointer"
                  : "hover:bg-slate-500 hover:text-blue-500 cursor-pointer"
              }`}
              onClick={() => handleCategorySelect(cat.id)}
            >
              {cat.nameEn}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavCate;
