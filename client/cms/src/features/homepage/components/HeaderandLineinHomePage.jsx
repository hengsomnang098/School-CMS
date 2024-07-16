import React from "react";
import { useInView } from "react-intersection-observer";

const HeaderandLineinHomePage = ({ title }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      <div className="flex flex-row items-center justify-center mb-5 pt-5">
        <div
          className={`w-4 md:w-20 lg:w-40 border-t-[6px] ml-8 border-black ${
            inView ? "slice-in-left-line" : "opacity-0"
          }`}
        ></div>
        <h2
          className={`font-bold mx-4 text-2xl md:text-4xl md:mx-8 animate-fadeIn ${
            inView ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          {title}
        </h2>
        <div
          className={`flex-grow border-t-[6px] mr-8 border-black ${
            inView ? "slice-in-right-line" : "opacity-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default HeaderandLineinHomePage;
