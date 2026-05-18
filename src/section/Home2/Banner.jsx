import React from "react";
import { Link } from "react-router-dom";
import lineImage from "../../assets/images/mountain/line.png";
import mountainVideo from "../../assets/images/mountain/video-moutain-layout.mp4";

const HeroSectionMountain = () => {
  return (
    <>
      {/* Hero Section Start */}
      <section className="hero-section hero-1-mountain fix">
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-xl-7">
              <div className="hero-content">
                <h1 className="title">
                  <span className="line">
                    <img
                      src={lineImage}
                      alt="Decorative line"
                    />
                  </span>
                  <span className="color">Royle</span> <br />
                  Unlock Your <br />
                  Best Stays.
                </h1>

                <div className="hero-button">
                  <Link
                    to="/"
                    className="theme-btn-eight d-grid"
                  >
                    <span className="royle-btn__text d-flex justify-content-between">
                      Hotel Booking{" "}
                      <i className="lnr-icon-arrow-right"></i>
                    </span>

                    <span className="royle-btn__hover royle-btn__hover--1"></span>
                    <span className="royle-btn__hover royle-btn__hover--2"></span>
                    <span className="royle-btn__hover royle-btn__hover--3"></span>
                    <span className="royle-btn__hover royle-btn__hover--4"></span>
                    <span className="royle-btn__hover royle-btn__hover--5"></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Video Section */}
            <div className="col-xl-5">
              <div className="hero-items">
                <div className="hero-image banner-section-3__video pinned-3">
                  <video
                    id="myImage"
                    className="video"
                    src={mountainVideo}
                    muted
                    autoPlay
                    loop
                    playsInline
                  />
                </div>

                <div className="text">
                  From logo design to digital experiences, we help brands stand
                  out in a crowded world. Our design studio thrives on fresh
                  ideas, clean aesthetics, and purposeful design.
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Down */}
          <div id="scrollDown" className="scroll-down">
            <div className="arrow-icon">
              <i className="lnr-icon-arrow-down"></i>
            </div>
            <p>[ SCROLL ]</p>
          </div>
        </div>
      </section>

      {/* Video Wrapper */}
      <div className="banner-section-3__video__wrapper"></div>
      {/* Hero Section End */}
    </>
  );
};

export default HeroSectionMountain;