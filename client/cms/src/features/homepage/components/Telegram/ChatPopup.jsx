// src/components/ChatPopup.js
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
const ChatPopup = ({ onClose }) => {
  const telegramUsername = "SIS_Sihanoukville";
  const questions = [
    "What are the admission requirements?",
    "What subjects are offered?",
    "What extracurricular activities are available?",
  ];

  return (
    <div className="fixed bottom-20 mb-4 right-8 bg-white  rounded-lg shadow-lg z-50 w-80">
      <div className="flex justify-between items-center mb-2  bg-blue-400 h-20 px-4 ">
        <h2 className="text-md font-bold font-serif text-white">
          Chat with us on Telegram
        </h2>
        <button
          onClick={onClose}
          className="absolute right-3 top-0 font-bold text-2xl text-red-500"
        >
          x
        </button>
      </div>
      <div className="text-sm">
        {questions.map((question, index) => (
          <div
            key={index}
            className="w-auto h-10 my-4 mx-2 px-2 items-center flex bg-gray-100 shadow-sm justify-start  hover:bg-gray-200 hover:w-72  hover:scale-110 hover:translate-x-8 hover:translate-y-[-4px] hover:shadow-md hover:shadow-gray-800"
          >
            <FaTelegramPlane className="text-blue-400 w-6 h-10 hover:text-green-500" />
            <a
              href={`https://t.me/${telegramUsername}?text=${encodeURIComponent(
                question
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 h-10 hover:text-gray-800 items-center font-serif flex tracking-wide pl-2"
            >
              {question}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatPopup;
