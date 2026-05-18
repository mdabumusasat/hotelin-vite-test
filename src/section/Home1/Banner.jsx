import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import ModalVideo from "react-modal-video";
import bannerBg1 from "../../assets/images/banner/banner-bg1.jpg";
import bannerBg2 from "../../assets/images/banner/banner-bg2.jpg";
import bannerBg3 from "../../assets/images/banner/banner-bg3.jpg";
import buttonArrow from "../../assets/images/icons/button-arrow.svg";

const bannerSlides = [
  {
    id: 1,
    background: bannerBg1,
    title: (
      <>
        Boutique Seaside
        <br />
        Island Escape.
      </>
    ),
    description:
      "Enjoy a seamless blend of sophistication, relaxation, and accessibility at Royle. Located in central Brooklyn, our hotel opens the door to a truly remarkable visit.",
  },
  {
    id: 2,
    background: bannerBg2,
    title: "Luxury Seaside Escape",
    description:
      "Enjoy a seamless blend of sophistication, relaxation, and accessibility at Royle. Located in central Brooklyn, our hotel opens the door to a truly remarkable visit.",
  },
  {
    id: 3,
    background: bannerBg3,
    title: "Private Seaside Sanctuary",
    description:
      "Enjoy a seamless blend of sophistication, relaxation, and accessibility at Royle. Located in central Brooklyn, our hotel opens the door to a truly remarkable visit.",
  },
];

const BannerSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="banner-area p-relative overflow-hidden">
        <div className="banner-wrapper p-relative">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            className="banner-active"
            slidesPerView={1}
            loop={true}
            effect="fade"
            speed={1200}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".slider-prev",
              nextEl: ".slider-next",
            }}>
            {bannerSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="banner-height">
                  <div
                    className="banner-bg"
                    style={{
                      backgroundImage: `url(${slide.background})`,
                    }}
                  ></div>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-xl-9">
                        <div className="banner-content position-relative z-3">
                          <div className="banner-title-box">
                            <div className="banner-star-rating">
                              {[...Array(5)].map((_, index) => (
                                <i
                                  key={index}
                                  className="fa-sharp fa-solid fa-star-sharp"
                                ></i>
                              ))}
                            </div>
                            <h1 className="banner-title text-reveal-anim">
                              {slide.title}
                            </h1>
                            <p className="banner-paragraph">
                              {slide.description}
                            </p>
                          </div>
                          <div className="banner-btn-box">
                            <Link
                              className="theme-btn-main"
                              to="/page-rooms-suite">
                              <span className="theme-btn-arrow-left">
                                <img src={buttonArrow} alt="arrow" />
                              </span>
                              <span className="theme-btn">
                                Discover Rooms
                              </span>
                              <span className="theme-btn-arrow-right">
                                <img src={buttonArrow} alt="arrow" />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Video Play Button */}
                      <div className="col-xl-3">
                        <div className="banner-play-button position-relative z-2">
                          <a className="play-now-two" onClick={() => setOpen(true)} data-fancybox="gallery" data-caption="">
                            <i className="fa-solid fa-play"></i>
                            <span className="ripple"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="banner-arrow-box">
            <button className="slider-prev" aria-label="Previous Slide">
              <i className="fa-regular fa-arrow-left"></i>
            </button>

            <button className="slider-next" aria-label="Next Slide">
              <i className="fa-regular fa-arrow-right"></i>
            </button>
          </div>

          {/* Common Heading */}
          <div className="common-heading-wrap text-center">
            <h2 id="common-heading" className="common-heading">
              Luxury Hotel
            </h2>
          </div>
        </div>
      </section>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Fvae8nxzVz4"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default BannerSection;