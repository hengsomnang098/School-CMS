/* eslint-disable react/prop-types */
const ArticleCard = ({ article }) => {
  return (
    <div className="border p-4 mb-4">
      <h3 className="text-lg font-bold text-blue-500">
        Article ID: {article.id}
      </h3>
      <p>Article Name: {article.name}</p>
      <p>Category ID: {article.category.id}</p>
      <p>Category NameKH: {article.category.nameKh}</p>
      <p>Category NameEN: {article.category.nameEn}</p>
      {/* Display other article details as needed */}
    </div>
  );
};

export default ArticleCard;
