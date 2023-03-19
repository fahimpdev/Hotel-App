import React from "react";

import logo from "../Image/logo.png";
import "../Comphonent/Home.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLock,
  FaHamburger,
  FaGlobe,
  FaSearchLocation,
} from "react-icons/fa";

import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <section className="header">
      <Container>
        <div className="menu">
          <div className="img">
            <img src={logo} alt="logo" />
          </div>
          <div className="listItem">
            <ul className="listItem">
              <li>
                <a href="!#">FEATURES</a>
              </li>
              <li>
                <a href="!#">DROPDOWN</a>
              </li>
              <li>
                <a href="!#">CONTACT</a>
              </li>
            </ul>
          </div>
          <div className="icon">
            <a className="color px-1" href="!#">
              <FaFacebookF />
            </a>
            <a className="color px-1" href="!#">
              <FaTwitter />
            </a>
            <a className="color px-1" href="!#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </Container>
      <div className="hotel d-flex align-items-center flex-column container">
        <h1 className="font-size text-center">
          Luxury Hotels starting from $99
        </h1>
        <p className="paragraph text-center">
          Compare prices from 200+ booking sites to help you find the lowest
          price on the right hotel for you.
        </p>
        <button className="button   px-4 py-3" type="text">
          COMPARE HOTELS
        </button>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-lg-3    d-flex flex-column align-items-center ">
            <i className="icon2 p-4">
              <FaSearchLocation />
            </i>
            <h3 className="iconfont">Choose City</h3>
          </div>

          <div className="col-lg-3  d-flex flex-column align-items-center">
            <i className="icon2 p-4">
              <FaLock />
            </i>
            <h3 className="iconfont">Swqure Platform</h3>
          </div>

          <div className="col-lg-3   d-flex flex-column align-items-center">
            <i className="icon2 p-4">
              <FaHamburger />
            </i>
            <h3 className="iconfont"> Breakfast </h3>
          </div>

          <div className="col-lg-3  d-flex flex-column align-items-center">
            <i className="icon2 p-4">
              <FaGlobe />
            </i>
            <h3 className="iconfont">+150 Destination</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
