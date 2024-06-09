const ContentCard = ({ content }) => {
  return (
    <div className="border p-4 mb-4">
      <h3 className="text-lg font-bold text-blue-500">
        Content ID: {content.id}
      </h3>
      <p>Content Title: {content.title}</p>
      <p>Content description: {content.description}</p>
      <p>Article Id: {content.article.id}</p>
      <p>Article Name: {content.article.name}</p>
      <p>Category ID: {content.article.category.id}</p>
      <p>Category Name: {content.article.category.nameEn}</p>
      {Array.isArray(content.mediaList) && content.mediaList.length > 0 ? (
        content.mediaList.map((media) => (
          <div key={media.id}>
            <p>Media ID: {media.id}</p>
            <img
              src={media.mediaUrl}
              alt={`Media for ${content.name}`}
              className="w-full h-auto"
            />
          </div>
        ))
      ) : (
        <p>No media available.</p>
      )}
    </div>
  );
};

export default ContentCard;
