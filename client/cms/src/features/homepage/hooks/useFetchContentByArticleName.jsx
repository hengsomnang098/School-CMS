import { useEffect, useState } from "react";
import { fetchData } from "../api/Api";

const useFetchContent = (endpoint, params = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetchData(endpoint, params);

        if (response && Array.isArray(response.object)) {
          setData(response.object);
        } else {
          console.error("No data found for the specified endpoint");
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [endpoint, params]);

  return { data, loading };
};

export default useFetchContent;
