import { useEffect, useState } from "react";
import { fetchArticlesByCatName } from "../../../../api/config/api";
import ArticleCardOP from "./ArticleCardOP";

const GetArticlesOurPrograms = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const categoryName = "Our Programs";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetchArticlesByCatName(categoryName);

        if (response && Array.isArray(response.object)) {
          setArticles(response.object);
        } else {
          console.error("No articles found for the specified category");
          setArticles([]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [categoryName]);

  return (
    <div>
      {loading ? (
        <p className="text-center text-gray-600">Loading articles...</p>
      ) : articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCardOP key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No articles found.</p>
      )}
    </div>
  );
};

export default GetArticlesOurPrograms;
