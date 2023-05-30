import React from 'react';

const Input = ({ label, placeholder, name, type, value, onChange, styles }) => {
  return (
    <div>
      {
        label ? <label htmlFor={name}>{label}</label> : null
      }
      <input type={type ? type : "text"} id={name} name={name} placeholder={placeholder ? placeholder : ""} value={value} onChange={onChange}
        className={"w-full py-2 px-3 rounded text-sm " + styles}
      />
    </div>
  )
}

export default Input