import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { fetchData } from "../../api/Api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const url = `articles`;
        const res = await fetchData(url);
        setArticles(res.object);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false); // Set loading to false in case of error
        // Optionally handle error state or show an error message
      }
    }

    fetchArticle();
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-12">
      <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 text-center">
        Article List
      </h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading articles...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleList;
