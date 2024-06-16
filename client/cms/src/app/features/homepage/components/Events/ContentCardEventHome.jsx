import React from "react";

const ContentCardE = ({ content }) => {
  const { title, description, imageUrl, mediaList } = content;

  const maxLengthTitle = 60;
  const maxLengthDesc = 100;
  const truncatedDescription =
    description.length > maxLengthDesc
      ? description.substring(0, maxLengthDesc) + "..."
      : description;

  const truncatedTitle =
    title.length > maxLengthTitle
      ? description.substring(0, maxLengthTitle) + "..."
      : title;
  return (
    <div className="border rounded-sm bg-gray-200 w-[350px] h-[470px]">
      <div>
        <img className="h-[250px] w-[100%] rounded-sm" src={imageUrl} alt="" />
      </div>
      <p className="text-start font-khmer font-bold text-lg mb-2 p-2">
        {truncatedTitle}
      </p>

      <div className="prose font-khmer text-start p-2 h-[85px]">
        {truncatedDescription}
      </div>
      <div className="relative h-12 w-auto">
        <button className="absolute h-10 w-22 bottom-0 end-0 mb-4 mr-5 bg-green-400 rounded-sm px-4 text-center">
          See More
        </button>
      </div>
    </div>
  );
};

export default ContentCardE;
