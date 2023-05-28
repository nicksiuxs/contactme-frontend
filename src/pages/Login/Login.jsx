import React from "react";
import Header from "../../components/shared/Header";

import Logo from "../../assets/contacme-logo.png"
import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom";


const Login = () => {

  const user = useSelector(state => state.user)

  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(route)
  }
  return (
    <main>
      <div>
        <img src={Logo} />
        <h1>Ingrese como</h1>
        <div>
          <button onClick={() => handleNavigate("login/client")}>Cliente</button>
          <br />
          <button onClick={() => handleNavigate("login/supplier")}>Provedor</button>
        </div>
      </div>
    </main>
  );
};

export default Login;
