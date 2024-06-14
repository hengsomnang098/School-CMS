import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ title, image }) => {
  return (
    <Link to="/managementteams">
      <div className="w-[300px] h-[400px] bg-white shadow-lg rounded-lg overflow-hidden m-4">
        <div className="relative group">
          <img
            className="w-full h-[400px] object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            src={image}
            alt={title}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <h2 className="text-white text-lg font-bold">{title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
