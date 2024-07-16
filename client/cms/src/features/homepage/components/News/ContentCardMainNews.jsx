import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const ContentCardMainNews = ({ content, isMain }) => {
  const { thumbnail, title, description } = content;
  const maxLengthTitle = 35;
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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`flex ${isMain ? "flex-col" : "mb-4"} rounded-lg ${
        isMain && inView ? "slice-in-left" : "opacity-0"
      }`}
    >
      <div
        className={`${
          isMain ? "w-full h-[420px]" : "w-1/3"
        } hover:scale-105 transition-transform duration-300 cursor-pointer`}
      >
        <Link to={`/new/${content.id}`}>
          <img
            src={thumbnail}
            alt={errorImage}
            className="w-full h-[420px] drop-shadow-lg border-2 rounded-t-md bg-green-100"
          />
        </Link>
      </div>
      <div
        className={`${
          isMain ? "" : "w-2/3 pl-4"
        } tracking-wider pt-4 px-4 break-words bg-white`}
      >
        <h3
          className="text-xl font-semibold mb-2 h-[30px]"
          dangerouslySetInnerHTML={{ __html: truncatedTitle }}
        />
        <p
          className="text-sm text-gray-700 h-[100px]"
          dangerouslySetInnerHTML={{ __html: truncatedDescription }}
        />
        <p className="text-sm text-gray-500">
          Published Date: {content.createdAt}
        </p>
        <div className="relative h-10">
          <Link
            to={`/content/${content.id}`}
            className="absolute mr-5 mb-3 bottom-0 end-0 text-green-600 drop-shadow-lg underline"
          >
            <p className="text-right hover:translate-y-[-6px] hover:scale-x-100">
              View Detail
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentCardMainNews;
