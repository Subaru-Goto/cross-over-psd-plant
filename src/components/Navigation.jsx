import React from "react";
import "../styles/navigation.css";
import "../index.css";
import { PiLeafLight } from "react-icons/pi";

const Navigation = () => {
  return (
    <>
      <nav id="hamnav">
        <label for="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" />

        <div id="hamitems">
          <a href="#home">
            <PiLeafLight /> Home
          </a>
          <a href="#new-arrivals">
            <PiLeafLight />
            New Arrivals
          </a>
          <a href="#monstera">
            <PiLeafLight />
            Monstera
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
