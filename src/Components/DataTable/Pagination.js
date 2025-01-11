import React from "react";

export default function Pagination({
  handlePagination,
  currentPage,
  totalPages,
}) {
  return (
    <div className="pagination-wrapper">
      Page {currentPage}/{totalPages}
      <button
        className="btn"
        onClick={() => handlePagination("previous", currentPage)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      <button
        disabled={totalPages === currentPage}
        className="btn"
        onClick={() => handlePagination("next", currentPage)}
      >
        {">"}
      </button>
    </div>
  );
}
