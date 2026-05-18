import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ModalVideo from "react-modal-video";
import "swiper/css";
import "swiper/css/pagination";
import testiThumb1 from "../../assets/images/testimonial/testi-thumb1.jpg";
import testiThumb2 from "../../assets/images/testimonial/testi-thumb2.jpg";
import testiThumb3 from "../../assets/images/testimonial/testi-thumb3.jpg";
import testiAvatar1 from "../../assets/images/testimonial/testi-img1.png";
import testiAvatar2 from "../../assets/images/testimonial/testi-img2.png";
import testiAvatar3 from "../../assets/images/testimonial/testi-img3.png";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    thumb: testiThumb1,
    avatar: testiAvatar1,
    author: "Fergus Douchebag",
    designation: "CEO & Co Founder",
    text: "Studio thrives on innovation & collaboration delivering bespoke design solutions that transform brands and create lasting impressions.",
  },
  {
    id: 2,
    thumb: testiThumb2,
    avatar: testiAvatar2,
    author: "Spruce Springclean",
    designation: "UI/UX Designer",
    text: "Studio thrives on innovation & collaboration delivering bespoke design solutions that transform brands and create lasting impressions.",
  },
  {
    id: 3,
    thumb: testiThumb3,
    avatar: testiAvatar3,
    author: "Norman Gordon",
    designation: "Manager",
    text: "Studio thrives on innovation & collaboration delivering bespoke design solutions that transform brands and create lasting impressions.",
  },
  {
    id: 4,
    thumb: testiThumb1,
    avatar: testiAvatar1,
    author: "Fergus Douchebag",
    designation: "CEO & Co Founder",
    text: "Studio thrives on innovation & collaboration delivering bespoke design solutions that transform brands and create lasting impressions.",
  },
];

const TestimonialSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="testimonial-section-one">
        <div className="container-fluid gx-0">
          {/* Section Title */}
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-wrapper text-center mb-50">
                <h2 className="section-title text-reveal-anim">
                  Words From Our Customers
                </h2>
              </div>
            </div>
          </div>

          {/* Testimonial Slider */}
          <div className="row">
            <div className="col-xl-12">
              <div className="testimonial-slide-wrapper position-relative z-2">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  className="testimonial-active"
                  slidesPerView={2}
                  spaceBetween={30}
                  loop={true}
                  speed={1000}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    el: ".testi-dot",
                    clickable: true,
                  }}
                  breakpoints={{
                    365: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="testimonial-block-one">
                        {/* Thumbnail */}
                        <div className="testimonial-thumb position-relative z-1">
                          <img
                            src={item.thumb}
                            alt={item.author}
                          />

                          {/* Play Button */}
                          <div className="banner-play-button play-button">
                            <button
                              type="button"
                              className="play-now-two"
                              onClick={() => setOpen(true)}
                              aria-label="Play Video"
                            >
                              <i className="fa-solid fa-play"></i>
                              <span className="ripple"></span>
                            </button>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="content-box">
                          {/* Review Stars */}
                          <div className="review">
                            {[...Array(5)].map((_, index) => (
                              <i
                                key={index}
                                className="fa-sharp fa-solid fa-star-sharp"
                              ></i>
                            ))}
                          </div>

                          {/* Testimonial Text */}
                          <div className="testimonial-content">
                            <p className="text">{item.text}</p>

                            {/* Author Info */}
                            <div className="author-info">
                              <div className="testimonial-bio-img">
                                <img
                                  src={item.avatar}
                                  alt={item.author}
                                />
                              </div>

                              <div className="testimonial-bio-content">
                                <h6 className="author">
                                  {item.author}
                                </h6>
                                <p className="desigation">
                                  {item.designation}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Pagination Dots */}
                <div className="testi-dot text-center"></div>
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

export default TestimonialSection;