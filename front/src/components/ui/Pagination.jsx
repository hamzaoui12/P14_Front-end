export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-2 py-1 border rounded ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
      >
        Previous
      </button>
      <div className="flex items-center gap-1">
        <span className="w-12 text-center border rounded py-1">
          {currentPage}
        </span>
        <span>of {totalPages}</span>
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-2 py-1 border rounded ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
      >
        Next
      </button>
    </div>
  );
};
