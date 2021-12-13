import React, {useState} from "react";

function Mouse() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const updateMousePosition = event => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      };

  return (
    <div>
      <h2>X coordinate: {mousePosition.x} </h2>
      <h2>Y coordinate: {mousePosition.y} </h2>
      <h3>Move your mouse in the box to see the coordinates of your mouse</h3>
      <div class="red-box" onMouseMove={updateMousePosition} ></div>
    </div>
  );
}

export default Mouse;
