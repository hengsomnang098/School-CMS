import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const TeamCardHome = ({ member }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`${
        inView ? "slice-in-right" : "opacity-0"
      } w-full sm:w-[250px]`}
    >
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
