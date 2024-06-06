import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchData } from "../../config/api";

const ListByCategory = () => {
  const { id } = useParams();
  const [categoryDetails, setCategoryDetails] = useState({});

  useEffect(() => {
    async function fetchCategoryDetails() {
      try {
        const data = await fetchData(`categories/${id}`);

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
            {id}
          </h2>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {categoryDetails.nameKh}
          </h2>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {categoryDetails.nameEn}
          </h2>
          <div className="text-base text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            accusamus porro? Quod, quidem, enim laborum repellendus iure nihil
            nobis error dolorem recusandae reprehenderit ab commodi adipisci
            temporibus officia, et tempora!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListByCategory;
