import { useState, useEffect } from "react";
import { fetchData } from "../../config/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const res = await fetchData(endpoint);
        if (res && res.object) {
          setData(res.object);
        }
      } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
      }
    };

    fetchDataFromApi();
  }, [endpoint]);

  return data;
};

export default useFetch;
