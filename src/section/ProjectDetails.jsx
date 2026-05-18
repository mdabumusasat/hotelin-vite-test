import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import suiteBg1 from "../assets/images/suite/suite-bg.jpg";
import suiteBg2 from "../assets/images/suite/suite-bg2.jpg";
import suiteHeadingShape from "../assets/images/suite/suite-heading-shape.png";
import userIcon from "../assets/images/icons/user.svg";
import feetIcon from "../assets/images/icons/feet.svg";
import buttonArrow from "../assets/images/icons/button-arrow.svg";

const suites = [
  {
    id: 1,
    image: suiteBg1,
    tag: "Accommodation",
    title: "Presidential Suite",
    guests: "2 Guests",
    size: "37 Feet Size",
    description:
      "We specialize in delivering innovative and reliable hospitality solutions. From concept to completion, we collaborate to create exceptional residential and resort experiences.",
    price: "$259",
    link: "/room-details",
  },
  {
    id: 2,
    image: suiteBg2,
    tag: "Housing",
    title: "Ambassador Suite",
    guests: "2 Guests",
    size: "37 Feet Size",
    description:
      "We specialize in delivering innovative and reliable hospitality solutions. From concept to completion, we collaborate to create exceptional residential and resort experiences.",
    price: "$499",
    link: "/room-details",
  },
];

const SuiteArea = () => {
  return (
    <section className="suite-area position-relative z-1 mt-0">
      <div className="container-fluid gx-0">
        <div className="row">
          <div className="col-xl-12">
            <div className="suite-slide-wrapper position-relative z-2">
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: ".slider-prev",
                  nextEl: ".slider-next",
                }}
                className="suite-active"
              >
                {suites.map((suite) => (
                  <SwiperSlide key={suite.id}>
                    <div className="container-fluid">
                      <div className="row align-items-center gx-0">
                        {/* Left Image */}
                        <div className="col-xl-6">
                          <div className="suite-bg">
                            <img
                              className="w-100"
                              src={suite.image}
                              alt={suite.title}
                            />
                            <div className="suite-tag">
                              <span>{suite.tag}</span>
                            </div>
                          </div>
                        </div>

                        {/* Right Content */}
                        <div className="col-xl-6">
                          <div className="suite-wrapper">
                            <div className="suite-wrap">
                              {/* Heading */}
                              <div className="suite-heading-wrap position-relative z-1">
                                <h2 className="common-heading">Suite</h2>
                                <div className="heading-shape">
                                  <img
                                    src={suiteHeadingShape}
                                    alt="Suite Heading Shape"
                                  />
                                </div>
                              </div>

                              {/* Title */}
                              <h4 className="title char-animation">
                                {suite.title}
                              </h4>

                              {/* Info */}
                              <div className="d-flex gap-3 flex-wrap mb-50">
                                <div className="item">
                                  <div className="text">
                                    <span>
                                      <img src={userIcon} alt="Guests" />
                                    </span>{" "}
                                    {suite.guests}
                                  </div>
                                </div>

                                <div className="item">
                                  <div className="text">
                                    <span>
                                      <img src={feetIcon} alt="Room Size" />
                                    </span>{" "}
                                    {suite.size}
                                  </div>
                                </div>
                              </div>

                              {/* Description */}
                              <p className="text2">{suite.description}</p>

                              {/* Bottom Section */}
                              <div className="bottom-wrap">
                                {/* Price */}
                                <div className="suite-price">
                                  <p className="text">From</p>
                                  <h6 className="subtitle">{suite.price}</h6>
                                </div>

                                {/* Button */}
                                <div className="suite-button">
                                  <Link
                                    to={suite.link}
                                    className="theme-btn-main"
                                  >
                                    <span className="theme-btn-arrow-left theme-bg theme-color-white">
                                      <img
                                        className="filter-white"
                                        src={buttonArrow}
                                        alt="Arrow"
                                      />
                                    </span>

                                    <span className="theme-btn theme-bg theme-color-white">
                                      View Details
                                    </span>

                                    <span className="theme-btn-arrow-right theme-bg theme-color-white">
                                      <img
                                        className="filter-white"
                                        src={buttonArrow}
                                        alt="Arrow"
                                      />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Right Content */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Arrows */}
              <div className="arrow-box">
                <button
                  type="button"
                  className="slider-prev"
                  aria-label="Previous Slide"
                >
                  <i className="fa-regular fa-arrow-left"></i>
                </button>

                <button
                  type="button"
                  className="slider-next"
                  aria-label="Next Slide"
                >
                  <i className="fa-regular fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuiteArea;