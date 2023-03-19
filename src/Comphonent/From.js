import React from "react";
import "../Comphonent/From.css";

function From() {
  return (
    <div className=" from">
      <div className=" container text-center">
        <h1 className=" fw-bold  _header-form">HIGH CONVERSION FROM</h1>
        <h1 className="fw-bold p-2 ">Get The Best Hotel Prices & Deals</h1>
        <p className="fw-bold _text-design">
          The best text style you can find on themeforest
        </p>

        <div>
          <form className="p-5">
            <div className="p-3">
              <label for="name"></label>
              <input
                className=" name rounded-pill p-2"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
              />
              <br />
            </div>
            <div className="p-3">
              <label for="email"></label>
              <input
                className="rounded-pill email p-2"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email Address"
              />
              <br />
            </div>

            <div className="p-3">
              <label for="email"></label>
              <input
                className=" number rounded-pill p-2"
                type="phone"
                id="number"
                name="number"
                placeholder="Enter your phone number"
              />
              <br />
            </div>
            <div className="p-3">
              <label for="plan"></label>
              <select className="rounded-pill plan p-2" id="plan">
                <option value="plan">Choose a plan</option>
                <option value="plan">3Days\2nights</option>
                <option value="plan">4Days\3Nights</option>
                <option value="plan">5Days\4Night</option>
              </select>
              <br />
            </div>
            <div className="p-2 ">
              <button className="rounded-pill submit p-2 " type="Submit">
                Subscribe For Updates
              </button>
            </div>
          </form>
          <p>*Dont Worry! WE hate SPAM as much as you do!</p>
        </div>
      </div>
    </div>
  );
}

export default From;
