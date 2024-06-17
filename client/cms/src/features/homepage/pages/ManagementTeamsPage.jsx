import React from "react";
import useFetchTeams from "../hooks/useFetchTeams";
import TeamCard from "../components/ManagementTeams/TeamsCard";

const ManagementTeamsPage = () => {
  const { teamMembers, loading, error } = useFetchTeams();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading team data.</div>;
  }

  return (
    <div className="container mx-auto px-20 py-8  ">
      <h1 className="text-3xl font-bold mb-8 text-center">Management Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default ManagementTeamsPage;
