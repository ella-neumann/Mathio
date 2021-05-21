import React from "react";

const Input = ({ label }) => {
  return (
    <div>
      <label for={label}>
        {label.charAt(0).toUpperCase() + label.slice(1) + ":"}
      </label>
      <input type={label} name={label} required />
    </div>
  );
};

export default Input;
