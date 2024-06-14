import { useState, useEffect } from "react";

const useFetchTeams = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("http://194.233.87.193:8080/api/teams");
        const data = await response.json();
        setTeamMembers(data.object);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team data:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  return { teamMembers, loading, error };
};

export default useFetchTeams;
