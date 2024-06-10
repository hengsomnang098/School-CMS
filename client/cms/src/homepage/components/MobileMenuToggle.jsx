import React from "react";

const MobileMenuToggle = ({ isOpen, toggleMenu }) => {
  return (
    <button className="md:hidden" onClick={toggleMenu}>
      <svg
        className={`h-6 w-6 text-gray-800 ${isOpen ? "hidden" : ""}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
      <svg
        className={`h-6 w-6 text-gray-800 ${isOpen ? "" : "hidden"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default MobileMenuToggle;
