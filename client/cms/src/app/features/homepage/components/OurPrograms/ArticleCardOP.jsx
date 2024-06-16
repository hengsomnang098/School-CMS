import React from "react";
import { Link } from "react-router-dom";
const ArticleCardOP = ({ article }) => {
  return (
    <div className="border-4 p-4 mb-4 text-center">
      <p className="font-bold text-lg">Article </p>
      <br />
      <Link>
        <div className="text-md ">{article.name}</div>
      </Link>
    </div>
  );
};

export default ArticleCardOP;
