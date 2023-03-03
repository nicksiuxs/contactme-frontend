import React from "react";

const Input = (): JSX.Element => {
  return <input type="text" onChange={() => console.log("cambiando")} />;
};

export default Input;
