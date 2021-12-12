import React, { useState } from "react";

function Change() {

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Some data binding</h1>
      <h3>
        Type something in the input box, and then press tab or click outside the
        input box
      </h3>
      <input type="text" onChange={handleChange} />
      <div>{text}</div>
    </div>
  );
}

export default Change;
