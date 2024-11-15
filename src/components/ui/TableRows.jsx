export const TableRow = ({ employee }) => {
  return (
    <tr className="even:bg-gray-50">
      <td className="border border-gray-300 px-4 py-2">{employee.firstName}</td>
      <td className="border border-gray-300 px-4 py-2">{employee.lastName}</td>
      <td className="border border-gray-300 px-4 py-2">{employee.startDate}</td>
      <td className="border border-gray-300 px-4 py-2">
        {employee.department}
      </td>
      <td className="border border-gray-300 px-4 py-2">
        {employee.dateOfBirth}
      </td>
      <td className="border border-gray-300 px-4 py-2">{employee.street}</td>
      <td className="border border-gray-300 px-4 py-2">{employee.city}</td>
      <td className="border border-gray-300 px-4 py-2">{employee.state}</td>
      <td className="border border-gray-300 px-4 py-2">{employee.zipCode}</td>
    </tr>
  );
};
