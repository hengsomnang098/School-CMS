import React from "react";

const ContentCardNewsHome = ({ content, isMain }) => {
  const title = content?.title || "";
  const description = content?.description || "";
  const imageUrl = content?.imageUrl || "";
  const maxLengthTitle = 30;
  const maxLengthDesc = 70;

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
    <div className={`flex ${isMain ? "flex-col" : ""} border rounded-lg `}>
      <div className={`${isMain ? "w-full" : "w-1/3"}`}>
        <img
          src={imageUrl}
          alt={errorimage}
          className="w-full h-full object-cover rounded "
        />
      </div>
      <div className={`${isMain ? "" : "w-2/3 pl-4"} pt-4`}>
        <h3 className="text-xl font-semibold mb-2">{truncatedTitle}</h3>
        <span dangerouslySetInnerHTML={{ __html: truncatedDescription }} />

        <div className="relative h-8 ">
          <a
            href="/"
            className="absolute mr-5 bottom-0 end-0 text-green-600 underline "
          >
            see more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentCardNewsHome;
