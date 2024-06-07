import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticlesByCategory = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticlesByCategory() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/articles?category=${id}`
        );
        const data = await response.json();
        setArticles(data.object);
      } catch (error) {
        console.error("Error fetching articles by category:", error);
      }
    }

    fetchArticlesByCategory();
  }, [id]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Articles by Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((article) => (
          <div key={article.id} className="border p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold">{article.name}</h2>
            <p className="text-gray-600 mt-2">{article.category.nameEn}</p>
            <p className="text-sm text-gray-500 mt-2">
              Category: {article.category.nameEn}
            </p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesByCategory;
