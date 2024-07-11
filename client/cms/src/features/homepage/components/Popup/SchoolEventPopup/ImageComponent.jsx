import React from "react";
import { Link } from "react-router-dom";
import { CiLink } from "react-icons/ci";

const ImageComponent = ({ thumbnail, eventId }) => (
  <Link to={`/event/${eventId}`}>
    <div className="relative flex flex-col h-[400px] md:h-[450px] hover:opacity-80">
      <div className="h-[400px] md:h-[470px] w-full ">
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
);

export default ImageComponent;
