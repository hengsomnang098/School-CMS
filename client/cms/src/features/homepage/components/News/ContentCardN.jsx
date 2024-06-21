import React from "react";
import { Link } from "react-router-dom";

const ContentCardN = ({ content }) => {
  // Destructure the content object to get required fields
  const { id, title, description, article, mediaList } = content;

  return (
    <div className="border-2 border-green-700 p-4 mb-4 mx-auto max-w-2xl">
      <p className="text-xl font-semibold mb-2">{title}</p>
      <div
        className="prose mb-4"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      {mediaList.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold text-lg mb-2">Media List:</h4>
          <ul>
            {mediaList.map((media) => (
              <li key={media.id} className="mb-4">
                <p className="font-semibold">ID: {media.id}</p>
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

      {mediaList.length === 0 && (
        <p className="mt-4">No media found for this content.</p>
      )}

      {/* View Details Button */}
      <div className="flex justify-end mt-4">
        <Link to={`/content/${id}`} className="text-green-700 underline">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ContentCardN;
