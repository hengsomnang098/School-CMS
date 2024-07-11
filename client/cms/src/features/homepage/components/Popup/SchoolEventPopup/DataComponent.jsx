import React from "react";

const DateComponent = ({ createdAt }) => (
  <div>
    <div className="w-full h-[30px] bg-green-800">
      <p className="text-center p-1 font-mono text-white w-full">
        Published Date: {createdAt}
      </p>
    </div>
  </div>
);

export default DateComponent;
