import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import lineImage from "../../assets/images/mountain/line.png";
import leftShape from "../../assets/images/mountain/news/left-shape.png";
import newsImage01 from "../../assets/images/mountain/news/news-01.jpg";
import newsImage02 from "../../assets/images/mountain/news/news-02.jpg";

// News Data
const newsData = [
  {
    id: 1,
    image: newsImage01,
    date: "May 18, 2025",
    title: "Color Psychology in Branding Choosing the Right Palette",
    link: "/news-details",
  },
  {
    id: 2,
    image: newsImage02,
    date: "June 23, 2026",
    title: "It takes a real designer to design for real women.",
    link: "/news-details",
  },
  {
    id: 3,
    image: newsImage01,
    date: "July 15, 2027",
    title: "The Future of Sustainable Design",
    link: "/news-details",
  },
];

const NewsSectionMountain = () => {
  const swiperRef = useRef(null);

  return (
    <section className="news-section-mountain fix section-padding pt-0">
      {/* Left Decorative Shape */}
      <div className="left-shape suite-bg-shape-1">
        <img src={leftShape} alt="shape" />
      </div>

      <div className="container">
        <div className="news-wrapper-mountain">
          <div className="row g-4">
            {/* Left Content */}
            <div className="col-xl-6">
              <div className="news-left-items sticky-style">
                <h2 className="sec-title font-weight-300 tx-title sec_title tz-itm-title tz-itm-anim">
                  <span className="line">
                    <img src={lineImage} alt="line" />
                  </span>{" "}
                  Get the <br />
                  Latest News.
                </h2>

                {/* Navigation Buttons */}
                <div className="array-button mt-5 mb-4 mb-xl-0">
                  <button
                    className="array-prev"
                    onClick={() => swiperRef.current?.slidePrev()}
                    aria-label="Previous Slide"
                    type="button"
                  >
                    <i className="fa-regular fa-arrow-left"></i>
                  </button>

                  <button
                    className="array-next"
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label="Next Slide"
                    type="button"
                  >
                    <i className="fa-regular fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Slider */}
            <div className="col-xl-6">
              <div className="news-right-items">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={2}
                  loop={true}
                  speed={1000}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  className="news-slider"
                >
                  {newsData.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="news-box-thumb">
                        {/* Double Images for Hover Effect */}
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-100"
                        />
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-100"
                        />

                        {/* Content */}
                        <div className="news-content">
                          <span className="date">
                            <i className="fa-regular fa-clock"></i>{" "}
                            {item.date}
                          </span>

                          <h3 className="title">
                            <Link to={item.link}>
                              {item.title}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSectionMountain;