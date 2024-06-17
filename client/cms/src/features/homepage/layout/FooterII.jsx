import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-white py-10"
      style={{
        backgroundImage: "linear-gradient(45deg, #2ECC71, #34495E, #2ECC71)",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4">
        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Docs
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Links
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Ebook
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Webinars
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Help
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Sales
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Advertise
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Help
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
          <p className="mb-4">
            Subscribe to our newsletter to get our update news.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-2 rounded-l-sm outline-none"
            />
            <button type="submit" className="bg-green-600 p-2 rounded-r-sm">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-sm">
            &copy; 2024 Your Company. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaGoogle />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
