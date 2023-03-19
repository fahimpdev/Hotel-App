import React from "react";
import "../Comphonent/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className=" footer-opacity  ">
      <div className="container  ">
        <div className="row">
          <div className="d-flex">
            <div className="  col-lg-6 ">
              <strong className=" _footer-head">Contact Us</strong>
              <p className="p-2 _footer-para">
                We provides you with a full user management functionality that
                results in faster development, faster revenue, user and the
                ability to serve your users better engaging efficiently.
              </p>
              <button className="_footer-button">Get in Touch</button>
            </div>

            <div className="d-flex flex-column col-lg-3 ">
              <h1 className=" _footer-head">Visit us</h1>
              <p className="_footer-para">16 Rue Saint Paul, Paris</p>
              <p className="p-1 _footer-para">megapack@gmail.com</p>
              <p className="_footer-para">+33 4 35 62 48</p>
            </div>
            <div className=" flex-column col-lg-3 ">
              <h1 className="  _footer-head">Stay Connected</h1>
              <p className="p-2 _footer-para">Find us on social network</p>

              <div className="_footer-icon _footer-para">
                <i>
                  <FaFacebookF />
                </i>
                <i className="p-2">
                  <FaTwitter />
                </i>
                <i>
                  <FaInstagram />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
