// Footer.jsx
import React from "react";
import FooterLink from "../components/Footer/FooterLink";
import FooterContact from "../components/Footer/FooterContact";
import FooterInformation from "../components/Footer/FooterInformation";

const Footer = () => {
  const resourceLinks = [
    { href: "/", text: "Home" },
    { href: "/schoolevents", text: "Events" },
    { href: "/schoolnews", text: "News" },
    { href: "/about", text: "About Us" },
    { href: "/contact", text: "Contact Us" },
  ];

  return (
    // <div className="text-white py-5 bg-[#0C3B2E]  bottom-0 w-full">
    <div className="text-white py-5 bg-gradient-to-br from-cyan-800 to-yellow-500 via-green-400 via-70% bottom-0 w-full">
      <div className="px-4 pt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="grid mb-8 lg:grid-cols-4 gap-5">
          <div className="grid grid-cols-2 gap-5 lg:col-span-2 md:grid-cols-2">
            <FooterInformation title="SIS Info" />
            <FooterLink title="Resource Link" links={resourceLinks} />
          </div>
          <FooterContact />
        </div>
      </div>
    </div>
  );
};

export default Footer;
