import React from "react";
import { Link } from "react-router-dom";
import birdsShape from "../../assets/images/mountain/about/birds.png";
import lineImage from "../../assets/images/mountain/line.png";
import flowerShape from "../../assets/images/mountain/about/flower.png";
import aboutImage from "../../assets/images/mountain/about/about-01.png";
import vectorShape from "../../assets/images/mountain/about/vector-shape.png";

const AboutSectionMountain = () => {
  return (
    <section className="about-section-mountain fix section-padding pb-0">
      <div className="birds-shape">
        <img src={birdsShape} alt="Birds Shape" />
      </div>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-xxl-7">
            <div className="about-content">
              <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                <span className="line">
                  <img src={lineImage} alt="Decorative Line" />
                </span>
                Welcome to <br />
                Royle Hotel & Resort.
              </h2>
              <p className="about-text">
                Welcome to Royle Hotel & Resort. A luxurious 5-star retreat
                located in the vibrant paradise. Our stunning resort combines
                modern luxury with the island&apos;s rich culture and natural
                beauty.
              </p>
              <Link
                to="/"
                className="theme-btn-eight theme-btn2">
                <span className="royle-btn__text">
                  Hotel Booking
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="22"
                    viewBox="0 0 30 22"
                    fill="none"
                  >
                    <path
                      d="M18.8047 1L28.6931 11L18.8047 21"
                      stroke="#E0EEEE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 10.9971L28.417 10.9971"
                      stroke="#E0EEEE"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="royle-btn__hover royle-btn__hover--1"></span>
                <span className="royle-btn__hover royle-btn__hover--2"></span>
                <span className="royle-btn__hover royle-btn__hover--3"></span>
                <span className="royle-btn__hover royle-btn__hover--4"></span>
                <span className="royle-btn__hover royle-btn__hover--5"></span>
              </Link>
            </div>
          </div>
          <div className="col-xxl-5">
            <div className="about-image-items">
              <div className="flower-shape">
                <img src={flowerShape} alt="Flower Shape" />
              </div>
              <div className="about-image">
                <img
                  src={aboutImage}
                  alt="About Royle Hotel & Resort"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vector Shape */}
      <div className="vec-shape">
        <img src={vectorShape} alt="Vector Shape" />
      </div>
    </section>
  );
};

export default AboutSectionMountain;