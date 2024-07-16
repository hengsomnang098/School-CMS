import React from "react";
import { useInView } from "react-intersection-observer";
import OurPartnerImage from "../images/OurPartner.png";

const OurPartner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div
        className={`w-[100%] flex justify-center overflow-hidden transform transition-transform duration-1000 ${
          inView ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <img
          className="w-full h-[130px] "
          src={OurPartnerImage}
          alt="Our Partner"
        />
      </div>
    </div>
  );
};

export default OurPartner;
