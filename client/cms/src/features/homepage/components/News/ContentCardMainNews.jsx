import React from "react";

const ContentCardMainNews = ({ content, isMain }) => {
  const { imageUrl, title, description } = content;
  const maxLengthTitle = 60;
  const maxLengthDesc = 100;
  const errorimage = "Error Image";
  const truncatedDescription =
    description.length > maxLengthDesc
      ? description.substring(0, maxLengthDesc) + "..."
      : description;

  const truncatedTitle =
    title.length > maxLengthTitle
      ? description.substring(0, maxLengthTitle) + "..."
      : errorimage;
  return (
    <div className={`flex ${isMain ? "flex-col" : "mb-4"} border rounded-lg`}>
      <div className={`${isMain ? "w-full" : "w-1/3"}`}>
        <img
          src={imageUrl}
          alt={errorimage}
          className="w-full h-auto object-cover rounded"
        />
      </div>
      <div className={`${isMain ? "" : "w-2/3 pl-4"} tracking-wider pt-4 px-4`}>
        <h3 className="text-xl font-semibold mb-2">{truncatedTitle}</h3>
        <p className="text-gray-700 mb-2">{truncatedDescription}</p>
        <div className="relative h-10 ">
          <a
            href="/"
            className="absolute h-8 w-22 bottom-0 end-0  text-green-600 underline "
          >
            see more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentCardMainNews;
