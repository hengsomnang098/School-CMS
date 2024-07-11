import React, { useState, useEffect } from "react";
import useFetchTeams from "../hooks/useFetchTeams";
import TeamCard from "../components/ManagementTeams/TeamsCardPage";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";

const ManagementTeamsPage = () => {
  const pageSize = 12;
  const [page, setPage] = useState(1);
  const { teamMembers, loading, error, fetchTeams } = useFetchTeams();

  useEffect(() => {
    fetchTeams(page, pageSize);
  }, [page, pageSize, fetchTeams]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (loading && !teamMembers.length) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-600">
        Error loading team data.
      </div>
    );
  }

  const totalPages = Math.ceil(teamMembers.length / pageSize);

  return (
    <div className="w-full min-h-screen bg-green-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-12 text-center">
          Management Teams
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex justify-center">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onNext={nextPage}
            onPrev={prevPage}
          />
        )}
      </div>
    </div>
  );
};

export default ManagementTeamsPage;
