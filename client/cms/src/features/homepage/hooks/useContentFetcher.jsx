import { useState, useEffect } from "react";
import { fetchContentsByArtName } from "../api/Api";

const useContentFetcher = (articleName) => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchContentsByArtName(articleName);

        setContents(Array.isArray(response.object) ? response.object : []);
      } catch (error) {
        console.error(`Error fetching ${articleName} articles:`, error.message);
      }
    };

    fetchData();
  }, [articleName]);

  return contents;
};

export default useContentFetcher;
