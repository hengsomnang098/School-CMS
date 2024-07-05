import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api/Api";
import AllConByArt from "./AllConByArt";
import Spinner from "../Spinner";

const ListByArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticleByContents() {
      try {
        const data = await fetchData(`articles/${id}`);
        setArticle(data.object);

        const contentsResponse = await fetchData(`contents?articleId=${id}`);
        if (contentsResponse && contentsResponse.object) {
          setContent(contentsResponse.object);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching article details:", error);
        setLoading(false);
      }
    }

    fetchArticleByContents();
  }, [id]);

  return (
    <div className="bg-yellow-200 font-mono">
      <div className="flex items-center mb-10 pt-10 ">
        <div className="flex-grow  border-t-[6px] ml-8 border-black"></div>
        <h2 className="text-5xl font-bold mx-8">Program: {article.name}</h2>
        <div className="flex-grow border-t-[6px] mr-8 border-black"></div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div className="text-base text-gray-500">
            {/* Description: {article.description} */}
          </div>
          <div className="max-w-7xl mx-auto my-12">
            <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 text-center">
              Contents of {article.name}
            </h1>
            {loading ? (
              <p className="text-center text-gray-600">
                <Spinner />
              </p>
            ) : (
              <AllConByArt articleId={id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListByArticle;
