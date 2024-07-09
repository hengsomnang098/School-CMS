import React, { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiLink } from "react-icons/ci";
const SchoolEventPopup = ({ content, onClose }) => {
  const title = content?.title || "";
  const thumbnail = content?.thumbnail || "";
  const maxLengthTitle = 130;

  const truncatedTitle =
    title.length > maxLengthTitle
      ? title.substring(0, maxLengthTitle) + "..."
      : title;

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

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70 z-50">
      <div
        className="bg-green-200 shadow-md relative"
        style={{ width: "600px", height: "770px" }}
      >
        <button
          className="absolute top-0 right-0 m-1 p-1 text-xl text-red-600 hover:text-red-800"
          onClick={onClose}
        >
          <FaWindowClose />
        </button>
        <div>
          <p className="text-center bg-green-500 font-bold text-2xl pt-1 items-center h-[36px] break-words">
            UPCOMING EVENT
          </p>
          <Link to={`/event/${content.id}`}>
            <div className="relative flex flex-col h-[600px] hover:opacity-80">
              <div className="h-[600px] w-full object-cover">
                <img
                  className="h-full w-full object-cover"
                  src={thumbnail}
                  alt={`Error Image`}
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
          <div>
            <p className="text-lg font-khmermont pt-[12px] px-[30px] text-center text-white bg-green-500 h-[84px] w-full break-words">
              {truncatedTitle}
            </p>
            <div className="w-[600px] h-[30px] bg-green-800">
              <p className="text-center p-1 font-mono text-white w-full">
                Published Date: {content.createdAt}
              </p>
            </div>
            <div className="w-[600px] h-[30px] bg-green-500">
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
