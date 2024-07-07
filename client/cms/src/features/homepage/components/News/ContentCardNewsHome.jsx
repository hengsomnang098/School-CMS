import React from "react";
import { Link } from "react-router-dom";

const ContentCardNewsHome = ({ content, isMain }) => {
  const title = content?.title || "";
  const description = content?.description || "";
  const thumbnail = content?.thumbnail || "";
  const maxLengthTitle = 22;
  const maxLengthDesc = 120;

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
    <div
      className={`flex ${
        isMain ? "flex-col" : ""
      } border rounded-sm overflow-hidden slice-in-from-right`}
      style={{ maxWidth: "100%" }}
    >
      <div
        className={`${
          isMain ? "w-full " : "w-2/5"
        } hover:scale-110 transition-transform duration-300 drop-shadow-lg cursor-pointer`}
      >
        <Link to={`/content/${content.id}`}>
          <img
            src={thumbnail}
            alt={errorImage}
            className="w-full h-[200px] object-cover rounded-l-sm bg-green-100 drop-shadow-lg
          "
          />
        </Link>
      </div>
      <div
        className={`${
          isMain ? "" : "w-3/5 pl-4 pr-4"
        } pt-4 break-words pb-2 bg-green-100`}
      >
        <h3 className="text-xl font-semibold mb-2 break-words h-[35px]">
          {truncatedTitle}
        </h3>
        <p className="text-sm text-gray-700 mb-2 p-2 px-2 break-words h-[75px]">
          <span dangerouslySetInnerHTML={{ __html: truncatedDescription }} />
        </p>
        <p className="text-sm text-gray-500">
          Published Date: {content.createdAt}
        </p>

        <div className="text-right">
          <Link
            to={`/content/${content.id}`}
            className="text-green-600 underline"
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentCardNewsHome;
