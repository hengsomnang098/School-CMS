<<<<<<< HEAD:client/cms/src/app/features/homepage/components/Events/GetContentsByEvents.jsx
import { useEffect, useState } from "react";
import { fetchContentsByArtName } from "../../../../api/config/api";
import ContentCardE from "./ContentCardE";
=======
import React, { useEffect, useState } from "react";
import { fetchContentsByArtName } from "../../../config/api";
import ContentCardE from "./ContentCardEventHome";
>>>>>>> cd87897 (new homepage):client/cms/src/homepage/components/Events/GetContentsByEvents.jsx

const GetContentsByEvents = () => {
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
    <div>
      {loading ? (
        <p className="text-center text-gray-600">Loading contents...</p>
      ) : contents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contents.map((content) => (
            <ContentCardE key={content.id} content={content} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No articles found.</p>
      )}
    </div>
  );
};

export default GetContentsByEvents;
