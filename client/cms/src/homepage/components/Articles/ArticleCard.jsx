import PropTypes from "prop-types";
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
    </div>
  );
};
ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.shape({
      id: PropTypes.number.isRequired,
      nameKh: PropTypes.string.isRequired,
      nameEn: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ArticleCard;
