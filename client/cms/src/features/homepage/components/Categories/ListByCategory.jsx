import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api/Api";
import AllArtByCat from "./AllArtByCat";

const ListByCategory = () => {
  const { id } = useParams();

  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryAndArticles = async () => {
      try {
        const categoryResponse = await fetchData(`categories/${id}`);
        setCategory(categoryResponse.object);

        const articlesResponse = await fetchData(`articles?categoryId=${id}`);
        if (articlesResponse && articlesResponse.object) {
          setArticles(articlesResponse.object);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching category and articles:", error);
        setLoading(false);
      }
    };

    fetchCategoryAndArticles();
  }, [id]);

  return (
    <div>
      <div className="py-40 bg-yellow-300 text-gray-700">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 text-center">
          Category List by ID
        </h1>
      </div>
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            Category ID: {id}
          </h2>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            Khmer Name: {category.nameKh}
          </h2>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            English Name: {category.nameEn}
          </h2>

          <div className="max-w-7xl mx-auto my-12">
            <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 text-center">
              Articles for Category
            </h1>
            {loading ? (
              <p className="text-center text-gray-600">
                Loading category details...
              </p>
            ) : (
              <AllArtByCat categoryId={id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListByCategory;
