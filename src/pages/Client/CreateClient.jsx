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
    <div>
      <CreateForm title="Crea una cuenta como Cliente" handleSubmit={handleSubmit} />
    </div>
  );
};

export default CreateClient;
