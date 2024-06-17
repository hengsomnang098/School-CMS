// MenuItems.js

import React from "react";
import { Link } from "react-router-dom";

const MenuItems = ({
  menuItems,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
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
          {item.children && (
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
  );
};

export default MenuItems;
