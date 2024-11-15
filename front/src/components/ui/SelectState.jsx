import { Select } from "@/components/utils/Select";
import { states } from "@/utils/states";

export const SelectState = ({ value, onChange }) => {
  return (
    <Select
      label="State"
      id="state"
      value={value}
      onChange={onChange}
      options={states.map((state) => ({
        value: state.abbreviation,
        label: state.name,
      }))}
    />
  );
};
