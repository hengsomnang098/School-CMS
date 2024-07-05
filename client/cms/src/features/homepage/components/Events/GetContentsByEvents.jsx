import React, { useEffect, useState, lazy, Suspense } from "react";
import { fetchContentsByArtName } from "../../api/Api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ContentCardE from "./ContentCardEventHome";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";

const GetContentsByEvents = () => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const ContentCardE = lazy(() => import("./ContentCardEventHome"));

  const articleName = "School Events";

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await fetchContentsByArtName(articleName);

        if (response && Array.isArray(response.object)) {
          // Sort the contents by id in descending order and limit to 8
          const sortedContents = response.object
            .sort((a, b) => b.id - a.id)
            .slice(0, 8);
          setContents(sortedContents);
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
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4">
      {loading ? (
        <div className="text-center mt-4">
          <Spinner />
        </div>
      ) : contents.length > 0 ? (
        <div className="mt-8">
          <Suspense fallback={<Spinner />}>
            <Slider {...settings}>
              {contents.map((content) => (
                <div key={content.id} className="px-2">
                  <ContentCardE content={content} />
                </div>
              ))}
            </Slider>
          </Suspense>
        </div>
      ) : (
        <p className="text-center text-red-600 font-bold font-mono mt-8">
          No Events found.
        </p>
      )}
      <div className="flex justify-center mt-14">
        <Link to="/schoolevents">
          <button className="bg-green-400 hover:bg-green-600 text-white py-2 px-4 rounded">
            See All Events
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetContentsByEvents;
