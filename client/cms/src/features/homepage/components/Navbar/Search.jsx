import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search logic here with searchQuery
    console.log("Search query:", searchQuery);
    // Reset search query
    setSearchQuery("");
    // Close the search screen
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md mx-auto">
        <form onSubmit={handleSearchSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Search</label>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-200"
              placeholder="Search..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
