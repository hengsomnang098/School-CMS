import React from "react";

const ArticleCardOP = ({ article }) => {
  return (
    <div className="border p-4 mb-4">
      <h3 className="text-lg font-bold text-blue-500">
        Article ID: {article.id}
      </h3>
      <p>Article Name: {article.name}</p>
      <p>Category ID: {article.category.id}</p>
      <p>Category Name: {article.category.nameEn}</p>
    </div>
  );
};

export default ArticleCardOP;
