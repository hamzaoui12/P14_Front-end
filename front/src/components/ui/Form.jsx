import { useState } from "react";
import { useDispatch } from "react-redux";

import { DatePicker } from "datepicker-react-projet14"
import { SelectState } from "@/components/ui/SelectState";
import { SelectDepartment } from "@/components/ui/SelectDepartment";
import { addEmployee } from "@/utils/redux/employee";

const Form = ({ onSave }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("Sales");

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
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

    dispatch(addEmployee(newEmployee));
    onSave();
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
      <label htmlFor="first-name">First Name</label>
      <input
        className="border border-black py-0.5 px-2 rounded"
        type="text"
        id="first-name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label className="text-sm" htmlFor="last-name">Last Name</label>
      <input
        className="border border-black py-0.5 px-2 rounded"
        type="text"
        id="last-name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <label  className="text-sm" htmlFor="date-of-birth">Date of Birth</label>
      <DatePicker
        selected={dateOfBirth}
        onDateChange={(date) => setDateOfBirth(date)}
      />

      <label className="text-sm" htmlFor="start-date">Start Date</label>
      <DatePicker
        selected={startDate}
        onDateChange={(date) => setStartDate(date)}
      />

      <fieldset className="contents">
        <legend className="text-center mt-2 font-semibold text-xl">
          Address
        </legend>
        <label className="text-sm" htmlFor="street">Street</label>
        <input
          className="border border-black py-0.5 px-2 rounded"
          type="text"
          id="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />

        <label className="text-sm" htmlFor="city">City</label>
        <input
          className="border border-black py-0.5 px-2 rounded"
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <SelectState value={state} onChange={(e) => setState(e.target.value)} />

        <label className="text-sm" htmlFor="zip-code">Zip Code</label>
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
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default Form;
