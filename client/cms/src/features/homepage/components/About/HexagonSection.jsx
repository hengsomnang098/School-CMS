import React, { useState } from "react";
import aboutUsImage from "../../images/AboutIcon/aboutUs.png";
import visionImage from "../../images/AboutIcon/vision.png";
import missionImage from "../../images/AboutIcon/mission.png";
import valuesImage from "../../images/AboutIcon/value.png";
import objectivesImage from "../../images/AboutIcon/objectives.png";

const HexagonSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const hexagons = [
    {
      image: aboutUsImage,
      title: "About Us",
      description:
        "Khmer General Education at the primary grade level in Cambodia is designed to provide students with a strong foundation in the Khmer.",
    },
    {
      image: visionImage,
      title: "Vision",
      description:
        "Our vision is to provide quality education to students in Cambodia, nurturing their growth and development.",
    },
    {
      image: missionImage,
      title: "Mission",
      description:
        "Our mission is to empower students with knowledge and skills through a comprehensive education program.",
    },
    {
      image: valuesImage,
      title: "Values",
      description:
        "We uphold values of integrity, excellence, and respect, fostering a positive learning environment.",
    },
    {
      image: objectivesImage,
      title: "Objectives",
      description:
        "Our objectives include fostering creativity, critical thinking, and global awareness among our students.",
    },
  ];

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const closeActive = () => {
    setActiveIndex(null); // Close active hexagon
  };

  return (
    <div className="py-12 relative">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">SouthWest International School</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {hexagons.map((hexagon, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col justify-centerjustify-center items-center ">
              <div
                className="hexagon mx-4 cursor-pointer hover:scale-115"
                onClick={() => toggleActive(index)}
              >
                <img src={hexagon.image} alt={hexagon.title} />
              </div>{" "}
              <h2 className="font-bold text-md mx-4 mb-2">{hexagon.title}</h2>
            </div>
            {activeIndex === index && (
              <>
                <div
                  className="fixed inset-0 bg-black opacity-50 z-50 "
                  onClick={closeActive}
                ></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[-50px] text-center mt-4 p-4 bg-green-200 rounded-lg shadow-lg max-w-md w-[400px] z-50">
                  <div className="flex justify-center">
                    <img
                      className="w-[100px] h-auto"
                      src={hexagon.image}
                      alt={hexagon.title}
                    />
                  </div>
                  <h2 className="font-bold font-khmermont tracking-wider text-lg mb-2 ">
                    {hexagon.title}
                  </h2>
                  <p className="text-md font-khmermont tracking-wider break-words">
                    {hexagon.description}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HexagonSection;
