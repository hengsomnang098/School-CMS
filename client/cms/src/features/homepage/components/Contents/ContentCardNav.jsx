import React from "react";
import { Link } from "react-router-dom";

const ContentCardNav = ({ content }) => {
  if (!content || !content.id) {
    console.error("Content or content.id is not available.");
    return <p> Data is missing or invalid.</p>;
  }

  return (
    <Link to={`/content/${content.id}`}>
      <div
        className="relative overflow-hidden border-4 w-[300px] h-[300px] text-center bg-cover bg-center flex items-center justify-center transition-transform duration-300 hover:scale-105"
        style={{ backgroundImage: `url(${content.imageUrl})` }}
      >
        <div className="relative z-10 w-[300px] h-[300px] break-words font-bold text-xl bg-white bg-opacity-50 p-4 rounded text-center flex items-center justify-center">
          {content.title}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-25 transition-opacity duration-300 hover:bg-opacity-0"></div>
      </div>
    </Link>
  );
};

export default ContentCardNav;
