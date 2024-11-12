import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="w-full min-h-[100vh] overflow-y-hidden">
      <Outlet />
    </div>
  );
};
