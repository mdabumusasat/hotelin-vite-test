import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import destinationBg1 from "../../assets/images/destination/destination-bg1.jpg";
import destinationIcon from "../../assets/images/icons/destination-icon.svg";

const destinations = [
  {
    id: 1,
    title: "Executive Room",
    image: destinationBg1,
    details: ["2 Beds", "3 Guests", "2400 Sq Ft"],
    colClass: "col-xl-6",
  },
  {
    id: 2,
    title: "Corporate Room",
    image: destinationBg1,
    details: ["2 Beds", "3 Guests", "2400 Sq Ft"],
    colClass: "col-xl-6",
  },
  {
    id: 3,
    title: "Business Class Room",
    image: destinationBg1,
    details: ["2 Beds", "3 Guests", "2400 Sq Ft"],
    colClass: "col-xl-7",
  },
];

const DestinationSection = () => {
  return (
    <>
      {/* Destinations area start */}
      <section className="destination-area">
        <div className="destination-heading-wrap text-center">
          <h2 className="gradient-title1">Residence</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div
                className="destination-slide-wrapper position-relative z-2"
              >
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  className="destination-active"
                  slidesPerView={1}
                  loop={true}
                  speed={1000}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    prevEl: ".destination-arrow-box .slider-prev",
                    nextEl: ".destination-arrow-box .slider-next",
                  }}
                  pagination={{
                    el: ".destination-dots",
                    clickable: true,
                  }}
                >
                  {destinations.map((destination) => (
                    <SwiperSlide key={destination.id}>
                      <div
                        className="destination-bg"
                        style={{
                          backgroundImage: `url(${destination.image})`,
                        }}
                      >
                        <div className="container">
                          <div className="row align-items-end">
                            <div className={destination.colClass}>
                              <div className="destination-wrapper">
                                <h2 className="destination-title text-reveal-anim">
                                  {destination.title}
                                </h2>

                                <div className="destination-wrap">
                                  <ul>
                                    {destination.details.map(
                                      (detail, index) => (
                                        <li key={index}>
                                          <span>
                                            <img
                                              src={destinationIcon}
                                              alt="icon"
                                            />
                                          </span>
                                          {detail}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Navigation Arrows */}
                <div className="destination-arrow-box">
                  <button
                    className="slider-prev"
                    aria-label="Previous Slide"
                  >
                    <i className="fa-regular fa-arrow-left"></i>
                  </button>
                  <button
                    className="slider-next"
                    aria-label="Next Slide"
                  >
                    <i className="fa-regular fa-arrow-right"></i>
                  </button>
                </div>

                {/* Pagination Dots */}
                <div className="destination-dots text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Destinations area end */}
    </>
  );
};

export default DestinationSection;