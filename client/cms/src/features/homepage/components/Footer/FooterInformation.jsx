// FooterSection.jsx
import React from "react";
import { FaLink } from "react-icons/fa";
import LogoSmall from "../../../../assets/SISlogo2.png";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const FooterInformation = ({ title }) => (
  <div className="border-r border-gray-500 text-white">
    <div className="flex flex-row">
      <img src={LogoSmall} alt="" className="w-auto h-10  mr-2 " />
      <p className="font-bold text-2xl mb-5 tracking-wide">{title}</p>
    </div>
    <ul className="mt-2 space-y-2">
      <li className="font-bold font-robot flex text-lg break-words">
        <MdLocationPin className="w-8 h-6 mr-2 hidden md:block" />
        Sihanouk Ville , Sihanouk Province , Songkat 4 , Phum 5
      </li>
      <li className=" font-robot flex text-lg break-words">
        <MdEmail className="w-5 h-6 mr-2 hidden md:block" />
        <p className="hidden md:block"> Email :</p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sce.shv@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-yellow-500 break-words "
        >
          sce.shv@gmail.com
        </a>
      </li>
      <li className=" font-robot flex text-lg break-words">
        <FaPhoneAlt className="w-4 h-6 mr-2 hidden md:block" />
        Phone Number : 016 620 299
      </li>
    </ul>
  </div>
);

export default FooterInformation;
