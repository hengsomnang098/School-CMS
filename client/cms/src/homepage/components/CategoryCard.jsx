/* eslint-disable react/prop-types */

const CategoryCard = ({ category }) => {
  return (
    <div className="border p-4 mb-4">
      <h3 className="text-lg font-bold text-blue-500">
        Article ID: {category.id}
      </h3>
      <p>Category NameKH: {category.nameKh}</p>
      <p>Category NameEN: {category.nameEn}</p>
    </div>
  );
};

export default CategoryCard;
