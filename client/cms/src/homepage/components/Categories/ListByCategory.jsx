import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../Articles/ArticleCard";
import { fetchData } from "../../../config/api";

const ListByCategory = () => {
  const { id } = useParams();

  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryAndArticles = async () => {
      try {
        // Fetch category details
        const categoryResponse = await fetchData(`categories/${id}`);
        setCategory(categoryResponse.object);

        // Fetch articles related to the category ID
        const articlesResponse = await fetchData(`articles?categoryId=${id}`);
        const filteredArticles = articlesResponse.filter(
          (article) => article.category.id === id
        );
        setArticles(filteredArticles.object);

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
      <div className="py-40 bg-yellow-300 text-gray-700">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 text-center">
          Category List by ID
        </h1>
      </div>
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            Category ID: {id}
          </h2>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            Khmer Name: {category.nameKh}
          </h2>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            English Name: {category.nameEn}
          </h2>
          <div className="text-base text-gray-500">
            {/* Add description or other details about the category */}
            {category.description}
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default ListByCategory;
