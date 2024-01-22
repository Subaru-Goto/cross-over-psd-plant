import "../styles/bedroom-plants.css";
import plantRight from "../assets/images/plant_8.jpg";
import plantMiddle from "../assets/images/plant_15.jpg";
import plantLeft from "../assets/images/plant_12.jpg";
import plantTopRight from "../assets/images/plant_13.png";

const BedroomPlants = () => {
  return (
    <section className="bd-section">
      <div>
        <h2 className="bd-title">Bedroom <br/> plants</h2>
        <p className="bd-info">
          Your bedroom is your sanctuary, <br/>
          incorporate some of these plants tp <br/>
          influence a good night sleep
        </p>
      </div>
      <div className="bd-image-container">
        <div className="white-block-1"></div>
        <div className="white-block-2"></div>
        <div className="white-block-3"></div>
        <img className="bd-img1" src={plantLeft} alt="recommended bedroom plant"/>
        <img className="bd-img2" src={plantMiddle} alt="recommended bedroom plant"/>
        <img className="bd-img3" src={plantTopRight} alt="recommended bedroom plant"/>
        <img className="bd-img4" src={plantRight} alt="recommended bedroom plant"/>
      </div>
    </section>
  )
}

export default BedroomPlants