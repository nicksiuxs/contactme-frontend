import React from "react";
import Header from "../../components/shared/Header";
import { useSelector } from "react-redux"

const Login = () => {

  const user = useSelector(state => state.user)
  console.log(user)
  return (
    <>
      <Header />
      <div>
        <h1>Login Page s</h1>
      </div>
    </>
  );
};

export default Login;
