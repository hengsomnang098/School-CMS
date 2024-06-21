import React from "react";
import { Link } from "react-router-dom";

const ContentCardE = ({ content }) => {
  const title = content?.title || "";
  const description = content?.description || "";
  const imageUrl = content?.imageUrl || "";

  const maxLengthTitle = 60;
  const maxLengthDesc = 100;

  const truncatedDescription =
    description.length > maxLengthDesc
      ? description.substring(0, maxLengthDesc) + "..."
      : description;

  const truncatedTitle =
    title.length > maxLengthTitle
      ? title.substring(0, maxLengthTitle) + "..."
      : title;

  return (
    <div className="border rounded-sm bg-gray-200 w-[350px] h-[470px]">
      <div>
        <img
          className="h-[250px] w-full rounded-t-sm object-cover"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="p-2">
        <p className="text-start font-bold text-lg mb-2">{truncatedTitle}</p>
        <p className="text-sm text-gray-700 mb-4 p-2 break-words">
          {truncatedDescription}
        </p>
        <Link to={`/content/${content.id}`}>
          <button className="bg-green-400 rounded-lg w-24 h-10 text-white hover:bg-green-600 focus:outline-none">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContentCardE;
