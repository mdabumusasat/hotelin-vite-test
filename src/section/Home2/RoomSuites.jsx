import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import roomSuitesImage from "../../assets/images/mountain/room-suites/room-suites-01.jpg";

// Room Suites Data
const roomSuitesData = [
  {
    id: 1,
    image: roomSuitesImage,
    price: "$120/per night",
    title: "Standard Room",
  },
  {
    id: 2,
    image: roomSuitesImage,
    price: "$120/per night",
    title: "Standard Room",
  },
  {
    id: 3,
    image: roomSuitesImage,
    price: "$120/per night",
    title: "Standard Room",
  },
  {
    id: 4,
    image: roomSuitesImage,
    price: "$120/per night",
    title: "Standard Room",
  },
  {
    id: 5,
    image: roomSuitesImage,
    price: "$120/per night",
    title: "Standard Room",
  },
];

const RoomSuitesSection = () => {
  return (
    <section className="room-suites-section tp-project-5-2-area section-padding">
      <div className="container">
        <div className="room-suites-wrapper">
          <div className="room-suites-content room-suites-title-box text-center tp-project-5-2-title">
            <h3 className="room-suites-title">Rooms & Suites</h3>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            className="room-suites-slider"
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
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 1,
              },
            }}>
            {roomSuitesData.map((room) => (
              <SwiperSlide key={room.id}>
                <div className="room-suites-image-items sticky-style2">
                  <img
                    src={room.image}
                    alt={room.title}
                  />
                  <Link
                    to="/room-details"
                    className="arrow-icon"
                    aria-label={`View ${room.title}`}>
                    <i className="lnr-icon-arrow-right1"></i>
                  </Link>
                  <div className="content">
                    <p className="mb-10">{room.price}</p>
                    <h3>
                      <Link to="/room-details">
                        {room.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="array-button gap-0 justify-content-end">
            <button
              className="array-prev"
              aria-label="Previous Slide"
              type="button">
              <i className="fa-regular fa-arrow-left"></i>
            </button>
            <button
              className="array-next"
              aria-label="Next Slide"
              type="button">
              <i className="fa-regular fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomSuitesSection;