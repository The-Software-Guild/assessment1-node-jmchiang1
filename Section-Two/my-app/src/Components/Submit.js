import React, { useState } from "react";
import "./CSS/Submit.css";

function Submit() {
  const [array, setArray] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const saveName = (e) => {
    setName(e.target.value);
  };

  const saveAge = (e) => {
    setAge(e.target.value);
  };

  const addNewItem = () => {
    const arr = [...array];
    arr.push(`Name: ${name}, Age: ${age}`);
    setArray(arr);
    setAge(arr);
    setName("");
    setAge("");
  };
  return (
    <div className="submit">
      <input type="text" onChange={saveName} placeholder="Name..." />
      <input type="number" onChange={saveAge} placeholder="Age..." />
      <button onClick={addNewItem}>Submit</button>
      <div className="list-div">
        <ol className="list">
          {array.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default Submit;
