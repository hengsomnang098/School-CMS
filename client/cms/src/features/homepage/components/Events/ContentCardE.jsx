import React from "react";
import { Link } from "react-router-dom";

const ContentCardN = ({ content }) => {
  const { id, title, description, thumbnail } = content;

  const maxLengthTitle = 34;
  const maxLengthDesc = 320;

  const truncatedDescription =
    description.length > maxLengthDesc
      ? description.substring(0, maxLengthDesc) + "..."
      : description;

  const truncatedTitle =
    title.length > maxLengthTitle
      ? title.substring(0, maxLengthTitle) + "..."
      : title;

  return (
    <div className="bg-green-100  border-green-700 mb-4 mx-auto max-w-3xl rounded-lg overflow-hidden shadow-lg">
      <div className="md:flex">
        <div className="md:w-1/3  hover:scale-110 transition-transform duration-300 drop-shadow-lg cursor-pointer">
          <Link to={`/event/${content.id}`}>
            <img
              className="w-full h-auto md:h-full object-cover"
              src={thumbnail}
              alt={title}
            />
          </Link>
        </div>
        <div className="p-4 md:w-2/3">
          <h3 className="text-xl font-semibold font-khmermont mb-2">
            {truncatedTitle}
          </h3>
          <div
            className="text-sm font-khmermont h-[120px] text-gray-700 mb-6"
            dangerouslySetInnerHTML={{ __html: truncatedDescription }}
          />
          <div className="text-sm font-khmermont h-[10px] flex text-gray-700  mb-2">
            <p className="font-mono">Published Date : </p>
            <p> {content.createdAt}</p>
          </div>
          <div className="flex font-semibold text-lg justify-end">
            <Link to={`/event/${id}`} className="text-green-700 underline">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCardN;
