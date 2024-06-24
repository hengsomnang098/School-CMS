import React from "react";
import GetContentsByEvents from "./GetContentsByEvents";

const Events = () => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        <GetContentsByEvents />
      </div>
    </div>
  );
};

export default Events;
