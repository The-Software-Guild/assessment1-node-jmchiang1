import React, { useState } from "react";
import './Change.css'

function Change() {
  const [ text, setText ] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="change">
      <h1>Some data binding</h1>
      <h3>
        Type something in the input box, and then press tab or click outside the
        input box
      </h3>
      <input onChange={handleChange} />
      <div>{text}</div>
    </div>
  );
}

export default Change;
