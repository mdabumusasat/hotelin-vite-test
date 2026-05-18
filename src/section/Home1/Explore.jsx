import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";

// Image Imports
import exploreThumb1 from "../../assets/images/explore/explore-thumb1.jpg";
import exploreThumb2 from "../../assets/images/explore/explore-thumb2.jpg";
import exploreThumb3 from "../../assets/images/explore/explore-thumb3.jpg";

import exploreShape1 from "../../assets/images/explore/explore-shape1.png";
import exploreShape2 from "../../assets/images/explore/explore-shape2.png";

import exploreButton from "../../assets/images/icons/explore-button.svg";

import exploreIcon1 from "../../assets/images/icons/explore-icon1.svg";
import exploreIcon2 from "../../assets/images/icons/explore-icon2.svg";
import exploreIcon3 from "../../assets/images/icons/explore-icon3.svg";
import exploreIcon4 from "../../assets/images/icons/explore-icon4.svg";

// Explore Data
const exploreData = [
  {
    id: 1,
    title: "Sayeman Beach Hotel",
    image: exploreThumb1,
    reviewText: "5 (168 reviews)",
    tag: "Featured",
  },
  {
    id: 2,
    title: "Designer Sky Homes",
    image: exploreThumb2,
    reviewText: "5 (168 reviews)",
    tag: "Featured",
  },
  {
    id: 3,
    title: "Scenic View Penthouses",
    image: exploreThumb3,
    reviewText: "5 (168 reviews)",
    tag: "Featured",
  },
  {
    id: 4,
    title: "Sayeman Beach Hotel",
    image: exploreThumb1,
    reviewText: "5 (168 reviews)",
    tag: "Featured",
  },
  {
    id: 5,
    title: "Designer Sky Homes",
    image: exploreThumb2,
    reviewText: "5 (168 reviews)",
    tag: "Featured",
  },
];

// Amenities Data
const amenities = [
  {
    icon: exploreIcon1,
    text: "King Size Bed",
  },
  {
    icon: exploreIcon2,
    text: "Free Wifi",
  },
  {
    icon: exploreIcon3,
    text: "1-2 Persons",
  },
  {
    icon: exploreIcon4,
    text: "Bathtub",
  },
  {
    icon: exploreIcon2,
    text: "Free Wifi",
  },
];

const ExploreSection = () => {
  return (
    <section className="explore-area overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="section-wrapper text-center mb-50">
              <h2 className="section-title text-reveal-anim">
                Cool Hotels and Villas to Explore on Your Next Adventure
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="explore-slide-wrapper position-relative z-2">
              <Swiper
                modules={[Pagination, Autoplay]}
                className="explore-active"
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: ".explore-slide-wrapper .pagination",
                  clickable: true,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
              >
                {exploreData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="explore-box">
                      <div className="image-box">
                        {/* Main Image */}
                        <img
                          className="w-100"
                          src={item.image}
                          alt={item.title}
                        />

                        {/* Tag */}
                        <div className="tag">
                          <Link to="/room-details">{item.tag}</Link>
                        </div>

                        {/* Button */}
                        <div className="button">
                          <Link to="/room-details">
                            <img
                              src={exploreButton}
                              alt="View details"
                            />
                          </Link>
                        </div>

                        {/* Content */}
                        <div className="content-box">
                          <div className="top-area">
                            <div className="d-flex align-items-center gap-3 mb-1">
                              {/* Rating Stars */}
                              <div className="rating">
                                {[...Array(5)].map((_, index) => (
                                  <i
                                    key={index}
                                    className="fa-sharp fa-solid fa-star-sharp"
                                  ></i>
                                ))}
                              </div>

                              <h6 className="review-text mb-0">
                                {item.reviewText}
                              </h6>
                            </div>

                            {/* Title */}
                            <h4 className="title">
                              <Link to="/room-details">
                                {item.title}
                              </Link>
                            </h4>
                          </div>

                          {/* Amenities */}
                          <div className="content-bottom">
                            <div className="content-list">
                              <ul>
                                {amenities.map((amenity, index) => (
                                  <li key={index}>
                                    <span>
                                      <img
                                        src={amenity.icon}
                                        alt={amenity.text}
                                      />
                                    </span>
                                    {amenity.text}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* End Content */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination */}
              <div className="pagination text-center"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="explore-shape">
        <img
          className="shape-1"
          src={exploreShape1}
          alt="Decorative shape"
        />
        <img
          className="shape-2"
          src={exploreShape2}
          alt="Decorative shape"
        />
      </div>
    </section>
  );
};

export default ExploreSection;