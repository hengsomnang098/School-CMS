import React from "react";
import GetContentsByEvents from "./GetContentsByEvents";
import HeaderandLineinHomePage from "../HeaderandLineinHomePage";

const Events = () => {
  return (
    <div>
      <HeaderandLineinHomePage title={`SCHOOL EVENTS`} />
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <GetContentsByEvents />
        </div>
      </div>
    </div>
  );
};

export default Events;
