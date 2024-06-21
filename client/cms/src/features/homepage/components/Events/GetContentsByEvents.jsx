import { useEffect, useState } from "react";
import { fetchContentsByArtName } from "../../api/Api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContentCardE from "./ContentCardEventHome";

const GetContentsByEvents = () => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const articleName = "School Events";

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await fetchContentsByArtName(articleName);

        if (response && Array.isArray(response.object)) {
          setContents(response.object);
        } else {
          console.error("No articles found for the specified category");
          setContents([]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error.message);
        setLoading(false);
      }
    };

    fetchContents();
  }, [articleName]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto px-4 place-content-center">
      {loading ? (
        <p className="text-center text-gray-600 mt-8">Loading ...</p>
      ) : contents.length > 0 ? (
        <Slider {...settings} className="mt-8">
          {contents.map((content) => (
            <div key={content.id} className="px-2">
              <ContentCardE content={content} />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-600 mt-8">No articles found.</p>
      )}
    </div>
  );
};

export default GetContentsByEvents;
