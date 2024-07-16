import React from "react";
import GetContentsByNews from "./GetContentsByNews";
import HeaderandLineinHomePage from "../HeaderandLineinHomePage";
const News = () => {
  return (
    <div>
      <HeaderandLineinHomePage title={`SCHOOL NEWS`} />
      <div className="flex justify-center  items-center">
        <GetContentsByNews />
      </div>
    </div>
  );
};

export default News;
