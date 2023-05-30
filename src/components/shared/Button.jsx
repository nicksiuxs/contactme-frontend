import React from "react";

const Button = ({ label, onClick, styles }) => {
  return (<button
    className={"bg-indigo-600 text-white border-none font-medium rounded py-2 px-3 w-full " + styles}
    onClick={onClick}>
    {label}
  </button>);
};

export default Button;
