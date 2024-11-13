import { useState } from "react";
import { Link } from "react-router-dom";

import { Modal } from "@/components/utils/Modal";
import { DatePicker } from "@/components/utils/DatePicker";
import { routes } from "@/routes";
import { SelectState } from "@/components/ui/SelectState";
import { SelectDepartment } from "@/components/ui/SelectDepartment";

const Home = () => {
  const [success, setSuccess] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("Sales");
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employees")) || []
  );

  const handleSave = () => {
    const newEmployee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department,
    };

    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setSuccess(true);
  };

  const handleCloseModal = () => {
    setSuccess(false);
  };

  return (
    <>
      <div className="mx-auto h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-bold">HRnet</h1>
          <Link
            to={routes.employees}
            className="text-sm font-light hover:scale-105"
          >
            View Current Employees
          </Link>
        </div>
        <h2 className="mt-8 text-2xl font-semibold">Create Employee</h2>
        <form
          className="flex flex-col gap-2 mt-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="first-name">First Name</label>
          <input
            className="border border-black py-0.5 px-2 rounded"
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            className="border border-black py-0.5 px-2 rounded"
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            selected={dateOfBirth}
            onDateChange={(date) => setDateOfBirth(date)}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            selected={startDate}
            onDateChange={(date) => setStartDate(date)}
          />

          <fieldset className="contents">
            <legend className="text-center mt-2 font-semibold text-xl">
              Address
            </legend>
            <label htmlFor="street">Street</label>
            <input
              className="border border-black py-0.5 px-2 rounded"
              type="text"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              className="border border-black py-0.5 px-2 rounded"
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <SelectState
              value={state}
              onChange={(e) => setState(e.target.value)}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              className="border border-black py-0.5 px-2 rounded"
              type="number"
              id="zip-code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </fieldset>

          <SelectDepartment
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />

          <button
            className="mt-4 border border-black w-1/2 mx-auto py-1 rounded hover:scale-105"
            onClick={handleSave}
          >
            Save
          </button>
        </form>
      </div>
      <Modal
        content={"Employee Created !"}
        open={success}
        handleClose={handleCloseModal}
      />
    </>
  );
};

export default Home;
