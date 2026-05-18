import { Link } from "react-router-dom";
import React from 'react';
import ErrorImage01 from "../assets/images/resource/404.jpg";

const Error = () => {
    return (
        <>
  <section className="">
    <div className="auto-container pt-70 pb-100">
      <div className="row">
        <div className="col-xl-12">
          <div className="error-page__inner">
            <div className="error-page__title-box">
              <img src={ErrorImage01} alt="" className="error-page__title"/>
              <div className="h3 error-page__sub-title mt-50">Page not found!</div>
            </div>
            <p className="error-page__text">Sorry we can't find that page! The page you are looking <br/> for
              was never existed.</p>
            <form className="error-page__form" role="search" aria-label="Search Form">
              <div className="error-page__form-input">
                <label className="visually-hidden">Search</label>
                <input type="search" id="error-search" name="s" placeholder="Search here" required aria-required="true"/>
                <button type="submit" aria-label="Submit Search">
                  <i className="lnr lnr-icon-magnifier" aria-hidden="true"></i>
                </button>
              </div>
            </form>
            <Link to="/" className="theme-btn btn-style-one shop-now"><span className="btn-text">Back to Home</span></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    );
};

export default Error;