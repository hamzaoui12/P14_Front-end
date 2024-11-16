import { useState } from "react";
import { Link } from "react-router-dom";

import { Modal } from "@/components/utils/Modal";
import { routes } from "@/routes";
import Form from "@/components/ui/Form";

const Home = () => {
  const [success, setSuccess] = useState(false);

  const handleSave = () => {
    setSuccess(true);
  };

  const handleCloseModal = () => {
    setSuccess(false);
  };

  return (
    <>
      <div className="mx-auto h-screen flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-bold">HRnet</h1>
          <Link
            to={routes.employees}
            className="text-sm font-light underline underline-offset-2 hover:scale-105"
          >
            View Current Employees
          </Link>
        </div>
        <h2 className="text-2xl font-semibold">Create Employee</h2>
        <Form onSave={handleSave} />
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
