import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../context/thunks/userThunks";
import LoginForm from "../../components/shared/LoginForm";
import { useNavigate } from "react-router-dom";

const LoginSupplier = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (email, password) => {
    dispatch(loginUser(email, password)).then(() => {
      navigate("/supplier")
    })
  }

  return <div>
    <LoginForm title="Iniciar sesión como Proveedor" route={"/create/supplier"} handleSubmit={handleSubmit} />
  </div>;
};

export default LoginSupplier;
