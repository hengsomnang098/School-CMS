import React, { useEffect, useState, useCallback } from "react";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

const SchoolEventPopupMobile = ({ content, onClose }) => {
  const [timer, setTimer] = useState(10);

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

  const truncatedTitle =
    content?.title?.length > 130
      ? `${content.title.substring(0, 130)}...`
      : content?.title || "";

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70 z-50">
      <div className="shadow-md relative w-full max-w-md rounded-lg overflow-hidden">
        <button
          className="absolute top-0 right-0 m-2 p-2 text-2xl text-red-600 hover:text-red-800"
          onClick={onClose}
        >
          <FaWindowClose />
        </button>
        <div>
          <p className="text-center bg-green-500 font-bold text-2xl py-2 break-words">
            UPCOMING EVENT
          </p>
          <Link to={`/event/${content.id}`}>
            <div className="relative bg-green-50 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={content.thumbnail}
                alt="Event Thumbnail"
              />
            </div>
          </Link>
          <div className="pb-4">
            <p className="text-lg font-khmermont py-2 text-center text-white bg-green-500 break-words">
              {truncatedTitle}
            </p>
            <div className="bg-green-800 py-1">
              <p className="text-center font-mono text-white">
                Published Date: {content.createdAt}
              </p>
            </div>
            <div className="bg-green-500 py-1">
              <p className="text-center text-white">
                Automatic Disappear at: {timer}s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolEventPopupMobile;
