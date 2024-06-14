import React from "react";

const ContentCardE = ({ content }) => {
  // Destructure the content object to get required fields
  const { id, title, description, article, mediaList } = content;

  return (
    <div className="border p-4 mb-4">
      <h3 className="text-lg font-bold text-blue-500">Content ID: {id}</h3>
      <p>Title: {title}</p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      {article && (
        <>
          <p>Article Name: {article.name}</p>
          {article.category && (
            <p>Category Name EN: {article.category.nameEn}</p>
          )}
        </>
      )}
      {mediaList.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold text-lg mb-2">Media List:</h4>
          <ul>
            {mediaList.map((media) => (
              <li key={media.id} className="mb-2">
                <p>ID: {media.id}</p>
                <p>Name: {media.name}</p>
                <p>Type: {media.mediaType}</p>
                <img
                  src={media.mediaUrl}
                  alt={media.name}
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      {mediaList.length === 0 && <p>No media found for this content.</p>}
    </div>
  );
};

export default ContentCardE;
