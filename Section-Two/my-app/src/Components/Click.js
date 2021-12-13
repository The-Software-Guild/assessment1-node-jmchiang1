import React, { useState } from "react";
import "./CSS/Click.css"

function Click() {
  const [show, setShow] = useState(true);

  const handleToggle = () => setShow(!show);

  return (
    <div>
      <h1>Disapearing Box</h1>
      <h3>Click the Box, I dare you</h3>
      <div
        id="box"
        className="red-box"
        onClick={handleToggle}
        style={{ visibility: show ? "visible" : "hidden" }}
      ></div>
    </div>
  );
}

export default Click;
