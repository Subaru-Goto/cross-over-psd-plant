import "../styles/monstera.css";
import { IoSunnyOutline } from "react-icons/io5";
import { IoWaterOutline } from "react-icons/io5";
import { PiPottedPlant } from "react-icons/pi";

const Monstera = () => {
  return (
    <section id="monstera" className="monstera-section">
      <div className="monstera-container">
        <h2 className="monstera-title">Monstera</h2>
      </div>
      <div className="monstera-logo-section">
        <div className="monstera-logo-container">
        <h3 className="monstera-subtitle">plant care</h3>
          <div className="monstera-light-card">
            <IoSunnyOutline className="monstera-light-logo" />
            <p className="monstera-light">LIGHT</p>
            <p className="monstera-light-info">
              I love light! Give some light
              but not too bright or too strong
            </p>
          </div>
          <div className="monstera-water-card">
            <IoWaterOutline className="monstera-water-logo"/>
            <p className="monstera-water">WATER</p>
            <p className="monstera-water-info">
              I love water but once a week is enough.
            </p>
          </div>
          <div className="monstera-food-card">
            <PiPottedPlant className="monstera-food-logo"/>
            <p className="monstera-food">FOOD</p>
            <p className="monstera-food-info">
              I'm not greedy, so once a month is plentiful and
              will keep me growing
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Monstera