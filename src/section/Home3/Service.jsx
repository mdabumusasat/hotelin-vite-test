import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import hero1 from "../../assets/images/resort/hero/hero-image1.jpg";
import hero2 from "../../assets/images/resort/hero/hero-image2.jpg";
import hero3 from "../../assets/images/resort/hero/hero-image3.jpg";
import service1 from "../../assets/images/resort/service/service-image1.jpg";
import service2 from "../../assets/images/resort/service/service-image2.jpg";
import service3 from "../../assets/images/resort/service/service-image3.jpg";
import service4 from "../../assets/images/resort/service/service-image4.jpg";

const heroSlides = [
  {
    id: 1,
    image: hero1,
  },
  {
    id: 2,
    image: hero2,
  },
  {
    id: 3,
    image: hero3,
  },
];

const services = [
  {
    id: 1,
    icon: "flaticon-bed-2",
    title: "Restaurant",
    image: service1,
  },
  {
    id: 2,
    icon: "flaticon-pool",
    title: "Swimming Pool",
    image: service2,
  },
  {
    id: 3,
    icon: "flaticon-weights",
    title: "Fitness Centre",
    image: service3,
  },
  {
    id: 4,
    icon: "flaticon-hanger",
    title: "Laundry Service",
    image: service4,
  },
];

const serviceDescription =
  "We provide professional reliable & hassle-free dry cleaning & laundry services tailored to your needs.";

export default function ServiceSectionResort() {
  const swiperRef = useRef(null);

  return (
    <section className="service-section-resort section-padding">
      <div className="container">
        <div className="slider-box">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}>
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="image">
                  <img src={slide.image} alt={`Hero ${slide.id}`} />
                </div>
                <div className="content">
                  <h3 className="title text-reveal-anim">
                    <span>In the South</span>, time lasts a long time...
                    Recharge your batteries!
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="arry-btn">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <i className="fa-light fa-angle-left"></i>
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <i className="fa-light fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className="pt-140">
          <div className="row g-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="col-lg-6 col-xl-4 col-xxl-3">
                <div className="service-block-resort tp_fade_bottom">
                  <div className="icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="title">{service.title}</h3>
                  <p className="text">{serviceDescription}</p>
                  <Link
                    to="/page-service-details"
                    className="more-btn">
                    More Details{" "}
                    <i className="fa-light fa-arrow-up-right"></i>
                  </Link>
                  <div className="image">
                    <img src={service.image} alt={service.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}