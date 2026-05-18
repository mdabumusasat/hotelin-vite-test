import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import ModalVideo from 'react-modal-video';
import bg1 from "../../assets/images/resort/banner/banner-bg1.jpg";
import bg2 from "../../assets/images/resort/banner/banner-bg2.jpg";
import bg3 from "../../assets/images/resort/banner/banner-bg3.jpg";
import heroImg from "../../assets/images/resort/banner/banner-image.jpg";

const bannerSlides = [
  {
    id: 1,
    bgImage: bg1,
    heroImage: heroImg,
    ratingText: "5 Star resort in the South",
    title: "Pure Luxury Hotel in the South",
    description:
      "Enjoy a seamless blend of sophistication, relaxation, and accessibility at Royle. Located in central Brooklyn, our hotel opens the door to a remarkable visit.",
  },
  {
    id: 2,
    bgImage: bg2,
    heroImage: heroImg,
    ratingText: "5 Star resort in the South",
    title: "Pure Luxury Hotel in the South",
    description:
      "Enjoy a seamless blend of sophistication, relaxation, and accessibility at Royle. Located in central Brooklyn, our hotel opens the door to a remarkable visit.",
  },
  {
    id: 3,
    bgImage: bg3,
    heroImage: heroImg,
    ratingText: "5 Star resort in the South",
    title: "Pure Luxury Hotel in the South",
    description:
      "Enjoy a seamless blend of sophistication, relaxation, and accessibility at Royle. Located in central Brooklyn, our hotel opens the door to a remarkable visit.",
  },
];

export default function BannerResort() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="banner-area-resort">
      <div className="banner-wrapper">
        <Swiper
          modules={[Autoplay, EffectFade]}
          slidesPerView={1}
          loop={true}
          speed={1500}
          effect="fade"
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
        >
          {bannerSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="banner-height">

                {/* Background */}
                <div
                  className="banner-bg"
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                />

                <div className="container">
                  <div className="row align-items-center">

                    {/* Left Content */}
                    <div className="col-xl-7">
                      <div className="banner-content position-relative z-3">

                        {/* Rating */}
                        <div className="rating">
                          <div className="banner-star-rating">
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className="fa-sharp fa-solid fa-star-sharp"
                              />
                            ))}
                          </div>
                          <p className="rating-txt">{slide.ratingText}</p>
                        </div>

                        {/* Title */}
                        <h1 className="banner-title">{slide.title}</h1>

                        {/* Description */}
                        <p className="banner-paragraph">
                          {slide.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Content */}
                    <div className="col-xl-5">
                      <div className="banner-right-column">

                        {/* Video */}
                        <div className="banner-play-button position-relative z-2">
                          <a
                            onClick={() => setOpen(true)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="play-now-two"
                          >
                            <i className="fa-solid fa-play"></i>
                            <span className="ripple"></span>
                          </a>

                          <p className="text">
                            <Link
                              to="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Watch Resort
                            </Link>
                          </p>
                        </div>

                        {/* Hero Image */}
                        <div className="banner-hero">
                          <img
                            src={slide.heroImage}
                            alt="Resort Banner"
                            className="w-100"
                          />
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
    </>
  );
}