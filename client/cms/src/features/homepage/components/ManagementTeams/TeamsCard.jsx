import React from "react";
import { Link } from "react-router-dom";

const TeamCard = ({ member }) => {
  const name = member?.title || "";
  const description = member?.description || "";
  const imageUrl = member?.imageUrl || "";
  const maxLengthDesc = 80;

  const truncatedDescription =
    description.length > maxLengthDesc
      ? description.substring(0, maxLengthDesc) + "..."
      : description;

  return (
    <div className="w-full shadow-xl rounded-md sm:w-[250px]">
      <div className="bg-white  rounded-sm overflow-hidden">
        <img
          className="w-[250px] h-[280px]  rounded-t-md object-cover"
          src={member.photoUrl}
          alt={member.name}
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold mb-2 h-[30px]">{member.name}</h2>
        <p className="text-gray-700 mb-2 h-[48px] break-words">
          {truncatedDescription}
        </p>
        <p className="text-gray-600 h-[30px] break-words">{member.bio}</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link to={`/teams/${member.id}`}>
          <button className="bg-green-400 rounded-sm w-32 h-10 mb-5 relative overflow-hidden group">
            <span className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative z-10 text-white">Views</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TeamCard;
