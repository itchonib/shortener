import React from "react";
import "./Button.scss";

const SubmitButton = ({ type, copy, handleFn }) => {
  return (
    <div className="button__wrapper">
      <button
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

export default SubmitButton;
