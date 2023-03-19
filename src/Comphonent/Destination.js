import React from "react";
import "../Comphonent/Destination.css";
import imageA from "../Image/paris-icon.png";
import imageB from "../Image/rome-icon.png";
import imageC from "../Image/sidney-icon.png";

const DestinationCard = ({ image, title }) => {
  return (
    <div className="col-lg-4 text-center   ">
      <img className="image" src={image} alt="imagehotel" />
      <h1 className="_2nd-header fw-bold">{title}</h1>
      <p className="fw-bold _2ndpara text-secondary">
        Here's a free video course on how to use PixFort, add new content.
      </p>
      <button className="midsecbutton">View Deals</button>
    </div>
  );
};

function Destination() {
  return (
    <section className="middlesec   specing">
      <h3 className="world fw-bold">DISCOVER THE ENTIRE WORLD</h3>

      <h1 className="destination  ">Choose Your Destination</h1>

      <p className="para"> The best text style you can find on themeforest</p>

      <div className="container ">
        <div className="row">
          <DestinationCard image={imageA} title="Visit Paris" />
          <DestinationCard image={imageB} title="Rome Trip" />
          <DestinationCard image={imageC} title="Sidney Offers" />
        </div>
      </div>
    </section>
  );
}

export default Destination;
