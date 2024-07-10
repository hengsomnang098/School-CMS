// src/components/TelegramButton.js
import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import ChatPopup from "./ChatPopup";

const TelegramButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup((prev) => !prev);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="#"
          onClick={handleClick}
          className="flex items-center justify-center w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transform hover:scale-110 transition-transform duration-300"
        >
          <FaTelegramPlane className="w-6 h-6" />
        </a>
        {showPopup && <ChatPopup onClose={handleClose} />}
      </div>
    </>
  );
};

export default TelegramButton;
