import React from "react";
import "../styles/agave.css";
import "../index.css";
import backgroundImage from "../assets/images/background-image_3.jpg";
import { IoIosSunny, IoIosCloudy } from "react-icons/io";
import { GiWaterDrop } from "react-icons/gi";

const Agave = () => {
  return (
    <section>
      <div className="mobile-container">
        <div className="plant-text">
          <h2>
            NEW <br />
            ARRIVALS
          </h2>
          <hr />
          <h3>Agave</h3>
          <p>
            <IoIosSunny />
            full sun
          </p>
          <p>
            <GiWaterDrop />
            water every 7 days
          </p>
          <p className="size">15-25 inches</p>
          <hr />
          <p>Agave, centrury plant</p>
        </div>
        <div className="single-plant">
          <img src={backgroundImage} alt="" />
          <div className="bg-color"></div>
        </div>
      </div>
    </section>
  );
};

export default Agave;
