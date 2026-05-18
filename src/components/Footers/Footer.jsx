import React from "react";
import { Link } from "react-router-dom";
import FooterImage1 from "../../assets/images/logo.png";

const Footer = () => {

    const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="main-footer footer-style-one">
      <div className="wrapper">
        <div className="container">
          {/* Widgets Section */}
          <div className="widgets-section">
            <div className="row">
              {/* Footer Column */}
              <div className="footer-column col-xl-5 col-lg-4 col-sm-6">
                <div className="footer-widget">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src={FooterImage1}
                        alt="logo"
                      />
                    </Link>
                  </div>

                  <div className="widget-content">
                    <div className="text mb-0">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humor, or randomized words which
                      don&apos;t look even slightly believable.
                    </div>
                  </div>
                </div>

                <div className="footer-widget widget-social">
                  <div className="widget-content mt-40">
                    <ul className="social-icon">
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-linkedin"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-whatsapp"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer Column */}
              <div className="footer-column col-xl-2 col-lg-3 col-sm-6">
                <div className="footer-widget links-widget">
                  <h4 className="widget-title">Quick links</h4>

                  <div className="widget-content ml-20">
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

              {/* Footer Column */}
              <div className="footer-column col-xl-2 col-lg-2 col-sm-6">
                <div className="footer-widget links-widget">
                  <h4 className="widget-title">Support</h4>

                  <div className="widget-content ml-20">
                    <ul className="user-links">
                      <li>
                        <Link to="/style-guide">
                          Style guide
                        </Link>
                      </li>

                      <li>
                        <Link to="/">
                          License
                        </Link>
                      </li>

                      <li>
                        <Link to="/">
                          Changelog
                        </Link>
                      </li>

                      <li>
                        <Link to="/">
                          404 Error
                        </Link>
                      </li>

                      <li>
                        <Link to="/">
                          Changelog
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer Column */}
              <div className="footer-column col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget info-widget">
                  <h4 className="widget-title">Contact</h4>

                  <div className="widget-content">
                    <div className="contact-list">
                      <div className="inner">
                        <div className="list-info">
                          <a href="tel:0002220000">
                            <i className="fa-regular fa-phone-volume"></i>
                            {" "}+44828 123 4566
                          </a>
                        </div>

                        <div className="list-info">
                          <i className="fa-light fa-location-dot"></i>
                          {" "}410 Sandtown, California
                          <br />
                          94001, USA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="row">
              <div className="col-xl-5 col-lg-4">
                <div className="footer-bottom-widget">
                  <div className="footer-bottom-widget-text copyright-text text-center text-lg-start">
                    © 2026 All Rights Reserved
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4">
                <div className="footer-bottom-widget">
                  <div className="footer-bottom-widget-text">
                    Created by kodesolution
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4">
                <div className="footer-bottom-widget">
                  <div className="footer-bottom-widget-text back-to-top text-center text-lg-end">
                    <button
                      id="back_to_top"
                      type="button"
                      className="back-to-top-btn"
                      onClick={scrollToTop}
                      aria-label="Back to top"
                    >
                    <span>
                        <i className="fa-regular fa-arrow-up"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;