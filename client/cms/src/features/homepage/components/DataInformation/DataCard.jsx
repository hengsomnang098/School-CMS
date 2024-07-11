import React from "react";

const DataCard = ({ icon, name, description }) => (
  <div className="mb-2 md:w-1/2 lg:w-1/4 p-2 text-center items-center justify-center flex-col flex">
    <div className="mb-2 flex flex-col md:flex-row md:ml-8 items-center">
      <div className="h-10 flex justify-center md:mr-2">{icon}</div>
      <span className="font-mono tracking-wider text-center justify-center items-center text-2xl font-bold text-white md:text-2xl lg:text-3xl">
        {name}
      </span>
    </div>
    <div className="text-center justify-center items-center">
      <p className="text-xl font-bold font-mono text-white sm:text-2xl md:text-2xl lg:text-3xl">
        {description}
      </p>
    </div>
  </div>
);

export default DataCard;
