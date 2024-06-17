import { useEffect, useState, useCallback } from "react";
import { fetchContentsByArtName } from "../../../../app/api/config/api";
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
        setContents(response.object);
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

  if (loading) {
    return <p className="text-center text-gray-600">Loading contents...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  const mainContent = contents[0];
  const otherContents = contents.slice(1);

  return (
    <div className="container mx-auto max-w-1000px p-4">
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
    </div>
  );
};

export default GetContentsByNews;
