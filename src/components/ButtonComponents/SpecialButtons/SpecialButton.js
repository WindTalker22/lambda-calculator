import React from "react";

const SpecialButton = (props) => {
  console.log(props)
  return (
    <>
      <button>{props.buttonName}</button>
    </>
  );
};

export default SpecialButton