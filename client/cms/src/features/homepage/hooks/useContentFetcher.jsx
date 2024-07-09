import react, { useState, useEffect } from "react";
import { fetchContentsByArtName } from "../api/Api";
import { debounce } from "lodash";

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

    const debouncedFetchData = debounce(fetchData, 300);
    debouncedFetchData();

    return () => {
      debouncedFetchData.cancel();
    };
  }, [articleName]);

  return contents;
};

export default useContentFetcher;
