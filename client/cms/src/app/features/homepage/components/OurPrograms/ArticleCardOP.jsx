import React from "react";
import { Link } from "react-router-dom";

const ArticleCardOP = ({ article }) => {
  return (
    <div className="border-4 p-4 mb-4">
      <Link>
        <p className="">
          Article: <br />
          <div className="">{article.name} </div>
        </p>
      </Link>
    </div>
  );
};

export default ArticleCardOP;
