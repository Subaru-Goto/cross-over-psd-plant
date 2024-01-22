import React from "react";
import "../styles/heroSection.css";
import "../index.css";
import { IoIosSunny, IoIosCloudy } from "react-icons/io";
import { GiWaterDrop } from "react-icons/gi";

const HeroSection = () => {
  return (
    
      <main id="home" className="hero-section">
        <div className="title">
          <p>plant lover & co.</p>
          <h1>HOUSE PLANTS</h1>
          <h2>care guide</h2>
        </div>
        <div className="text">
          <p>
            Easy, hassle-free, steps to ensure that your beloved plants stay
            happy and evergreen indoors
          </p>
          <div className="icons">
            <IoIosSunny /> <IoIosCloudy />
            <GiWaterDrop />
          </div>
        </div>
      </main>

  );
};

export default HeroSection;
