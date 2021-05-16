import React from "react";
import React, { useState } from "react"; 

const [isOn, setIsOn] = useState(false);
const color = isOn ? "red" : "white";

function handleClick() {
 
  setIsOn((isOn) => !isOn);
} 

function Toggle() {
  return ( 
  <button style={{ background: color }} onClick = {handleClick}>
    {isOn ? "ON" : "OFF"}
  </button>
  )
}

export default Toggle;
