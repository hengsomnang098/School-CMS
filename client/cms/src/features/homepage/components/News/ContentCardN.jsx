import React from "react";
import { Link } from "react-router-dom";

const ContentCardN = ({ content }) => {
  // Destructure the content object to get required fields
  const { id, title, description, imageUrl } = content;

  const maxLengthTitle = 34;
  const maxLengthDesc = 60;

  const truncatedDescription =
    description.length > maxLengthDesc
      ? description.substring(0, maxLengthDesc) + "..."
      : description;

  const truncatedTitle =
    title.length > maxLengthTitle
      ? title.substring(0, maxLengthTitle) + "..."
      : title;
  return (
    <div className="border-2 flex flex-row  border-green-700 p-4 mb-4 mx-auto max-w-2xl">
      <div className="w-[230px] h-[180px] mr-5">
        <img className="w-[180px] h-[180px]" src={imageUrl} alt="" />
      </div>
      <div>
        <h3 className="text-xl font-semibold font-khmermont mb-4 h-[30px]">
          {truncatedTitle}
        </h3>
        <div
          className="prose mb-4 h-[80px] font-khmermont break-words "
          dangerouslySetInnerHTML={{ __html: truncatedDescription }}
        />

        {/* View Details Button */}
        <div className="flex justify-end mt-4">
          <Link to={`/content/${id}`} className="text-green-700 underline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentCardN;
