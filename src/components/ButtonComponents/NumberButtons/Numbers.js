import React from "react";


//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const NumberButton = (props) => {
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

export default NumberButton
