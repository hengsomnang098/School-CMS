import React, { useState } from "react";

const HexagonSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const hexagons = [
    {
      icon: "🎯",
      title: "About Us",
      description:
        "Khmer General Education at the primary grade level in Cambodia is designed to provide students with a strong foundation in the Khmer.",
    },
    {
      icon: "👁️",
      title: "Vision",
      description:
        "Our vision is to provide quality education to students in Cambodia, nurturing their growth and development.",
    },
    {
      icon: "⚖️",
      title: "Mission",
      description:
        "Our mission is to empower students with knowledge and skills through a comprehensive education program.",
    },
    {
      icon: "📈",
      title: "Values",
      description:
        "We uphold values of integrity, excellence, and respect, fostering a positive learning environment.",
    },
    {
      icon: "💡",
      title: "Objectives",
      description:
        "Our objectives include fostering creativity, critical thinking, and global awareness among our students.",
    },
  ];

  const toggleActive = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if already open
    } else {
      setActiveIndex(index); // Open clicked item
    }
  };

  return (
    <div className="py-12 h-[600px]">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">SouthWest International School</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {hexagons.map((hexagon, index) => (
          <div key={index} className="relative w-[full]">
            <div
              className="hexagon bg-white shadow-lg flex items-center justify-center text-5xl cursor-pointer"
              onClick={() => toggleActive(index)}
            >
              {hexagon.icon}
            </div>
            {activeIndex === index && (
              <div className="absolute inset-x-0 top-[120px] text-center mt-4">
                <h2 className="font-bold text-lg">{hexagon.title}</h2>
                <p className="text-sm">{hexagon.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HexagonSection;
