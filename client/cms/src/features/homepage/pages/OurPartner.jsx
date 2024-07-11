import React from "react";

import OurPartnerImage from "../images/OurPartner.png";
const OurPartner = () => {
  return (
    <div>
      <div className="  flex flex-col items-center ">
        <img
          className="w-[100%] h-[130px] "
          src={OurPartnerImage}
          alt="Our Partner"
        />
      </div>
    </div>
  );
};

export default OurPartner;
