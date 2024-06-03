import React, { useEffect, useState } from "react";

const CategoryLists = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const url = `http://localhost:8080/api/categories`;

      const res = await fetch(url);
      const data = await res.json();
      setCategories(data.object);
    }

    fetchCategories();
  }, []);
  return (
    <>
      <div className="flex justify-center">
        <div>
          <h2 className="text-2xl text-blue-500">Category</h2>
          <div>
            {categories.map((cat) => (
              <ul key={cat.id}>
                <li>{cat.id}</li>
                <li>{cat.nameKh}</li>
                <li>{cat.nameEn}</li>
                <li>-----------------</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryLists;
