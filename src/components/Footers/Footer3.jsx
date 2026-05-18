import React from "react";
import { Link } from "react-router-dom";
import Footer3Image from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="main-footer resort-style">
      <div className="container">
        <div className="widgets-section">
          <div className="row">
            <div className="footer-column left-column col-lg-4 col-sm-8">
              <div className="footer-widget about-widget wow fadeInLeft">
                <div className="widget-content">
                  <div className="logo-box mb-10">
                    <Link className="logo" to="/">
                      <img src={Footer3Image} alt="Logo" />
                    </Link>
                  </div>
                  <p className="text">
                    Explore with me—feel the world come alive.
                  </p>
                </div>
              </div>
              <div
                className="footer-widget news-widget wow fadeInLeft"
                data-wow-delay="400ms">
                <div className="subscribe-form-three">
                  <form method="post" action="#">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="email"
                        placeholder="Your Email....."
                        required
                      />
                      <button className="btn" type="button">
                        <i className="fa-light fa-arrow-up-right"></i>
                      </button>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="privacyPolicy"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="privacyPolicy">
                        I Accept The Privacy Policy
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="footer-column col-xl-3 col-lg-3 col-sm-4 ps-xl-5">
              <div
                className="footer-widget links-widget ps-xl-5 wow fadeInLeft"
                data-wow-delay="200ms">
                <h4 className="widget-title">Quick links</h4>
                <div className="widget-content">
                  <ul className="user-links">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/">Pages</Link>
                    </li>
                    <li>
                      <Link to="/page-about">About</Link>
                    </li>
                    <li>
                      <Link to="/">Shop</Link>
                    </li>
                    <li>
                      <Link to="/page-contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column col-lg-2 col-sm-6 ps-xl-4">
              <div
                className="footer-widget links-widget ps-xl-4 wow fadeInLeft"
                data-wow-delay="200ms">
                <h4 className="widget-title">Support</h4>
                <div className="widget-content">
                  <ul className="user-links">
                    <li>
                      <Link to="/">Style guide</Link>
                    </li>
                    <li>
                      <Link to="/">License</Link>
                    </li>
                    <li>
                      <Link to="/">Changelog</Link>
                    </li>
                    <li>
                      <Link to="/">404 Error</Link>
                    </li>
                    <li>
                      <Link to="/">Changelog</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column col-xl-3 col-lg-3 col-sm-6">
              <div
                className="footer-widget info-widget ps-xxl-5 ms-xxl-5 ps-0 mb-30 wow fadeInLeft"
                data-wow-delay="300ms">
                <h4 className="widget-title">Contact Us</h4>
                <div className="widget-content">
                  <div className="contact-list">
                    <div className="inner">
                      <div className="list-info">
                        <i className="fa-light fa-location-dot flex-shrink-0"></i>
                        16958 CA-58, Mojave, CA 93501 United States
                      </div>
                      <div className="list-info">
                        <i className="fa-light fa-envelope-open-text"></i>
                        (123) 587 - 789 - 258
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="inner-container">
            <p className="copyright-text">
              Copyright © 2026 All Rights Reserved
            </p>
            <ul className="d-flex align-items-center gap-2">
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/">Term of Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;