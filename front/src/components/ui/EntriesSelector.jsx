import { Select } from "@/components/utils/Select";

export const EntriesSelector = ({ entries, setEntries }) => {
  const entryOptions = [5, 10, 25, 50].map((option) => ({
    value: option,
    label: `${option}`,
  }));

  return (
    <div className="flex items-center mb-4">
      <label htmlFor="entries" className="mr-2">
        Show
      </label>
      <Select
        label=""
        id="entries"
        value={entries}
        onChange={(e) => setEntries(Number(e.target.value))}
        options={entryOptions}
      />
      <span className="ml-2">entries</span>
    </div>
  );
};
