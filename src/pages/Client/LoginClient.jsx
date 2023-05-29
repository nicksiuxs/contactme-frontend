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

  return <div>
    <LoginForm title="Iniciar sesión como Cliente" route={"/create/client"} handleSubmit={handleSubmit} />
  </div>;
};

export default LoginClient;
