import { Select } from "@/components/utils/Select";

export const SelectDepartment = ({ value, onChange }) => {
  const departments = [
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Engineering", label: "Engineering" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Legal", label: "Legal" },
  ];

  return (
    <Select
      label="Department"
      id="department"
      value={value}
      onChange={onChange}
      options={departments}
    />
  );
};
