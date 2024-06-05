import React, { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import CategorySelection from "../components/CategorySelection";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchArticles() {
      let url = `http://localhost:8080/api/articles`;

      if (selectedCategory) {
        url += `?category=${selectedCategory}`;
      }
      console.log("Fetching articles with URL:", url);
      const response = await fetch(url);
      const data = await response.json();
      console.log("Fetched articles:", data);
      setArticles(data.object);
    }
    fetchArticles();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
    console.log("Selected category:", category);
  };

  return (
    <div>
      {/* category section */}
      <div>
        <CategorySelection
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>
      {/* blogcards section */}
      <div className="flex flex-col lg:flex-row gap-12 ">
        {/* blogcard component*/}
        <ArticleCard articles={articles} />
        {/* sidebar component*/}
      </div>
    </div>
  );
};

export default ArticlesPage;
