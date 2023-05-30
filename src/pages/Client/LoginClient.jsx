import React from "react";

import LoginForm from "../../components/shared/LoginForm";

import { useDispatch } from "react-redux";
import { loginUser } from "../../context/thunks/userThunks";
import { useNavigate } from "react-router-dom";
const LoginClient = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (email, password) => {
    dispatch(loginUser(email, password)).then(res => {
      navigate("/client")
    });

  }

  return <main className="p-3 h-screen flex justify-center items-center max-h-[90vh]">
    <LoginForm title="Iniciar sesión como cliente" route={"/create/client"} handleSubmit={handleSubmit} />
  </main>;
};

export default LoginClient;
