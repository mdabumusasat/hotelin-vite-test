import React, { useState } from "react";
import buttonArrow from "../../assets/images/resort/icons/button-right-arrow.svg";

const CheckoutSectionResort = () => {
  const [formData, setFormData] = useState({
    checkIn: "27 March 2025",
    checkOut: "30 March 2025",
    adults: "3",
    children: "0",
  });

  const handleChange = (e) => {
    const { name, defaultValue } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: defaultValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Check Availability:", formData);
  };

  return (
    <section className="checkout-section-resort style-resort">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row g-4 align-items-end">
            <div className="col-xxl-9">
              <div className="row g-4">
                {/* Check In */}
                <div className="col-md-3">
                  <div className="checkout-block">
                    <h6 className="title">Check - In*</h6>
                    <div className="input-field">
                      <input
                        type="text"
                        name="checkIn"
                        className="date-pick"
                        placeholder="27 March 2025"
                        defaultValue={formData.checkIn}
                        onChange={handleChange}
                      />
                      <i className="fa-light fa-calendar-days"></i>
                    </div>
                  </div>
                </div>

                {/* Check Out */}
                <div className="col-md-3">
                  <div className="checkout-block">
                    <h6 className="title">Check - Out*</h6>
                    <div className="input-field">
                      <input
                        type="text"
                        name="checkOut"
                        className="date-pick"
                        placeholder="30 March 2025"
                        defaultValue={formData.checkOut}
                        onChange={handleChange}
                      />
                      <i className="fa-light fa-calendar-days"></i>
                    </div>
                  </div>
                </div>

                {/* Adults */}
                <div className="col-md-3">
                  <div className="checkout-block">
                    <h6 className="title">Adults</h6>
                    <select className="nice-select adult-select">
                      <option defaultValue="1">1 Adult</option>
                      <option defaultValue="2">2 Adults</option>
                      <option defaultValue="3">3 Adults</option>
                      <option defaultValue="4">4 Adults</option>
                      <option defaultValue="5">5 Adults</option>
                      <option defaultValue="6">6 Adults</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="checkout-block">
                    <h6 className="title">Children</h6>
                    <select id="children" className="nice-select children-select">
                      <option defaultValue="0">0 Children</option>
                      <option defaultValue="1">1 Child</option>
                      <option defaultValue="2">2 Children</option>
                      <option defaultValue="3">3 Children</option>
                      <option defaultValue="4">4 Children</option>
                      <option defaultValue="5">5 Children</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-xxl-3">
              <div className="checkout-button">
                <button type="submit" className="theme-btn-main">
                  <span className="theme-btn-arrow-left">
                    <img src={buttonArrow} alt="arrow" />
                  </span>

                  <span className="theme-btn">
                    Check Availability
                  </span>

                  <span className="theme-btn-arrow-right">
                    <img src={buttonArrow} alt="arrow" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutSectionResort;