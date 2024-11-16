import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/utils/store";
import Home from "@/pages/home";
import Employees from "@/pages/employees";
import Error from "@/pages/error";
import { Layout } from "@/components/Layout";
import { routes } from "@/routes";

import "@/styles/index.css";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routes.employees,
        element: <Employees />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
