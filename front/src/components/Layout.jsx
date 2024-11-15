import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="w-full min-h-screen my-20">
      <Outlet />
    </div>
  );
};
