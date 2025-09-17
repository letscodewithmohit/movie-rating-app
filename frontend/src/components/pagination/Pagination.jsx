import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  // generate a small range centered on currentPage
  const range = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, start + 4);

  for (let p = start; p <= end; p++) range.push(p);

  return (
    <nav aria-label="Pagination" className="flex items-center gap-2 justify-center mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
      >
        Prev
      </button>

      {start > 1 && (
        <>
          <button onClick={() => onPageChange(1)} className="px-3 py-1 bg-gray-700 rounded">1</button>
          {start > 2 && <span className="px-2">…</span>}
        </>
      )}

      {range.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`px-3 py-1 rounded ${p === currentPage ? "bg-yellow-500 text-black" : "bg-gray-700 text-white"}`}
        >
          {p}
        </button>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className="px-2">…</span>}
          <button onClick={() => onPageChange(totalPages)} className="px-3 py-1 bg-gray-700 rounded">
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
