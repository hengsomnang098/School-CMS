import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryLists from "./CategoryList";

const ListByCategory = () => {
  const { id } = useParams();
  const [categoryDetails, setCategoryDetails] = useState({});

  useEffect(() => {
    async function fetchCategoryDetails() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/categories/${id}`
        );
        const data = await response.json();
        setCategoryDetails(data.object);
      } catch (error) {
        console.error("Error fetching category details:", error);
      }
    }

    fetchCategoryDetails();
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
            {id} {/* Display category ID */}
          </h2>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {categoryDetails.nameKh} {/* Display category name in Khmer */}
          </h2>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {categoryDetails.nameEn} {/* Display category name in English */}
          </h2>
          <div className="text-base text-gray-500">
            {/* Placeholder for additional category information */}
          </div>
        </div>
        <div className="lg:w1/2">{/* Sidebar content */}</div>
      </div>
    </div>
  );
};

export default ListByCategory;
