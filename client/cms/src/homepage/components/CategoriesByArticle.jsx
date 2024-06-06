import React, { useEffect, useState } from "react";

const CategoriesByArticle = ({ id }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategoriesByArticle() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/categories?article=${id}`
        );
        const data = await response.json();
        setCategories(data.object); // Assuming 'object' contains categories related to the article ID
      } catch (error) {
        console.error("Error fetching categories by article:", error);
      }
    }

    fetchCategoriesByArticle();
  }, [id]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Categories by Article</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="border p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold">{category.nameEn}</h2>
            {/* Display additional category information as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesByArticle;
