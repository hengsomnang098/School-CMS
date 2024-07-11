import React from "react";

const TitleComponent = ({ title, isMediumScreen }) => {
  const maxLengthTitle = isMediumScreen ? 80 : 130;
  const truncatedTitle =
    title.length > maxLengthTitle
      ? `${title.substring(0, maxLengthTitle)}...`
      : title;

  return (
    <p className="text-lg font-khmermont pt-[12px] px-[30px] text-center text-white bg-green-500 h-[84px] w-full break-words">
      {truncatedTitle}
    </p>
  );
};

export default TitleComponent;
