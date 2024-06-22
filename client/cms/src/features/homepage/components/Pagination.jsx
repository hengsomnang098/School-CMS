import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 5;
  const sidePages = 2;
  const ellipsis = "...";

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === i
                ? "bg-green-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      if (currentPage <= sidePages + 1) {
        for (let i = 1; i <= sidePages + 2; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i}
            </button>
          );
        }
        pageNumbers.push(
          <span key="ellipsis1" className="mx-1 px-3 py-1">
            {ellipsis}
          </span>
        );
        pageNumbers.push(
          <button
            key={totalPages}
            onClick={() => handlePageChange(totalPages)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === totalPages
                ? "bg-green-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {totalPages}
          </button>
        );
      } else if (currentPage > totalPages - sidePages - 1) {
        pageNumbers.push(
          <button
            key={1}
            onClick={() => handlePageChange(1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === 1
                ? "bg-green-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {1}
          </button>
        );
        pageNumbers.push(
          <span key="ellipsis2" className="mx-1 px-3 py-1">
            {ellipsis}
          </span>
        );
        for (let i = totalPages - sidePages - 1; i <= totalPages; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i}
            </button>
          );
        }
      } else {
        pageNumbers.push(
          <button
            key={1}
            onClick={() => handlePageChange(1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === 1
                ? "bg-green-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {1}
          </button>
        );
        pageNumbers.push(
          <span key="ellipsis3" className="mx-1 px-3 py-1">
            {ellipsis}
          </span>
        );
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i}
            </button>
          );
        }
        pageNumbers.push(
          <span key="ellipsis4" className="mx-1 px-3 py-1">
            {ellipsis}
          </span>
        );
        pageNumbers.push(
          <button
            key={totalPages}
            onClick={() => handlePageChange(totalPages)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === totalPages
                ? "bg-green-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {totalPages}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="mx-1 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100"
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="mx-1 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
