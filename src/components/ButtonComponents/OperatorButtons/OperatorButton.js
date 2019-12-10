import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <button 
      className="button"
      onClick={
        () => props.clickHandler(props.buttonName)
      }
      >
        {props.buttonName}
      </button>
    </>
  );
};

export default OperatorButton
