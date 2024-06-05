import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const url = `http://localhost:8080/api/articles`;

      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.object);
    }

    fetchArticles();
  }, []);

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl text-blue-500 mb-4">Articles</h2>
      <div className="grid grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
