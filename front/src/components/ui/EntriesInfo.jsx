export const EntriesInfo = ({ currentPage, entries, totalEntries }) => {
  const startEntry = currentPage * entries - entries + 1;
  const endEntry = Math.min(currentPage * entries, totalEntries);

  return (
    <div className="text-sm text-gray-700">
      Showing {startEntry} to {endEntry} of {totalEntries} entries
    </div>
  );
};
