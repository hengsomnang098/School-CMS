import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../images/Gallaria1.png";
import img2 from "../images/Galleria2.png";
import img3 from "../images/Galleria3.png";

const BannerCard = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      autoPlay={true}
      interval={2000}
    >
      <div>
        <img src={img1} className="h-[500px] w-auto" alt="First slide" />
      </div>
      <div>
        <img src={img2} className="h-[500px] w-auto" alt="Second slide" />
      </div>
      <div>
        <img src={img3} className="h-[400px] w-auto" alt="Third slide" />
      </div>
    </Carousel>
  );
};

export default BannerCard;
