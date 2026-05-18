import React from "react";

const CheckoutAreaMountain = () => {

  return (
    <div
      className="checkout-area-mountain">
      <div className="container">
        <div className="checkout-wrapper-mountain">
          <form>
            <div className="row gx-4 gx-xxl-2 row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
              <div className="col">
                <div className="checkout-field mb-4 mb-xxl-0">
                  <input
                    type="text"
                    name="checkIn"
                    className="date-pick"
                    placeholder="Check - in"
                  />
                  <div className="icon">
                    <i className="lnr-icon-calendar-full"></i>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="checkout-field mb-4 mb-xxl-0">
                  <input
                    type="text"
                    name="checkOut"
                    className="date-pick"
                    placeholder="Check - Out"
                  />
                  <div className="icon">
                    <i className="lnr-icon-calendar-full"></i>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="checkout-field mb-4 mb-xxl-0">
                  <select
                    name="adults"
                    className="nice-select w-100">
                    <option>1 Adults</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>4 Adults</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="checkout-field mb-4 mb-xxl-0">
                  <select
                    name="children"
                    className="nice-select w-100">
                    <option>0 Children</option>
                    <option>1 Children</option>
                    <option>2 Children</option>
                    <option>3 Children</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="checkout-button mb-4 mb-xxl-0">
                  <button type="submit">
                    <span className="theme-btn-eight">
                      <span className="royle-btn__text">
                        Check Availability
                      </span>
                      <span className="royle-btn__hover royle-btn__hover--1"></span>
                      <span className="royle-btn__hover royle-btn__hover--2"></span>
                      <span className="royle-btn__hover royle-btn__hover--3"></span>
                      <span className="royle-btn__hover royle-btn__hover--4"></span>
                      <span className="royle-btn__hover royle-btn__hover--5"></span>
                    </span>
                    <span className="theme-btn-eight arrow-icon">
                      <span className="royle-btn__text">
                        <i className="lnr-icon-arrow-right"></i>
                      </span>
                      <span className="royle-btn__hover royle-btn__hover--1"></span>
                      <span className="royle-btn__hover royle-btn__hover--2"></span>
                      <span className="royle-btn__hover royle-btn__hover--3"></span>
                      <span className="royle-btn__hover royle-btn__hover--4"></span>
                      <span className="royle-btn__hover royle-btn__hover--5"></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutAreaMountain;