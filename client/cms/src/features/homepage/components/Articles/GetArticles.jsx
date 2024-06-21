import React, { useEffect, useState } from "react";
import { fetchContentsByArtName } from "../../api/Api";
import ContentCardNav from "../Contents/ContentCardNav";

const GetArticles = ({ categoryName }) => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await fetchContentsByArtName(categoryName);

        if (response && Array.isArray(response.object)) {
          setContents(response.object);
        } else {
          console.error("No articles found for the specified category");
          setContents([]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error.message);
        setLoading(false);
      }
    };

    fetchContents();
  }, [categoryName]);

  return (
    <div className="flex justify-center ">
      {loading ? (
        <p className="text-center text-gray-600">Loading articles...</p>
      ) : contents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contents.map((content) => (
            <ContentCardNav key={content.id} content={content} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No articles found.</p>
      )}
    </div>
  );
};

export default GetArticles;
