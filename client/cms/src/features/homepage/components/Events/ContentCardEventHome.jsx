import React from "react";
import { Link } from "react-router-dom";

const ContentCardE = ({ content }) => {
  const title = content?.title || "";
  const description = content?.description || "";
  const imageUrl = content?.imageUrl || "";

  const maxLengthTitle = 40;
  const maxLengthDesc = 110;

  const truncatedDescription =
    description.length > maxLengthDesc
      ? description.substring(0, maxLengthDesc) + "..."
      : description;

  const truncatedTitle =
    title.length > maxLengthTitle
      ? title.substring(0, maxLengthTitle) + "..."
      : title;

  return (
    <div className="border rounded-sm bg-green-100 drop-shadow-xl font-khmer shadow-green-500   w-[350px] h-[450px]">
      <div>
        <img
          className="h-[250px] w-full rounded-t-sm object-cover"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="p-2">
        <p className="text-start font-bold text-lg ml-2 mb-2 h-[40px] break-words">
          {truncatedTitle}
        </p>
        <p className="text-sm text-gray-700 mb-4 p-2  ml-1 h-[68px] break-words">
          <span dangerouslySetInnerHTML={{ __html: truncatedDescription }} />
        </p>
        <Link to={`/content/${content.id}`}>
          <button className="bg-green-400 rounded-lg w-24 h-10 ml-2  text-white hover:bg-green-600 focus:outline-none">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContentCardE;
