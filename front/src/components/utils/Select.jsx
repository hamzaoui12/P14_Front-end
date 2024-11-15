export const Select = ({ label, id, value, onChange, options }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm mb-1">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="border border-black py-0.5 px-2 rounded"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
