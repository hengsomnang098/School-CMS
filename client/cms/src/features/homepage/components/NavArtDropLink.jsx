import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../config/api";

const NavCate = () => {
  const [articles, setArticles] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  useEffect(() => {
    async function fetchArticles() {
      const url = `articles`;
      const res = await fetchData(url);
      const data = await res.json();
      setArticles(data.object);
    }

    fetchArticles();
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleArticleSelect = (articleId) => {
    setSelectedArticleId(articleId);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-white font-bold focus:outline-none">
        Categories
      </button>
      <ul
        className={`absolute bg-white text-black shadow-md mt-2 py-2 px-4 rounded-md ${
          isHovered ? "block" : "hidden"
        }`}
      >
        {articles.map((article) => (
          <li key={article.id} className="hover:bg-green-500">
            <Link
              key={article.id}
              to={`/category/${article.id}`}
              className={`block text-gray-800 border border-b-amber-400 p-3 ${
                selectedArticleId === article.id
                  ? "bg-slate-500 text-blue-500 cursor-pointer"
                  : "hover:bg-slate-500 hover:text-blue-500 cursor-pointer"
              }`}
              onClick={() => handleArticleSelect(article.id)}
            >
              {article.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavCate;
