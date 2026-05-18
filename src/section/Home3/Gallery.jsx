import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/images/resource/resort-gallery-1.jpg";
import img2 from "../../assets/images/resource/resort-gallery-2.jpg";
import img3 from "../../assets/images/resource/resort-gallery-3.jpg";
import img4 from "../../assets/images/resource/resort-gallery-4.jpg";

const galleryItems = [
  { id: 1, image: img1, bounce: false },
  { id: 2, image: img2, bounce: true },
  { id: 3, image: img3, bounce: false },
  { id: 4, image: img4, bounce: true },
  { id: 5, image: img1, bounce: false },
  { id: 6, image: img2, bounce: true },
];

export default function GallerySectionResort() {
  const swiperRef = useRef(null);

  return (
    <section className="gallery-section resort-style">
      <div className="container max-1440">
        <div className="sec-title text-center mb-60">
          <h2 className="title text-reveal-anim">
            Discover Our Gallery
          </h2>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          speed={1000}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 5 },
          }}>
          {galleryItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="resort-gallery-item">
                <Link to={item.image} className="lightbox-image">
                  <img
                    src={item.image}
                    alt={`Gallery ${item.id}`}
                    className={`w-100 ${item.bounce ? "bounce-y" : ""}`}
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
              <div className="slider-arrow-box">
                <button
                  type="button"
                  className="swiper-button-next"
                  onClick={() => swiperRef.current?.slideNext()}
                  aria-label="Next Slide"
                  
                >
                  <i className="fa-light fa-arrow-left"></i>
                </button>
                <button
                  type="button"
                  className="swiper-button-prev"
                  onClick={() => swiperRef.current?.slidePrev()}
                  aria-label="Previous Slide"
                >
                  <i className="fa-light fa-arrow-right"></i>
                </button>
              </div>
        </Swiper>
      </div>
    </section>
  );
}