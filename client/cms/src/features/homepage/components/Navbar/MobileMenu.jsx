import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ menuItems, onClose }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleToggle = (key) => {
    const menuItem = menuItems.find((item) => item.key === key);
    if (menuItem?.children) {
      setExpandedItem((prev) => (prev === key ? null : key));
    } else {
      onClose();
      if (!menuItem.children && menuItem.key) {
        window.location.href = menuItem.key;
      }
    }
  };

  return (
    <div className="md:hidden bg-white shadow-lg fixed top-[90px] left-0 w-full z-10">
      <nav className="px-2 pt-2 pb-4 space-y-1">
        {menuItems.map((item) => (
          <div key={item.key}>
            <button
              onClick={() => handleToggle(item.key)}
              className="block text-green-600 hover:text-green-800 px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              {item.label}
            </button>
            {item.children && expandedItem === item.key && (
              <div className="ml-4">
                {item.children.flat().map((subItem) => (
                  <Link
                    key={subItem.key}
                    to={subItem.key}
                    className="block text-green-600 hover:text-green-800 px-3 py-2 rounded-md text-base font-medium"
                    onClick={onClose}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
