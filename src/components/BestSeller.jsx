import plantLeft from "../assets/images/plant_9.jpg";
import plantMiddle from "../assets/images/plant_10.jpg";
import plantRight from "../assets/images/plant_11.jpg";
import "../styles/best-seller.css";

const BestSeller = () => {
  return (
    <section id="best-sellers">
      <div className="bs-text-container">
        <h3 className="bs-subtitle">Best selling</h3>
        <h2 className="bs-title">Indoor plants</h2>
        <div className="bs-info-container">
          <p className="bs-info-text">
            Low-maintainance houseplants
            <br/>that are easy to care for
          </p>
          <span className="bs-online-logo">ONLINE ONLY</span>
        </div>
      </div>
      <div className="bs-image-container">
        <img src={plantLeft} alt="best selling purple plant" />
        <img src={plantMiddle} alt="best selling sea weed like plant" />
        <img src={plantRight} alt="best selling yellow green" />
      </div>
    </section>
  )
}

export default BestSeller