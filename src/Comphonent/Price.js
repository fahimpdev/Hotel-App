import React from "react";
import "../Comphonent/price.css";
import HotelA from "../Image/hotel-image-1.jpg";
import HotelB from "../Image/hotel-image-2.jpg";
import HotelC from "../Image/hotel-image-3.jpg";
import logo1 from "../Image/bigcommerce.png";
import logo2 from "../Image/foursquare.png";
import logo3 from "../Image/popsugar.png";
import logo4 from "../Image/surveymonkey.png";
import man from "../Image/clark.jpg";

const PriceCard = ({ image, tittle, price }) => {
  return (
    <div className="col-lg-4 d-flex flex-column align-items-center">
      <img className="imgSizeing" src={image} alt="Hotelimage" />
      <h1 className="_hotelName">{tittle}</h1>
      <p className="_hotelPrice">{price}</p>
    </div>
  );
};

function Price() {
  return (
    <div className="pricesection ">
      <div className=" text-center">
        <h3 className="font">BEST PRICES FOR OUR CLIENTS</h3>
        <h1 className="fw-bold  p-2">Compare Best Hotels Prices</h1>
        <p className="text-muted fw-bold">
          The best text style you can find on themeforest
        </p>
      </div>
      <div className="container">
        <div className="row">
          <PriceCard
            image={HotelA}
            tittle="Hotel In Athens"
            price="STARTING FROM $199"
          />

          <PriceCard
            image={HotelB}
            tittle="Hotel In Dubai"
            price="STARTING FROM $259"
          />

          <PriceCard
            image={HotelC}
            tittle="Hotel In paris"
            price="STARTING FROM $339"
          />
        </div>

        <div className="_backgroundimg">
          <div className="p-4 _opacity justify-content-center d-flex flex-column ">
            <div className="p-4">
              <h1 className="fw-bold  ">More Than 5,000 Hotels</h1>
              <h5 className="p-2">
                From logo design to website design ans developers are ready
              </h5>
              <button className="_today  fw-bold ">JOIN US TODAY</button>
            </div>
          </div>
        </div>
        <div className="container  ">
          <div className="row ">
            <div className="col-lg-3 p-3 text-center">
              <img src={logo1} alt="logo" />
            </div>
            <div className="col-lg-3 p-3 text-center">
              <img src={logo2} alt="logo" />
            </div>
            <div className="col-lg-3 p-3 text-center">
              <img src={logo3} alt="logo" />
            </div>
            <div className="col-lg-3 p-3 text-center">
              <img src={logo4} alt="logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col-lg-6 d-flex align-items-center flex-column justify-content-center ">
            <p>
              " Lorem ipsum dolor sit amet consectet adipiscing elit sed do moda
              tempo incididunt ut labore et dolore magnar aliqua."
            </p>

            <h1 className="fw-bold">John Clark</h1>

            <p>via Tripadvisor.com</p>
          </div>
          <div className="col-lg-6 d-flex ">
            <img src={man} alt="clark" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
