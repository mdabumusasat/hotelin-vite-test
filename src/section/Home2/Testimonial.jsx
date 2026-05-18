import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ModalVideo from "react-modal-video";
import "swiper/css";
import "swiper/css/navigation";
import leftShape from "../../assets/images/mountain/testimonial/left-shape.png";
import birdShape from "../../assets/images/mountain/testimonial/bird-shape.png";
import lineImage from "../../assets/images/mountain/line.png";
import testimonialImage1 from "../../assets/images/mountain/testimonial/testimonial-image.jpg";
import testimonialImage2 from "../../assets/images/mountain/testimonial/testimonial-image-2.jpg";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    image: testimonialImage1,
    name: "Smith Couples",
    designation: "Business Man",
    text: "We craft brand identities with precision & creativity. Our Brand Guidelines ensure consistency, clarity, and impact across all touchpoints, helping businesses build a strong, recognizable presence.",
  },
  {
    id: 2,
    image: testimonialImage2,
    name: "Devid Couples",
    designation: "Corporate Man",
    text: "We craft brand identities with precision & creativity. Our Brand Guidelines ensure consistency, clarity, and impact across all touchpoints, helping businesses build a strong, recognizable presence.",
  },
  {
    id: 3,
    image: testimonialImage1,
    name: "Smith Couples",
    designation: "Business Man",
    text: "We craft brand identities with precision & creativity. Our Brand Guidelines ensure consistency, clarity, and impact across all touchpoints, helping businesses build a strong, recognizable presence.",
  },
  {
    id: 4,
    image: testimonialImage2,
    name: "Devid Couples",
    designation: "Corporate Man",
    text: "We craft brand identities with precision & creativity. Our Brand Guidelines ensure consistency, clarity, and impact across all touchpoints, helping businesses build a strong, recognizable presence.",
  },
];

const TestimonialSectionMountain = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="testimonial-section-mountain fix sec-bg section-padding">
        {/* Decorative Shapes */}
        <div className="left-shape suite-bg-shape-1">
          <img src={leftShape} alt="Left Shape" />
        </div>

        <div className="bird-shape">
          <img src={birdShape} alt="Bird Shape" />
        </div>

        <div className="container">
          <div className="testimonial-wrapper-mountain">
            {/* Section Title */}
            <div className="sec-title tx-title sec_title tz-itm-title tz-itm-anim">
              <h2 className="title">
                <span className="line">
                  <img src={lineImage} alt="Line" />
                </span>
                <span className="color-text">Satisfied</span> customers.
              </h2>
            </div>

            <div className="row g-4 justify-content-between">
              {/* Navigation Buttons */}
              <div className="col-xxl-3 order-2 order-xxl-1">
                <div className="array-button">
                  <button
                    type="button"
                    className="array-prev"
                    aria-label="Previous Slide"
                  >
                    <i className="fa-regular fa-arrow-left"></i>
                  </button>
                  <button
                    type="button"
                    className="array-next"
                    aria-label="Next Slide"
                  >
                    <i className="fa-regular fa-arrow-right"></i>
                  </button>
                </div>
              </div>

              {/* Testimonial Slider */}
              <div className="col-xxl-8 order-1 order-xxl-2">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  className="testimonial-slider-mountain"
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  speed={1000}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    prevEl: ".array-prev",
                    nextEl: ".array-next",
                  }}
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="testimonial-box-items-area">
                        {/* Thumbnail */}
                        <div className="testimonial-thumb">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                          />

                          <button
                            type="button"
                            className="play-now-two"
                            onClick={() => setOpen(true)}
                            aria-label="Play Video"
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                          >
                            <i className="fa-solid fa-play"></i>
                            <span className="ripple"></span>
                          </button>
                        </div>

                        {/* Content */}
                        <div className="testimonial-content">
                          {/* Star Rating */}
                          <div className="star">
                            {[...Array(5)].map((_, index) => (
                              <i
                                key={index}
                                className="fa-solid fa-star"
                              ></i>
                            ))}
                          </div>

                          {/* Review Text */}
                          <p className="text">{testimonial.text}</p>

                          {/* Client Info */}
                          <div className="client-info">
                            <h3 className="title">{testimonial.name}</h3>
                            <span>{testimonial.designation}</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
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

export default TestimonialSectionMountain;