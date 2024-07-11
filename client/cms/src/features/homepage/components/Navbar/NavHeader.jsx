// NavHeader.js
import React from "react";
import { Link } from "react-router-dom";
import logoLarge from "../../assets/SISlogo.png";
import logoSmall from "../../assets/SISlogo2.png";

const NavHeader = () => {
  return (
    <div className="flex items-center ">
      <Link to="/" className="flex items-center">
        <img
          src={logoLarge}
          alt="Southwest International School"
          className="hidden lg:block h-12"
        />
        <img
          src={logoSmall}
          alt="Southwest International School"
          className="block md:block md:h12 lg:hidden  h-16"
        />
      </Link>
      <p className="block lg:hidden md:hidden text-2xl ml-8 text-green-700 text-center font-bold font-serif">
        SIS
      </p>
    </div>
  );
};

export default NavHeader;
