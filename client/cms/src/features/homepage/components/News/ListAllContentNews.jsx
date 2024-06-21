import React, { useEffect, useState } from "react";
import { fetchContentsByArtName } from "../../api/Api";
import ContentCardN from "./ContentCardN";

const ListAllContentNews = () => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const articleName = "School Events";

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await fetchContentsByArtName(articleName);

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
  }, [articleName]);

  return (
    <div className="bg-green-200 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <p className="text-center text-gray-600">Loading ...</p>
        ) : contents.length > 0 ? (
          <div className="mt-8">
            {contents.map((content) => (
              <div key={content.id} className="px-2">
                <ContentCardN content={content} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No articles found.</p>
        )}
      </div>
    </div>
  );
};

export default ListAllContentNews;
