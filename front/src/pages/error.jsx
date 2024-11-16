import { routes } from "@/routes";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-6 text-red-600 font-bold">
      <h1 className="text-8xl">404</h1>
      <p className="text-5xl">Page Not Found !</p>
      <Link to={routes.home} className="text-black hover:underline text-xl">
        Go Home
      </Link>
    </div>
  );
};

export default Error;
