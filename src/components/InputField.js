import React from "react";

const InputField = props => {
  return (
    <input
      type={props.type}
      className={props.className}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      required
    />
  );
};

export default InputField;
