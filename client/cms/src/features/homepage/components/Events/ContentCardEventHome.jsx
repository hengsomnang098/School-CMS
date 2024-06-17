import React from "react";

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
      <p className="text-start font-bold text-lg mb-2 p-2">{truncatedTitle}</p>
      <span dangerouslySetInnerHTML={{ __html: truncatedDescription }} />
      <div className="flex justify-end p-2">
        <button className="bg-green-400 rounded-sm px-4 py-2">See More</button>
      </div>
    </div>
  );
};

export default ContentCardE;
