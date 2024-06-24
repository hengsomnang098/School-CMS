import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { fetchContentsByArtName } from "../../api/Api";
import ContentCardNewsHome from "./ContentCardNewsHome";
import ContentCardMainNews from "./ContentCardMainNews";

const GetContentsByNews = () => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const articleName = "School News";

  const fetchContents = useCallback(async () => {
    try {
      const response = await fetchContentsByArtName(articleName);
      if (response && Array.isArray(response.object)) {
        setContents(response.object.reverse()); // Reverse to get latest first
      } else {
        console.error("No articles found for the specified category");
        setContents([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching articles:", error.message);
      setError("Error fetching articles. Please try again later.");
      setLoading(false);
    }
  }, [articleName]);

  useEffect(() => {
    fetchContents();
  }, [fetchContents]);

  const mainContent = useMemo(() => contents[0], [contents]);
  const otherContents = useMemo(() => contents.slice(1, 4), [contents]);

  if (loading) {
    return <p className="text-center text-gray-600">Loading ...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  return (
    <div className="container mx-auto max-w-[1000px] p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 drop-shadow-lg">
        {mainContent && (
          <div className="lg:col-span-1">
            <ContentCardMainNews content={mainContent} isMain={true} />
          </div>
        )}
        <div className="grid grid-cols-1 gap-4 lg:col-span-1 drop-shadow-lg">
          {otherContents.map((content) => (
            <ContentCardNewsHome key={content.id} content={content} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/schoolnews">
          <button className="bg-green-400 hover:bg-green-600 text-white py-2 mt-8 px-4 rounded">
            See All News
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetContentsByNews;
