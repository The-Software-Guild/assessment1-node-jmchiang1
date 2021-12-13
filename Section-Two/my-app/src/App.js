import React from "react";
import "./App.css";
import Change from "./Components/Change";
import Click from "./Components/Click";
import Keypress from "./Components/Keypress";
import Mouse from "./Components/Mouse";
import Navigation from "./Components/Navigation";
import Submit from "./Components/Submit";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/change" element={<Change />} />
        <Route path="/Click" element={<Click />} />
        <Route path="/Keypress" element={<Keypress />} />
        <Route path="/Mouse" element={<Mouse />} />
        <Route path="/Submit" element={<Submit />} />
      </Routes>
    </div>
  );
}

export default App;
