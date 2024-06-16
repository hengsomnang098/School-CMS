import React from "react";

const ArticleCardAD = ({ article }) => {
  return (
    <div className="border-4 p-4 mb-4">
      <p>Article Name: {article.name}</p>
    </div>
  );
};

export default ArticleCardAD;
