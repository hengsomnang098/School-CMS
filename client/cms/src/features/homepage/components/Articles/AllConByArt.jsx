import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api/Api";
import ContentCard from "../Contents/ContentCard";

const AllConByArt = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchArticleAndContents = async () => {
      try {
        const articlesResponse = await fetchData(`articles/${id}`);
        setArticles(articlesResponse.object);

        // Fetch all articles
        const contentsResponse = await fetchData("contents");

        // Filter articles by category ID
        const filteredContents = contentsResponse.object.filter(
          (content) => content.article.id.toString() === id
        );

        setContents(filteredContents);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching article and content:", error);
        setLoading(false);
      }
    };

    fetchArticleAndContents();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p className="text-center text-gray-600">Loading articles...</p>
      ) : contents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contents.map((content) => (
            <ContentCard key={content.id} content={content} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No articles found.</p>
      )}
    </div>
  );
};

export default AllConByArt;
