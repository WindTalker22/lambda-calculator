import React from "react";

const SpecialButton = (props) => {
  console.log(props)
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

export default SpecialButton