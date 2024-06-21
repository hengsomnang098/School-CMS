import { useState, useEffect } from "react";
import { fetchData } from "../api/Api"; // Assuming fetchData is a function to fetch data
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
          setError("No slides found in the response");
        }
      } catch (error) {
        setError("Error fetching slides: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="relative">
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
              className="w-full h-500px object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCard;
