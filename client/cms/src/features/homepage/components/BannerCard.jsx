import { useState, useEffect } from "react";
import { fetchData } from "../api/Api"; // Assuming fetchData is a function to fetch data
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Spinner from "./Spinner";

const BannerCard = () => {
  const [slides, setSlides] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const data = await fetchData("slides");
        if (data && data.object && Array.isArray(data.object)) {
          setSlides(data.object);
        } else {
          setError("No banners found in the response");
        }
      } catch (error) {
        setError("Error fetching banners.");
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  if (loading) {
    return (
      <div className="h-24">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center h-12 mt-2 text-red-600 font-mono font-bold">
        {error}
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={true}
        dynamicHeight={true}
      >
        {slides.map((slide) => (
          <div key={slide.id}>
            <img
              src={slide.imageUrl}
              alt={slide.name}
              className="w-full h-[200px] md:h-[300px] lg:h-[500px] "
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCard;
