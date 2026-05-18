import React from "react";
import { Link } from "react-router-dom";
import aboutThumb1 from "../../assets/images/about/about-thumb1.jpg";
import aboutThumb2 from "../../assets/images/about/about-thumb2.jpg";
import aboutThumb3 from "../../assets/images/about/about-thumb3.jpg";
import aboutBgShape from "../../assets/images/about/about-bg-shape.png";
import aboutListIcon from "../../assets/images/icons/about-list-icon.svg";
import buttonArrow from "../../assets/images/icons/button-arrow.svg";

const aboutFeatures = [
  "Premium Stays, Handpicked for You.",
  "Easy Cancellations & Refunds.",
  "Mobile-Friendly Booking Experience.",
];

const AboutSection = () => {
  return (
    <>
      {/* About area start */}
      <section className="about-area position-relative z-1">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Images */}
            <div className="col-xl-7">
              <div className="about-left">
                <div className="about-left-thumb">
                  <div className="image mb-30 wow img-custom-anim-left">
                    <img src={aboutThumb1} alt="Luxury hotel room" />
                  </div>
                  <div className="image wow img-custom-anim-left">
                    <img src={aboutThumb2} alt="Hotel interior" />
                  </div>
                </div>

                <div className="image wow img-custom-anim-right">
                  <img src={aboutThumb3} alt="Luxury living space" />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-xl-5">
              <div className="about-wrapper">
                <div className="section-wrapper">
                  <h2 className="section-title text-reveal-anim">
                    Luxury Living Spaces at Times Square
                  </h2>
                  <p className="section-paragraph">
                    Proin urna lectus, vehicula at tincidunt gravida metus nulla
                    ullamcorper sagittis ante sed scelerisque nisi condimentum
                    eget accumsan nisi tincidunt eget.
                  </p>
                </div>

                {/* Feature List */}
                <div className="about-list">
                  <ul>
                    {aboutFeatures.map((feature, index) => (
                      <li key={index}>
                        <span>
                          <img src={aboutListIcon} alt="Check icon" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="about-button">
                  <Link className="theme-btn-main" to="/page-about">
                    <span className="theme-btn-arrow-left theme-bg theme-color-white">
                      <img
                        className="filter-white"
                        src={buttonArrow}
                        alt="arrow"
                      />
                    </span>
                    <span className="theme-btn theme-bg theme-color-white">
                      About Us
                    </span>
                    <span className="theme-btn-arrow-right theme-bg theme-color-white">
                      <img
                        className="filter-white"
                        src={buttonArrow}
                        alt="arrow"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Shape */}
        <div className="about-bg-shape">
          <img
            className="about-bg-shape-1"
            src={aboutBgShape}
            alt="Decorative shape"
          />
        </div>
      </section>
      {/* About area end */}
    </>
  );
};

export default AboutSection;