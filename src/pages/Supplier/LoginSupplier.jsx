import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../context/thunks/userThunks";
import LoginForm from "../../components/shared/LoginForm";

const LoginSupplier = () => {
  const dispatch = useDispatch();

  const handleSubmit = (email, password) => {
    dispatch(loginUser(email, password))
  }

  return <div>
    <LoginForm title="Iniciar sesión como Proveedor" route={"/create/supplier"} handleSubmit={handleSubmit} />
  </div>;
};

export default LoginSupplier;
