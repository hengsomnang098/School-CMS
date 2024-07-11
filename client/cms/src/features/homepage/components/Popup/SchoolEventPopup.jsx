import React, { useState, useEffect, useCallback } from "react";
import { FaWindowClose } from "react-icons/fa";
import { fetchData } from "../../api/Api";
import LoadingSpinner from "./SchoolEventPopup/LoadingSpinner";
import ErrorComponent from "./SchoolEventPopup/ErrorComponent";
import CountdownTimer from "./SchoolEventPopup/CountdownTimer";
import ImageComponent from "./SchoolEventPopup/ImageComponent";
import TitleComponent from "./SchoolEventPopup/TitleComponent";
import DateComponent from "./SchoolEventPopup/DataComponent";

const SchoolEventPopup = ({ content, onClose, eventId }) => {
  const [eventContent, setEventContent] = useState(content);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMediumScreen, setIsMediumScreen] = useState(
    window.innerWidth >= 768
  );

  useEffect(() => {
    if (!eventContent && eventId) {
      setLoading(true);
      fetchData(`contents/${eventId}`)
        .then((data) => {
          setEventContent(data);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [eventContent, eventId]);

  // Handle screen resize
  const handleResize = useCallback(() => {
    setIsMediumScreen(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70 z-50">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70 z-50">
        <ErrorComponent error={error} />
      </div>
    );
  }

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
          <ImageComponent
            thumbnail={eventContent.thumbnail}
            eventId={eventContent.id}
          />
          <div className="md:mt-4">
            <TitleComponent
              title={eventContent.title}
              isMediumScreen={isMediumScreen}
            />
            <DateComponent createdAt={eventContent.createdAt} />
            <CountdownTimer onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolEventPopup;
