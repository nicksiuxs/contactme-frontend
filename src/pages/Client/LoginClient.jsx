import React from "react";

import LoginForm from "../../components/shared/LoginForm";

import { useDispatch } from "react-redux";
import { loginUser } from "../../context/thunks/userThunks";
const LoginClient = () => {

  const dispatch = useDispatch();

  const handleSubmit = (email, password) => {
    console.log(email, password)
    dispatch(loginUser(email, password))
  }

  return <div>
    <LoginForm title="Iniciar sesión como Cliente" route={"/create/client"} handleSubmit={handleSubmit} />
  </div>;
};

export default LoginClient;
