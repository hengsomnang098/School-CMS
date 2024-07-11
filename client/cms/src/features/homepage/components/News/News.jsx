import React from "react";
import GetContentsByNews from "./GetContentsByNews";

const News = () => {
  return (
    <div>
      <div className="flex items-center mb-10 pt-10">
        <div className="flex-grow  border-t-[6px] ml-8 border-black"></div>
        <h2 className="font-bold mx-4 text-2xl md:text-4xl md:mx-8">NEWS</h2>
        <div className="flex-grow border-t-[6px] mr-8 border-black"></div>
      </div>
      <div className="flex justify-center  items-center">
        <GetContentsByNews />
      </div>
    </div>
  );
};

export default News;
