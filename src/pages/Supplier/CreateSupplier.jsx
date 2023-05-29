import React from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../../context/thunks/userThunks';
import CreateForm from '../../components/shared/CreateForm';

const CreateSupplier = () => {

  const dispatch = useDispatch();

  const handleSubmit = (newUser) => {
    dispatch(createUser({ ...newUser, type: 2 }))
  }

  return (
    <div>
      <CreateForm title="Crea una cuenta como Proveedor" handleSubmit={handleSubmit} />
    </div>
  );
}

export default CreateSupplier