import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import roomImg from "../../assets/images/resort/discover/discover-image1.jpg";
import roomShape from "../../assets/images/resort/discover/discover-shape.png";

const roomSlides = [
  {
    id: 1,
    image: roomImg,
    shape: roomShape,
    price: "$300",
    title: "Executive Room..",
    beds: "2 Beds",
    baths: "3 Baths",
    size: "2400 Sq Ft",
    link: "/page-service-details",
  },
  {
    id: 2,
    image: roomImg,
    shape: roomShape,
    price: "$300",
    title: "Executive Room..",
    beds: "2 Beds",
    baths: "3 Baths",
    size: "2400 Sq Ft",
    link: "/page-service-details",
  },
  {
    id: 3,
    image: roomImg,
    shape: roomShape,
    price: "$300",
    title: "Executive Room..",
    beds: "2 Beds",
    baths: "3 Baths",
    size: "2400 Sq Ft",
    link: "/page-service-details",
  },
];

export default function DiscoverSectionResort() {
  const swiperRef = useRef(null);

  return (
    <section className="discover-section-resort">
      <div className="container">

        {/* Title */}
        <div className="sec-title text-center mb-60">
          <h2 className="title text-reveal-anim">
            Discover our rooms
          </h2>
        </div>

        <div className="outer-box">
          <div className="row">
            <div className="col-lg-12">

              <div className="discover-slider-rooms-wrapper position-relative">

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
                  }}
                >
                  {roomSlides.map((room) => (
                    <SwiperSlide key={room.id}>
                      <div className="row g-0 align-items-center">

                        {/* Image Side */}
                        <div className="col-xl-8">
                          <div className="dicover-slider-resort">
                            <div className="image fix">
                              <img
                                src={room.image}
                                alt={room.title}
                                className="w-100"
                              />
                              <h3 className="dolar">{room.price}</h3>
                            </div>
                          </div>
                        </div>

                        {/* Content Side */}
                        <div className="col-xl-4">
                          <div className="discover-room-slider-content">

                            <div className="discover-block-resort">

                              <div className="shape">
                                <img src={room.shape} alt="shape" />
                              </div>

                              <ul>
                                <li>
                                  <i className="flaticon-bed-2"></i>
                                  <span>{room.beds}</span>
                                </li>
                                <li>
                                  <i className="flaticon-swimming-pool-1"></i>
                                  <span>{room.baths}</span>
                                </li>
                                <li>
                                  <i className="flaticon-sofa-3"></i>
                                  <span>{room.size}</span>
                                </li>
                              </ul>

                              <h2 className="title text-reveal-anim">
                                {room.title}
                              </h2>

                              <Link to={room.link} className="more-btn">
                                More Details{" "}
                                <i className="fa-light fa-arrow-up-right"></i>
                              </Link>

                            </div>
                          </div>
                        </div>

                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Arrows */}
                <div className="slider-arry">
                  <button
                    type="button"
                    onClick={() => swiperRef.current?.slidePrev()}
                    aria-label="Previous Slide"
                  >
                    <i className="fa-light fa-arrow-left"></i>
                  </button>

                  <button
                    type="button"
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label="Next Slide"
                  >
                    <i className="fa-light fa-arrow-right"></i>
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}