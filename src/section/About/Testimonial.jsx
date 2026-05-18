import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ModalVideo from "react-modal-video";
import "swiper/css";
import "swiper/css/pagination";
import testiThumb1 from "../../assets/images/testimonial/testi-thumb1.jpg";
import testiThumb2 from "../../assets/images/testimonial/testi-thumb2.jpg";
import testiThumb3 from "../../assets/images/testimonial/testi-thumb3.jpg";
import testiImg1 from "../../assets/images/testimonial/testi-img1.png";
import testiImg2 from "../../assets/images/testimonial/testi-img2.png";
import testiImg3 from "../../assets/images/testimonial/testi-img3.png";

const testimonials = [
  {
    id: 1,
    thumb: testiThumb1,
    avatar: testiImg1,
    author: "Fergus Douchebag",
    designation: "CEO & Co Founder",
    text: "Studio thrives on innovation & collaboration delivering bespoke design solutions that transform brands and create lasting impressions.",
  },
  {
    id: 2,
    thumb: testiThumb2,
    avatar: testiImg2,
    author: "Spruce Springclean",
    designation: "UI/UX Designer",
    text: "Studio thrives on innovation & collaboration delivering bespoke design solutions that transform brands and create lasting impressions.",
  },
  {
    id: 3,
    thumb: testiThumb3,
    avatar: testiImg3,
    author: "Norman Gordon",
    designation: "Manager",
    text: "Studio thrives on innovation & collaboration delivering bespoke design solutions that transform brands and create lasting impressions.",
  },
  {
    id: 4,
    thumb: testiThumb1,
    avatar: testiImg1,
    author: "Fergus Douchebag",
    designation: "CEO & Co Founder",
    text: "Studio thrives on innovation & collaboration delivering bespoke design solutions that transform brands and create lasting impressions.",
  },
];

const TestimonialSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="testimonial-section-one pt-120 pb-120">
        <div className="container-fluid gx-0">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-wrapper text-center mb-50">
                <h2 className="section-title text-reveal-anim">
                  Words From Our Customers
                </h2>
              </div>
            </div>
          </div>
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
                  }}>
                  {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="testimonial-block-one">
                        <div className="testimonial-thumb position-relative z-1">
                          <img src={item.thumb} alt={item.author} />
                          <div className="banner-play-button play-button">
                            <button
                              type="button"
                              className="play-now-two border-0 bg-transparent p-0"
                              onClick={() => setOpen(true)}>
                              <i className="fa-solid fa-play"></i>
                              <span className="ripple"></span>
                            </button>
                          </div>
                        </div>
                        <div className="content-box">
                          <div className="review">
                            {[...Array(5)].map((_, index) => (
                              <i
                                key={index}
                                className="fa-sharp fa-solid fa-star-sharp"
                              ></i>
                            ))}
                          </div>

                          <div className="testimonial-content">
                            <p className="text">{item.text}</p>

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

                <div className="testi-dot text-center"></div>
              </div>
            </div>
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

export default TestimonialSection;