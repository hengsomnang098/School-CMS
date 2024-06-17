import React from "react";

const HexagonSection = () => {
  const hexagons = [
    {
      icon: "🎯",
      title: "About Us",
      description:
        "Khmer General Education at the primary grade level in Cambodia is designed to provide students with a strong foundation in the Khmer.",
    },
    {
      icon: "👁️",
      title: "About Us",
      description:
        "Khmer General Education at the primary grade level in Cambodia is designed to provide students with a strong foundation in the Khmer.",
    },
    {
      icon: "⚖️",
      title: "About Us",
      description:
        "Khmer General Education at the primary grade level in Cambodia is designed to provide students with a strong foundation in the Khmer.",
    },
    {
      icon: "📈",
      title: "About Us",
      description:
        "Khmer General Education at the primary grade level in Cambodia is designed to provide students with a strong foundation in the Khmer.",
    },
    {
      icon: "💡",
      title: "About Us",
      description:
        "Khmer General Education at the primary grade level in Cambodia is designed to provide students with a strong foundation in the Khmer.",
    },
  ];

  return (
    <div className=" py-12 h-[600px]">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">SouthWest International School</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {hexagons.map((hexagon, index) => (
          <div key={index} className="relative w-[full]">
            <div className="hexagon bg-white shadow-lg flex items-center justify-center text-5xl">
              {hexagon.icon}
            </div>
            <div className="absolute inset-x-0 top-full text-center mt-4">
              <h2 className="font-bold text-lg">{hexagon.title}</h2>
              <p className="text-sm">{hexagon.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HexagonSection;
