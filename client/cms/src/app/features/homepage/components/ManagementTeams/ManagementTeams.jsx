import React from "react";
import useFetchTeams from "../../hooks/useFetchTeams";
import TeamCard from "./TeamsCard";
import TeamCardHome from "./TeamsCardHome";

const ManagementTeams = () => {
  const { teamMembers, loading, error } = useFetchTeams();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading team data.</div>;
  }

  // Determine the team members to display
  const displayedTeamMembers =
    teamMembers.length > 4 ? teamMembers.slice(0, 3) : teamMembers;

  return (
    <div className="container mx-auto justify-center flex px-32  py-4 w-[1200px] h-[450px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {displayedTeamMembers.map((member) => (
          <TeamCardHome key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default ManagementTeams;
