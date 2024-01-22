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
          <a href="#featured">
            <PiLeafLight /> Featured Plant
          </a>
          <a href="#new-arrivals">
            <PiLeafLight /> New Arrivals
          </a>
          <a href="#best-sellers">
            <PiLeafLight /> Best Sellers
          </a>
          <a href="#indoor-plants">
            <PiLeafLight /> Indoor Plants
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
