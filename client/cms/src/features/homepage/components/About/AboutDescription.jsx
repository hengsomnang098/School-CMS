import React from "react";

const AboutDescription = ({ description }) => (
  <p className="text-gray-700 text-lg text-md mb-6">
    {description ? (
      <span dangerouslySetInnerHTML={{ __html: description }} />
    ) : (
      <span>No description available.</span>
    )}
  </p>
);

export default AboutDescription;
