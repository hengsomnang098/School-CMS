import { useState, useEffect, useCallback } from "react";
import { fetchTeams as fetchTeamsAPI } from "../api/Api"; // Adjusted import path based on your project structure

const useFetchTeams = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTeams = useCallback(async (page, pageSize) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchTeamsAPI(page, pageSize);
      setTeamMembers(data.object || []);
      return data;
    } catch (error) {
      console.error("Error fetching team data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTeams(1, 12);
  }, [fetchTeams]);

  return { teamMembers, loading, error, fetchTeams };
};

export default useFetchTeams;
