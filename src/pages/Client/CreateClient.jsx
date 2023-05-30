import React from "react";
import CreateForm from "../../components/shared/CreateForm";
import { useDispatch } from "react-redux";
import { createUser } from "../../context/thunks/userThunks";

const CreateClient = () => {
  const dispatch = useDispatch();
  const handleSubmit = (newUser) => {
    dispatch(createUser({ ...newUser, type: 1 }))
  }

  return (
    <main className="p-3 h-screen flex justify-center items-center max-h-[90vh]">
      <CreateForm title="Crea una cuenta como cliente" handleSubmit={handleSubmit} />
    </main>
  );
};

export default CreateClient;
