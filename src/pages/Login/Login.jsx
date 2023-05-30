import React from "react";

import Title from "../../components/shared/Title";
import Button from "../../components/shared/Button";

import Logo from "../../assets/contacme-logo.png"

import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route)
  }

  return (
    <main className="p-3 h-screen flex justify-center items-center max-h-[90vh]">
      <div className="flex flex-col justify-center items-center w-full border border-dashed h-fit px-3 py-5 rounded">
        <img src={Logo} className="w-14 mb-6" />
        <Title title={"Ingrese como"} styles={"mb-10"} />
        <div className="w-full">
          <Button label="Cliente" onClick={() => handleNavigate("login/client")} styles={"mb-7"} />
          <Button label="Provedor" onClick={() => handleNavigate("login/supplier")} />
        </div>
      </div>
    </main>
  );
};

export default Login;
