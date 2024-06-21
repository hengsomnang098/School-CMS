import { useEffect, useState } from "react";
import { fetchData } from "../../api/Api";
import CategoryCard from "./CategoryCard";

const CategoryLists = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    async function fetchCategory() {
      try {
        const url = `categories`;
        const res = await fetchData(url);
        setCategories(res.object);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false); // Set loading to false in case of error
        // Optionally handle error state or show an error message
      }
    }

    fetchCategory();
  }, []);
  return (
    <>
      <div className="flex justify-center">
        <div>
          {/* <h2 className="text-2xl text-blue-500">Category</h2> */}
          {/* <div>
            {categories.map((cat) => (
              <ul key={cat.id}>
                <li>{cat.id}</li>
                <li>{cat.nameKh}</li>
                <li>{cat.nameEn}</li>
                <li>-----------------</li>
              </ul>
            ))}
            <div className="max-w-7xl mx-auto my-12"> */}
          <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-10 text-center">
            Category List
          </h1>
          {loading ? (
            <p className="text-center text-gray-600">Loading Category...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryLists;
