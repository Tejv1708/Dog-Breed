import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/dogData">
          <li>DogData</li>
        </Link>
        <Link style={navStyle} to="/dogImage">
          <li>DogImage_1</li>
        </Link>
        <Link style={navStyle} to="/dogImage2">
          <li>DogImage_2</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Navbar;
