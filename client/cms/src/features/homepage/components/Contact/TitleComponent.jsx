import React from "react";

const TitleComponent = ({ title }) => {
  return (
    <div className="flex items-center mb-5">
      <div className="flex-grow border-t-[6px] ml-8 border-black"></div>
      <h2 className="text-4xl font-bold mx-8">{title}</h2>
      <div className="flex-grow border-t-[6px] mr-8 border-black"></div>
    </div>
  );
};

export default TitleComponent;
