import React from 'react';

const Input = ({ label, placeholder, name, type, value, onChange, styles }) => {
  return (
    <div>
      {
        label ? <label htmlFor={name}>{label}</label> : null
      }
      <input className={styles} type={type ? type : "text"} id={name} name={name} placeholder={placeholder ? placeholder : ""} value={value} onChange={onChange} />
    </div>
  )
}

export default Input