import { useState, useEffect } from "react";

const useFetchTeams = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTeams = async (page, pageSize) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://194.233.87.193:8080/api/teams?page=${page}&pageSize=${pageSize}`
      );
      const data = await response.json();
      setTeamMembers(data.object); // Assuming data.object contains the array of team members
      setLoading(false);
    } catch (error) {
      console.error("Error fetching team data:", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeams(1, 12); // Fetch initial page with default page number and page size
  }, []);

  return { teamMembers, loading, error, fetchTeams };
};

export default useFetchTeams;
