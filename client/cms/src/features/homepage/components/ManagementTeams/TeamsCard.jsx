import React from "react";
import { Link } from "react-router-dom";

const TeamCard = ({ member }) => {
  const name = member?.name || "";
  const description = member?.bio || "";
  const imageUrl = member?.photoUrl || "";
  const maxLengthDesc = 80;

  const truncatedDescription =
    description.length > maxLengthDesc
      ? description.substring(0, maxLengthDesc) + "..."
      : description;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-64 object-cover object-center"
        src={imageUrl}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-2">{truncatedDescription}</p>
        <Link to={`/teams/${member.id}`}>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TeamCard;
