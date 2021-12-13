import React from "react";
import { Link } from "react-router-dom";
import './CSS/Navigation.css'

function Navigation() {
  return (
    <div className="NavigationDiv">
        <Link to="/">Home</Link>
        <Link to="/change">Change</Link>
        <Link to="/click">Click</Link>
        <Link to="/keypress">Keypress</Link>
        <Link to="/mouse">Mouse</Link>
        <Link to="/submit">Submit</Link>
    </div>
  );
}

export default Navigation;
