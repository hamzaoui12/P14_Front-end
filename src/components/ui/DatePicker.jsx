import { useState } from "react";

export const DatePicker = ({ selectedDate, onDateChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(selectedDate || "");

  const handleDateSelect = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    onDateChange(newDate);
    setShowCalendar(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={date}
        onFocus={() => setShowCalendar(true)}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Select a date"
        className="border border-black py-0.5 px-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {showCalendar && (
        <div className="absolute mt-1 bg-white border rounded shadow-md p-2 z-10">
          <input
            type="date"
            onChange={handleDateSelect}
            onBlur={() => setShowCalendar(false)}
            className="border p-2 rounded w-full"
          />
        </div>
      )}
    </div>
  );
};
