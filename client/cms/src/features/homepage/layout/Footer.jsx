// Footer.jsx
import React from "react";
import FooterSection from "../components/Footer/FooterSection";
import FooterContact from "../components/Footer/FooterContact";

const Footer = () => {
  const SouthWestLink = [
    { href: "/", text: "Home" },
    { href: "/", text: "Admissions" },
    { href: "/", text: "Programs" },
    { href: "/", text: "World" },
  ];

  const resourceLinks = [
    { href: "/", text: "Home" },
    { href: "/", text: "Admission" },
    { href: "/", text: "Programs" },
    { href: "/", text: "World" },
  ];

  return (
    <div className="text-white py-5 bg-[#0C3B2E]">
      <div className="px-4 pt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="grid mb-8 lg:grid-cols-4 gap-5">
          <div className="grid grid-cols-2 gap-5 lg:col-span-2 md:grid-cols-2">
            <FooterSection title="SIS Link" links={SouthWestLink} />
            <FooterSection title="Resource Link" links={resourceLinks} />
          </div>
          <FooterContact />
        </div>
      </div>
    </div>
  );
};

export default Footer;
