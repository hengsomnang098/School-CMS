// FooterSection.jsx
import React from "react";
import { FaLink } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const FooterSection = ({ title, links }) => (
  <div className="border-r border-gray-500 text-white">
    <p className="font-bold text-2xl flex mb-5 tracking-wide">
      <FaExternalLinkAlt className="w-5 h-8 mr-2" />
      {title}
    </p>
    <ul className="mt-2 space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-xl flex transition-colors duration-300 hover:text-yellow-200 hover:underline"
          >
            <FaLink className="mr-2  h-7 w-4" />
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterSection;
