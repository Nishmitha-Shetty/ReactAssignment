import React from "react";
import "../style/Button.css";

const Button = props => {
  return (
    <div>
      <button className={props.classname} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
};
export default Button;
