import React from "react";
import { FaFacebookF, FaInstagram, FaTelegram } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div className="mt-6 flex flex-col">
      <h3 className="text-2xl font-serif flex justify-center underline  font-semibold mb-2">
        Follow Us!
      </h3>
      <div className="flex justify-center mt-2 space-x-4">
        <a
          href="https://web.facebook.com/EducationSHV"
          className="text-white hover:text-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="text-2xl" />
        </a>
        <a
          href="https://t.me/southwest_intl_school"
          className="text-white hover:text-cyan-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram className="text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/southwest_international_school/"
          className="text-white hover:text-pink-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
