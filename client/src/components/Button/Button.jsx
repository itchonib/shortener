import React from "react";
import "./Button.scss";

const Button = ({ type, copy, handleFn, dataCy }) => {
  return (
    <div className="button__wrapper">
      <button
        data-cy={dataCy}
        type={type}
        className="button__element"
        onClick={handleFn ? () => handleFn() : () => {}}
      >
        {" "}
        {copy}{" "}
      </button>
    </div>
  );
};

export default Button;
