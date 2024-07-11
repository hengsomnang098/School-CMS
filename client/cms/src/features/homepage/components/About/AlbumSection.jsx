import React from "react";

const AlbumSection = ({ albumList, title }) => (
  <div className="bg-green-200">
    <h1 className="text-2xl font-khmermont pt-10">Album</h1>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {albumList.map((album) => (
        <div key={album.id}>
          <img
            src={album.mediaUrl || ""}
            alt={`Media for ${title}`}
            className="w-[250px] h-[180px]"
          />
        </div>
      ))}
    </div>
  </div>
);

export default AlbumSection;
