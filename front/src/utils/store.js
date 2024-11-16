import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "@/utils/redux/employee";

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});
