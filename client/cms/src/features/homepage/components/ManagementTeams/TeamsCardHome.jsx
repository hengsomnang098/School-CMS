import React from "react";
import { Link } from "react-router-dom";

const TeamCardHome = ({ member }) => {
  return (
    <div className="w-full sm:w-[250px]">
      <Link to={`/teams/${member.id}`}>
        <div className="bg-white shadow-xl rounded-sm overflow-hidden">
          <img
            className="w-full h-[300px] object-cover"
            src={member.photoUrl}
            alt={member.name}
          />
        </div>
      </Link>
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold mb-2">{member.name}</h2>
        <p className="text-gray-700 mb-2">{member.description}</p>
      </div>
    </div>
  );
};

export default TeamCardHome;
