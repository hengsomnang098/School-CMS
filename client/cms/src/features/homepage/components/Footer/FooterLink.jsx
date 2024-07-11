import React from "react";
import { FaLink } from "react-icons/fa";

const FooterLink = ({ href, text }) => (
  <li>
    <a
      href={href}
      className="text-xl flex transition-colors duration-300 hover:text-yellow-300"
    >
      <FaLink className="mr-2 h-7" />
      {text}
    </a>
  </li>
);

export default FooterLink;
