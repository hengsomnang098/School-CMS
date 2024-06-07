import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Sample images
import img from "../Images/Galleria.jpg";
import img1 from "../Images/Galleria1.jpg";
import img2 from "../Images/Galleria2.jpg";
import img3 from "../Images/Galleria3.jpg";
import img4 from "../Images/Galleria4.jpg";

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
        <img src={img} className="h-[400px] w-auto" alt="First slide" />
      </div>
      <div>
        <img src={img1} className="h-[400px] w-auto" alt="First slide" />
      </div>
      <div>
        <img src={img2} className="h-[400px] w-auto" alt="Second slide" />
      </div>
      <div>
        <img src={img3} className="h-[400px] w-auto" alt="Third slide" />
      </div>
      <div>
        <img src={img4} className="h-[400px] w-auto" alt="Fourth slide" />
      </div>
    </Carousel>
  );
};

export default BannerCard;
