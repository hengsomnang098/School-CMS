import React from "react";
import useFetchTeams from "../../hooks/useFetchTeams";
import TeamCardHome from "./TeamsCardHome";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";

const GetTeamsMembers = () => {
  const { teamMembers, loading, error } = useFetchTeams();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen font-bold font-mono text-red-600">
        No Teams Member found
      </div>
    );
  }

  const displayedTeamMembers =
    teamMembers && teamMembers.length > 4
      ? teamMembers.slice(0, 3)
      : teamMembers;

  return (
    <div>
      <div className="bg-green-50 pt-16">
        <div className="max-w-screen-lg mx-auto px-4">
          <div
            className={` grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16`}
          >
            {displayedTeamMembers.map((member) => (
              <div
                key={member.id}
                className={` transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
              >
                <TeamCardHome member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <Link to="/managementteams">
          <button className="bg-green-400 shadow-sm transform  duration-300 hover:scale-x-105 shadow-gray-400  text-white hover:translate-y-[-4px] hover:shadow-md hover:shadow-green-600 hover:bg-green-600 focus:outline-none py-2 mt-8 px-4 rounded-sm">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetTeamsMembers;
