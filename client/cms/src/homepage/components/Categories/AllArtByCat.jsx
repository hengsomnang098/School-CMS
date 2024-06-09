import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesByCategoryId } from "../../../config/api"; // Adjust the path accordingly
import ArticleCard from "../Articles/ArticleCard";

const BASE_URL = "http://localhost:8080/api/";

const AllArtByCat = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState({});

  useEffect(() => {
    const fetchCategoryAndArticles = async () => {
      try {
        const categoryResponse = await axios.get(
          `${BASE_URL}/categories/${id}`
        );
        setCategory(categoryResponse.data.object);

        const filteredArticles = await fetchArticlesByCategoryId(id);
        setArticles(filteredArticles);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching category and articles:", error);
        setLoading(false);
      }
    };

    fetchCategoryAndArticles();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p className="text-center text-gray-600">Loading articles...</p>
      ) : articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No articles found.</p>
      )}
    </div>
  );
};

export default AllArtByCat;
