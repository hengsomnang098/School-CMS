// FooterContact.jsx
import React from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";

const FooterContact = () => (
  <div className="md:max-w-md text-2xl text-white lg:col-span-2 lg:mt-0 mt-5 flex flex-col items-center mx-auto">
    <p className="font-medium tracking-wide flex items-center mb-4">
      <FaLocationCrosshairs className="mr-2 h-9 text-red-500" />
      South West International School
    </p>
    <div className="mt-4 w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.3808316854787!2d103.53486499919738!3d10.616392200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3107e1f28dd34fc5%3A0xb03c596df9e1a956!2sSouthwest%20International%20School!5e0!3m2!1skm!2skh!4v1717726521139!5m2!1skm!2skh"
        width="100%"
        height="250"
        allowFullScreen=""
        loading="lazy"
        className="border-0 rounded-lg"
      ></iframe>
    </div>
  </div>
);

export default FooterContact;
