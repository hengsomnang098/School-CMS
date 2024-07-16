import React from "react";

const MenuItem = ({
  item,
  hoveredMenu,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <li
      key={item.key}
      className="relative group"
      onMouseEnter={() => handleMouseEnter(item.key)}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`py-2 text-lg px-4 tracking-widest relative overflow-hidden ${
          item.children ? "cursor-default" : "cursor-pointer"
        }`}
        onClick={() => handleClick(item.key)}
      >
        {item.label}
        <span
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}
        ></span>
      </button>

      {item.children && hoveredMenu === item.key && (
        <ul
          className="absolute left-0 top-full max-h-64 bg-green-50 text-gray-800 shadow-md shadow-green-400 opacity-100 transition-opacity duration-300 z-10 grid gap-x-4 w-72 animate-slideDown overflow-hidden"
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
                <div className="hover:bg-green-400" key={subItem.key}>
                  <button
                    className="block w-full text-left pl-6 pr-8 py-2 hover:translate-x-2 hover:text-white"
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
  );
};

export default MenuItem;
