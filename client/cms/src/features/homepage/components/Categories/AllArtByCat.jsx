import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api/Api";
import ArticleCard from "../Articles/ArticleCard";

const AllArtByCat = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState({});

  useEffect(() => {
    const fetchCategoryAndArticles = async () => {
      try {
        const categoryResponse = await fetchData(`categories/${id}`);
        setCategory(categoryResponse.object);

        const articlesResponse = await fetchData("articles");

        const filteredArticles = articlesResponse.object.filter(
          (article) => article.category.id.toString() === id
        );

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
