import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticlesByCategory from "./ArticlesByCategory";
import CategoriesByArticle from "./CategoriesByArticle";

const ListByCategory = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/articles/${id}`
        );
        const data = await response.json();
        setArticles(data.object); // Set articles for the category
      } catch (error) {
        console.error("Error fetching article details:", error);
      }
    }

    fetchArticle();
  }, [id]);

  return (
    <div>
      <div className="py-40 bg-yellow-300 text-gray-700">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 text-center">
          CategoryListById
        </h1>
      </div>
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {id}
          </h2>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {articles.name}
          </h2>
          <h2 className="text-3xl mt-8 font-bold mb-4">
            Category ID: {articles.category.id}
          </h2>
          <h2 className="text-3xl mt-8 font-bold mb-4">
            English Name: {articles.category.nameEn}
          </h2>
          <h2 className="text-3xl mt-8 font-bold mb-4">
            Category Khmer Name: {articles.category.nameKh}
          </h2>
          <div className="text-base text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            accusamus porro? Quod, quidem, enim laborum repellendus iure nihil
            nobis error dolorem recusandae reprehenderit ab commodi adipisci
            temporibus officia, et tempora!
          </div>
          <ArticlesByCategory articles={articles} />
        </div>
        <div className="lg:w1/2">{/* Sidebar content */}</div>
      </div>
    </div>
  );
};

export default ListByCategory;
