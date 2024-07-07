import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { fetchContentsByArtName } from "../../api/Api";
import ContentCardNewsHome from "./ContentCardNewsHome";
import ContentCardMainNews from "./ContentCardMainNews";
import Spinner from "../Spinner";

const GetContentsByNews = () => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const articleName = "School News";

  const fetchContents = useCallback(async () => {
    try {
      const response = await fetchContentsByArtName(articleName);
      if (response && Array.isArray(response.object)) {
        setContents(response.object.reverse());
      } else {
        console.error("No articles found for the specified category");
        setContents([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching articles:", error.message);
      setError("No News Found");
      setLoading(false);
    }
  }, [articleName]);

  useEffect(() => {
    fetchContents();
  }, [fetchContents]);

  const { mainContent, otherContents } = useMemo(() => {
    return contents.reduce(
      (acc, content, index) => {
        if (index === 0) {
          acc.mainContent = content;
        } else if (index < 4) {
          acc.otherContents.push(content);
        }
        return acc;
      },
      { mainContent: null, otherContents: [] }
    );
  }, [contents]);

  return (
    <div className="container mx-auto max-w-[1200px] p-4">
      {loading && (
        <div className="text-center text-gray-600">
          <Spinner />
        </div>
      )}

      {!loading && error && (
        <p className="text-center font-bold font-mono text-red-600">{error}</p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-8">
          {mainContent && (
            <div className="lg:col-span-1">
              <ContentCardMainNews content={mainContent} isMain={true} />
            </div>
          )}
          <div className="grid grid-cols-1 gap-4 lg:col-span-1 ">
            {otherContents.map((content) => (
              <ContentCardNewsHome key={content.id} content={content} />
            ))}
          </div>
        </div>
      )}

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
