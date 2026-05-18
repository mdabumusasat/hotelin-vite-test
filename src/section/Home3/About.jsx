import React from "react";
import { Link } from "react-router-dom";
import listIcon from "../../assets/images/icons/about-list-icon.svg";
import aboutImg1 from "../../assets/images/resort/resource/about1-1.jpg";
import aboutImg2 from "../../assets/images/resort/resource/about1-2.jpg";
import aboutThumb from "../../assets/images/about/about-thumb2.jpg";
import bgShape from "../../assets/images/about/about-bg-shape.png";

// Features Data
const features = [
  "Premium Stays, Handpicked for You.",
  "Easy Cancellations & Refunds.",
  "Mobile-Friendly Booking Experience.",
];

export default function AboutResortTwo() {
  return (
    <section className="aboutresort-two-area position-relative z-1">
      <div className="container">
        <div className="outer-box">
          <div className="row align-items-center">
            <div className="col-xl-5 order-2">
              <div className="aboutresort-two-wrapper">
                <div className="section-title">
                  <h2 className="title text-reveal-anim">
                    Where Comfort Meets the Heart of the States
                  </h2>
                  <div className="text">
                    Proin urna lectus, vehicula at tincidunt gravida metus nulla
                    ullamcorper sagittis ante sed scelerisque nisi condimentum
                    eget accumsan nisi tincidunt eget.
                  </div>
                </div>
                <div className="aboutresort-two-list">
                  <ul>
                    {features.map((item, index) => (
                      <li key={index}>
                        <span>
                          <img src={listIcon} alt="icon" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="aboutresort-two-button">
                  <Link
                    to="/page-service-details"
                    className="theme-btn-six">
                    About Us
                    <i className="fa-light fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 order-xl-2">
              <div className="aboutresort-two-left">
                <div className="aboutresort-two-left-thumb">
                  <div className="image wow img-custom-anim-left">
                    <img src={aboutImg1} alt="About Resort" className="w-100" />
                  </div>
                </div>
                <div className="image wow img-custom-anim-right">
                  <div className="image mb-30 wow img-custom-anim-left">
                    <img src={aboutImg2} alt="About Resort" className="w-100" />
                  </div>
                  <div className="image wow img-custom-anim-left">
                    <img src={aboutThumb} alt="About Thumb" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutresort-two-bg-shape">
        <img
          src={bgShape}
          alt="shape"
          className="aboutresort-two-bg-shape-1"
        />
      </div>
    </section>
  );
}