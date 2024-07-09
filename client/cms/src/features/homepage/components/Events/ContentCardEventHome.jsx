import React from "react";
import { Link } from "react-router-dom";

const ContentCardE = ({ content }) => {
  const title = content?.title || "";
  const description = content?.description || "";
  const thumbnail = content?.thumbnail || "";

  const maxLengthTitle = 35;
  const maxLengthDesc = 160;

  const truncatedDescription =
    description.length > maxLengthDesc
      ? description.substring(0, maxLengthDesc) + "..."
      : description;

  const truncatedTitle =
    title.length > maxLengthTitle
      ? title.substring(0, maxLengthTitle) + "..."
      : title;

  return (
    <div className=" bg-white  font-khmer mt-2 w-[350px] h-[500px]">
      <div className="h-[300px]">
        <Link>
          <img
            className="h-full hover:scale-105 transition-transform bg-green-100 text-center shadow-md shadow-gray-500 w-full rounded-t-sm  "
            src={thumbnail}
            alt={`No Image`}
          />
        </Link>
      </div>
      <div className="p-2 mt-4  ">
        <p className="text-start font-bold text-lg ml-2 mb-1 h-[30px] break-words">
          {truncatedTitle}
        </p>
        <p className="text-sm text-gray-700 mb-2 p-2  ml-1 h-[78px] break-words">
          <span dangerouslySetInnerHTML={{ __html: truncatedDescription }} />
        </p>
        <Link to={`/event/${content.id}`}>
          <button className=" rounded-sm w-24 h-10 ml-2 bg-green-400 shadow-sm transform  duration-300 hover:scale-x-105 shadow-gray-400  text-white hover:translate-y-[-4px] hover:shadow-md hover:shadow-green-600 hover:bg-green-600 focus:outline-none">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContentCardE;
