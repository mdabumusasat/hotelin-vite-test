import React from "react";
import buttonRightArrow from "../../assets/images/icons/button-right-arrow.svg";

const CheckoutSection = () => {
  return (
    <>
      <section className="checkout-area style-home1">
        <div className="container">
          <div className="checkout-bg">
            <form>
              <div className="row align-items-center gx-1">
                <div className="col-xl-3 col-md-6">
                  <div className="checkout-wrapper mb-4 mb-xl-0">
                    <div className="checkout-left">
                      <span>10</span>
                    </div>
                    <div className="checkout-right">
                      <h4>
                        December, <span>Friday</span>
                      </h4>
                      <div className="checkout-field">
                        <input
                          className="date-pick"
                          type="text"
                          name="checkIn"
                          placeholder="Check - in"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Check Out */}
                <div className="col-xl-3 col-md-6">
                  <div className="checkout-wrapper mb-4 mb-xl-0">
                    <div className="checkout-left">
                      <span>14</span>
                    </div>
                    <div className="checkout-right">
                      <h4>
                        December, <span>Sunday</span>
                      </h4>
                      <div className="checkout-field">
                        <input
                          className="date-pick"
                          type="text"
                          name="checkOut"
                          placeholder="Check - out"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guests / Rooms */}
                <div className="col-xl-3 col-md-6">
                  <div className="checkout-wrapper mb-4 mb-xl-0">
                    <div className="checkout-left">
                      <span>14</span>
                    </div>
                    <div className="checkout-right">
                      <h4>Guests</h4>
                      <div className="checkout-field">
                        <select className="nice-select" name="rooms">
                          <option>4 Rooms</option>
                          <option>3 Rooms</option>
                          <option>2 Rooms</option>
                          <option>1 Room</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-xl-3 col-md-6">
                  <div className="checkout-button mb-4 mb-xl-0">
                    <button type="submit" className="theme-btn-main">
                      <span className="theme-btn-arrow-left flex-shrink-0">
                        <img src={buttonRightArrow} alt="arrow" />
                      </span>

                      <span className="theme-btn">
                        Check Availability
                      </span>

                      <span className="theme-btn-arrow-right flex-shrink-0">
                        <img src={buttonRightArrow} alt="arrow" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutSection;