import React from "react";
import GetContentsByEvents from "./GetContentsByEvents";

const Events = () => {
  return (
    <div>
      <div className="flex items-center mb-10 pt-10">
        <div className="flex-grow  border-t-[6px] ml-8 border-black"></div>
        <h2 className="font-bold mx-4 text-2xl md:text-4xl md:mx-8">
          SCHOOL EVENTS
        </h2>
        <div className="flex-grow border-t-[6px] mr-8 border-black"></div>
      </div>
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <GetContentsByEvents />
        </div>
      </div>
    </div>
  );
};

export default Events;
