export const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-4">
      <label htmlFor="search" className="mr-2">
        Search:
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search employees"
        className="border border-gray-300 rounded p-1"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
