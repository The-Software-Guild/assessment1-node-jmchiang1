import React, { useState } from "react";
import "./Submit.css";

function Submit() {
    const [item, setItem] = useState([]); //state of array
    const [name, setName] = useState(""); //state of name input
    const [age, setAge] = useState(""); //state of age input
  
    const saveName = (e) => {
      //save input value (event.target.value)
      setName(e.target.value);
    };
  
    const saveAge = (e) => {
      setAge(e.target.value);
    };
  
    const addNewItem = () => {
      //push input value into array so it stays
      const arr = [...item];
      arr.push(`Name: ${name}, Age: ${age}`); //push this into array
      setItem(arr);
      setAge(arr);
      setName("");
      setAge("");
    };
    return (
      <div className="submit">
        <input type="text" onChange={saveName} placeholder="Name..." />
        <input type="number" onChange={saveAge} placeholder="Age..." />
        <button onClick={addNewItem}>Submit</button>
        <ol>
          {item.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ol>
      </div>
    );
  }

export default Submit;
