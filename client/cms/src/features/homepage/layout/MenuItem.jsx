import React from "react";

const MenuItem = ({
  item,
  hoveredMenu,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
}) => {
  return (
    <li
      className="relative group"
      onMouseEnter={() => handleMouseEnter(item.key)}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`py-2 text-lg px-4 tracking-wider transition-colors duration-300 relative overflow-hidden group-hover:text-green-500 ${
          item.key === "/about" || item.key === "/contact"
            ? "cursor-pointer"
            : "cursor-default"
        }`}
        onClick={() => handleClick(item.key)}
      >
        {item.label}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-105"></span>
      </button>
      {item.children && hoveredMenu === item.key && (
        <ul className="absolute left-0 top-full max-h-64 bg-white text-gray-800 shadow-lg opacity-100 transition-opacity duration-300 z-10 grid gap-x-4 w-52">
          {item.children.map((subItem, index) => (
            <li
              key={`${item.key}-${index}`}
              className={`${
                index < item.children.length - 1
                  ? "border-b border-gray-300"
                  : ""
              }`}
            >
              <button
                className="block w-full text-left pl-6 pr-8 py-4 hover:bg-green-400 hover:text-white"
                onClick={() => handleClick(subItem.key)}
              >
                <p className="font-khmermont tracking-wider">{subItem.label}</p>
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
