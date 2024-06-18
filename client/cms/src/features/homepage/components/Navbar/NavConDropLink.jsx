import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "../../config/api";
const NavCate = () => {
  const [contents, setContents] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedContentId, setSelectedContentId] = useState(null);

  useEffect(() => {
    async function fetchContents() {
      const url = `contents`;
      const res = await fetchData(url);
      const data = await res.json();
      setContents(data.object);
    }

    fetchContents();
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleContentSelect = (contentId) => {
    setSelectedContentId(contentId);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-white font-bold focus:outline-none">
        Contents
      </button>
      <ul
        className={`absolute bg-white text-black shadow-md mt-2 py-2 px-4 rounded-md ${
          isHovered ? "block" : "hidden"
        }`}
      >
        {contents.map((content) => (
          <li key={content.id} className="hover:bg-green-500">
            <Link
              key={content.id}
              to={`/category/${content.id}`}
              className={`block text-gray-800 border border-b-amber-400 p-3 ${
                selectedContentId === content.id
                  ? "bg-slate-500 text-blue-500 cursor-pointer"
                  : "hover:bg-slate-500 hover:text-blue-500 cursor-pointer"
              }`}
              onClick={() => handleContentSelect(content.id)}
            >
              {content.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavCate;
