import React, { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiLink } from "react-icons/ci";
import { fetchData } from "../../api/Api";
import Spinner from "../Spinner";

const SchoolEventPopup = ({ content, onClose, eventId }) => {
  const [eventContent, setEventContent] = useState(content);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [timer, setTimer] = useState(10);
  const [isMediumScreen, setIsMediumScreen] = useState(
    window.innerWidth >= 768
  );

  useEffect(() => {
    if (!content && eventId) {
      setLoading(true);
      fetchData(`contents/${eventId}`)
        .then((data) => {
          setEventContent(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [content, eventId]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    const autoClose = setTimeout(() => {
      onClose();
    }, 10000);

    return () => {
      clearInterval(countdown);
      clearTimeout(autoClose);
    };
  }, [onClose]);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70 z-50">
        <div className="bg-green-200 shadow-md relative p-6">
          <Spinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70 z-50">
        <div className="bg-green-200 shadow-md relative p-6">
          <p className="text-center text-xl text-red-600">Error: {error}</p>
        </div>
      </div>
    );
  }

  const title = eventContent?.title || "";
  const thumbnail = eventContent?.thumbnail || "";
  const maxLengthTitle = isMediumScreen ? 80 : 130;

  const truncatedTitle =
    title.length > maxLengthTitle
      ? title.substring(0, maxLengthTitle) + "..."
      : title;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70 z-50">
      <div className="bg-transparent relative w-full max-w-lg mx-4 md:mx-0 p-4 md:p-6">
        <button
          className="absolute top-6 right-6 m-1 p-1 text-xl text-red-600 hover:text-red-800"
          onClick={onClose}
        >
          <FaWindowClose />
        </button>
        <div>
          <p className="text-center bg-green-500 font-bold text-2xl pt-1 items-center h-[36px] break-words">
            UPCOMING EVENT
          </p>
          <Link to={`/event/${eventContent.id}`}>
            <div className="relative flex flex-col h-[400px] md:h-[450px] hover:opacity-80">
              <div className="h-[400px] md:h-[4500px] w-full object-cover">
                <img
                  className="h-full w-full object-cover"
                  src={thumbnail}
                  alt="Event"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-green-500 w-auto h-auto rounded-sm px-2 py-1">
                  <p className="text-gray-800 text-2xl">
                    <CiLink />
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <div className="md:mt-4">
            <p className="text-lg font-khmermont pt-[12px] px-[30px] text-center text-white bg-green-500 h-[84px] w-full break-words">
              {truncatedTitle}
            </p>
            <div className="w-full h-[30px] bg-green-800">
              <p className="text-center p-1 font-mono text-white w-full">
                Published Date: {eventContent.createdAt}
              </p>
            </div>
            <div className="w-full h-[30px] bg-green-500">
              <p className="text-center text-white w-full">
                Automatic Disappear at: {timer}s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolEventPopup;
