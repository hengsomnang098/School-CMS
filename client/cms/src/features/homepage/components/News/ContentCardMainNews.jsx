import React from "react";
import { Link } from "react-router-dom";

const ContentCardMainNews = ({ content, isMain }) => {
  const { imageUrl, title, description } = content;
  const maxLengthTitle = 60;
  const maxLengthDesc = 100;
  const errorImage = "Error Image";

  const truncatedDescription =
    description.length > maxLengthDesc
      ? `${description.substring(0, maxLengthDesc)}...`
      : description;

  const truncatedTitle =
    title.length > maxLengthTitle
      ? `${title.substring(0, maxLengthTitle)}...`
      : title;

  return (
    <div className={`flex ${isMain ? "flex-col" : "mb-4"} border rounded-lg`}>
      <div className={`${isMain ? "w-full" : "w-1/3"}`}>
        <img
          src={imageUrl}
          alt={errorImage}
          className="w-full h-auto object-cover rounded"
        />
      </div>
      <div
        className={`${
          isMain ? "" : "w-2/3 pl-4"
        } tracking-wider pt-4 px-4 break-words`}
      >
        <h3
          className="text-xl font-semibold mb-2"
          dangerouslySetInnerHTML={{ __html: truncatedTitle }}
        />
        <p
          className="text-sm text-gray-700 mb-2"
          dangerouslySetInnerHTML={{ __html: truncatedDescription }}
        />
        <div className="relative h-10">
          <Link
            to={`/content/${content.id}`}
            className="absolute mr-5 bottom-0 end-0 text-green-600 underline"
          >
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentCardMainNews;
