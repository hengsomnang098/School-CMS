import React from "react";
import { useInView } from "react-intersection-observer";
import SocialMediaLinks from "./SocialMediaLinks";

const ContactInformation = ({ truncatedDescription }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`p-6 bg-green-400 text-white transition-transform duration-2000 ${
        inView ? "slice-in-right" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl text-center font-semibold mb-6">
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
