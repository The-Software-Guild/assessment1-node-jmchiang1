import React, { useState } from "react";

function Keypress() {
  const [key, setKey] = useState("");
  const handleChange = (event) => {
    setKey(event.keyCode);
  };

  return (
    <div>
      <h1>Key Code Translator</h1>
      <h3>Press any key, and see what it's key code is</h3>
      <input type="text" onKeyDown={(e) => handleChange(e)}></input>
      <div>Key pressed is {key} </div>
    </div>
  );
}

export default Keypress;
