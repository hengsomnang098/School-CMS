import React from "react";

import SocialMediaLinks from "./SocialMediaLinks";
const ContactInformation = ({ truncatedDescription }) => {
  return (
    <div className="p-6 bg-green-400 text-white">
      <h2 className="text-3xl text-center  font-semibold mb-6">
        Contact Information
      </h2>
      <p className="mb-4 break-words">
        <span dangerouslySetInnerHTML={{ __html: truncatedDescription }} />
      </p>
      <SocialMediaLinks />
    </div>
  );
};

export default ContactInformation;
