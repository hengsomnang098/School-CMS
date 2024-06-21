import React from "react";
import useFetchTeams from "../hooks/useFetchTeams";
import TeamCard from "../components/ManagementTeams/TeamsCard";

const ManagementTeamsPage = () => {
  const { teamMembers, loading, error } = useFetchTeams();

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-600">
        Error loading team data.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Management Teams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex justify-center">
            <TeamCard member={member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagementTeamsPage;
