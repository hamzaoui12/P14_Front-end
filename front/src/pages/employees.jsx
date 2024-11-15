import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { TableHeader } from "@/components/ui/TableHeader";
import { TableRow } from "@/components/ui/TableRows";
import { EntriesSelector } from "@/components/ui/EntriesSelector";
import { SearchBar } from "@/components/ui/SearchBar";
import { EntriesInfo } from "@/components/ui/EntriesInfo";
import { Pagination } from "@/components/ui/Pagination";
import { routes } from "@/routes";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [entries, setEntries] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const totalEntries = filteredEmployees.length;
  const totalPages = Math.ceil(totalEntries / entries);
  const displayedEmployees = filteredEmployees.slice(
    (currentPage - 1) * entries,
    currentPage * entries
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Current Employees</h1>
      <div className="flex justify-between items-center mb-4">
        <EntriesSelector entries={entries} setEntries={setEntries} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <TableHeader />
          <tbody>
            {displayedEmployees.length > 0 ? (
              displayedEmployees.map((employee, index) => (
                <TableRow key={index} employee={employee} />
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <EntriesInfo
          currentPage={currentPage}
          entries={entries}
          totalEntries={totalEntries}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <div className="text-center mt-4">
        <Link to={routes.home} className="text-blue-500 hover:underline">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Employees;
