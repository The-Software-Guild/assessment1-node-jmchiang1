import React, { useState } from "react";
import "./Submit.css";

function Submit() {
  const [name, setName] = useState([]);
  const [age, setAge] = useState("");

  const handleName = (e) => {
    //   setName(e.target.value);
    setName(name.concat(e.target.value));
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <div className="submit">
      <form>
        <input
          id="name"
          placeholder="Name..."
          type="text"
          onChange={handleName}
        />
        <input
          id="age"
          placeholder="Age..."
          type="number"
          onChange={handleAge}
          value={age}
        />
        <button type="button" value="submit">
          Click Me
        </button>
        <div>
          <ul>
            {name.map((user) => (
              <div key={user.id}>
                <p>{user}</p>
              </div>
            ))}
          </ul>
        </div>
        {/* <h1>Age: {age}</h1> */}
      </form>
    </div>
  );
}

export default Submit;

//   setNames(names => [...names, newName])
