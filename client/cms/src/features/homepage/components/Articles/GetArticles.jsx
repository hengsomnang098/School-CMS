import React, { useEffect, useState } from "react";
import { fetchContentsByArtName } from "../../api/Api";
import ContentCardNav from "../Contents/ContentCardNav";
import Spinner from "../Spinner";
import Pagination from "../Pagination"; // Assuming you have a Pagination component

const GetArticles = ({ categoryName }) => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  // Calculate total pages based on current contents
  const totalPages = Math.ceil(contents.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate current items to display based on pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = contents.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col items-center">
      {loading ? (
        <Spinner />
      ) : contents.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((content) => (
              <ContentCardNav key={content.id} content={content} />
            ))}
          </div>
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      ) : (
        <p className="text-center text-gray-600">No articles found.</p>
      )}
    </div>
  );
};

export default GetArticles;
