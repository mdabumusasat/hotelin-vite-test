import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import room1 from "../assets/images/resource/room-1.jpg";
import room2 from "../assets/images/resource/room-2.jpg";
import room4 from "../assets/images/resource/room-4.jpg";
import newsInfo1 from "../assets/images/resource/news-info-1.jpg";
import newsInfo2 from "../assets/images/resource/news-info-2.jpg";
const SLIDER_IMAGES = [room1, room2, room4, room2];

const FACILITIES = [
  { icon: "far fa-air-conditioner", title: "Air Conditionar" },
  { icon: "fas fa-swimming-pool", title: "Swiming Pool" },
  { icon: "fas fa-dumbbell", title: "Gymnasium" },
  { icon: "fas fa-parking-circle", title: "Parking" },
  { icon: "fas fa-shield-check", title: "Security" },
  { icon: "fas fa-child", title: "Playground" },
];

const EXTRA_SERVICES = [
  { name: "laundry", label: "Laundry" },
  { name: "CarRental", label: "Car Rental" },
  { name: "Breakfast", label: "Breakfast" },
  { name: "SeaView", label: "Sea View" },
  { name: "Wifi", label: "Wifi" },
];

const COMPARE_ROOMS = [
  {
    image: newsInfo1,
    name: "Economy Room",
    price: "$175/Night",
  },
  {
    image: newsInfo2,
    name: "Deluxe Room",
    price: "$250",
  },
  {
    image: newsInfo1,
    name: "Super Deluxe Room",
    price: "$320",
  },
];

const RoomDetailsSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="blog-details pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7 product-details rd-page">
            <div className="room-details__left">
              <div className="room-heading">
                <h3 className="title mb-4">Double Room</h3>
                <div className="text">
                  40-inch LED TV / Mini bar / Non-smoking / USB charging
                </div>
                <ul className="kodelisting-room-basic-info g-3">
                  <li>
                    <i className="fa-classic fat fa-users" />
                    <span className="csrbi-text">2 Guests</span>
                  </li>
                  <li>
                    <i className="fa-classic fa-thin fa-bed-front fa-fw" />
                    <span className="csrbi-text">2 Bed</span>
                  </li>
                  <li>
                    <i className="fa-classic fa-thin fa-bath fa-fw" />
                    <span className="csrbi-text">2 Bathroom</span>
                  </li>
                </ul>
              </div>
              <div className="bxslider">
                <Swiper
                  modules={[Thumbs]}
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  className="room-details-slider"
                >
                  {SLIDER_IMAGES.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="slider-content">
                        <figure className="image-box">
                          <Link
                            to={image}
                            className="lightbox-image"
                            data-fancybox="gallery"
                          >
                            <img
                              src={image}
                              alt={`Room view ${index + 1}`}
                              className="w-100"
                            />
                          </Link>
                        </figure>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Thumbnail Slider */}
                <div className="slider-pager">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    modules={[Thumbs, FreeMode]}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    breakpoints={{
                      0: {
                        slidesPerView: 2,
                      },
                      576: {
                        slidesPerView: 3,
                      },
                      768: {
                        slidesPerView: 4,
                      },
                    }}
                    className="room-details-thumbs">
                    {SLIDER_IMAGES.map((thumb, index) => (
                      <SwiperSlide key={index} className="swiper-slide2">
                        <ul className="thumb-box">
                          <li>
                            <figure className="mb-0">
                              <img
                                src={thumb}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-100"
                                style={{ cursor: "pointer" }}
                              />
                            </figure>
                          </li>
                        </ul>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="bx-wrapper">
                <h3>Description of the Room</h3>
                <p className="text">
                  Unwind in our spacious Hoteler King Room, thoughtfully
                  designed for comfort and relaxation. Featuring a plush
                  king-sized bed, elegant décor, and modern amenities, this room
                  offers the perfect retreat after a day of travel or
                  exploration.
                </p>
                <div className="row justify-content-center">
                  <div className="col-xl-12">
                    <div className="room-details__content-right mb-40 mt-20">
                      <div className="room-details__details-box">
                        <div className="row">
                          <div className="col-6 col-md-3">
                            <p className="text mb-0">Room Size</p>
                            <h6>600Sq</h6>
                          </div>
                          <div className="col-6 col-md-3">
                            <p className="text mb-0">Rooms Bed</p>
                            <h6>2 Single Bed</h6>
                          </div>
                          <div className="col-6 col-md-3">
                            <p className="text mb-0">Occupancy</p>
                            <h6>Three Persons</h6>
                          </div>
                          <div className="col-6 col-md-3">
                            <p className="text mb-0">View</p>
                            <h6>Sea View</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text">
                  Enjoy natural light streaming through large windows, a cozy
                  seating area, and a work-friendly desk. The private en-suite
                  bathroom is equipped with a rain shower, soft towels, and
                  premium toiletries.
                </p>
              </div>
              <div className="mt-40">
                <h4>Room Facilities</h4>
                <div className="row room-facility-list mb-40">
                  {FACILITIES.map((facility, index) => (
                    <div key={facility.title} className="col-sm-6 col-xl-4">
                      <div
                        className={`list-one d-flex align-items-center me-sm-4${
                          index < FACILITIES.length - 1 ? " mb-3" : ""
                        }`}>
                        <div className="icon text-theme-color1 mr-10 flex-shrink-0">
                          <i className={facility.icon} />
                        </div>
                        <h6 className="title m-0">{facility.title}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-sm-flex align-items-sm-center justify-content-sm-between pt-40 pb-40 border-top">
                <h6 className="my-sm-0">Share Details</h6>
                <div className="blog-details__social-list">
                  <Link to="/">
                    <i className="fab fa-x-twitter" />
                  </Link>
                  <Link to="/">
                    <i className="fab fa-facebook" />
                  </Link>
                  <Link to="/">
                    <i className="fab fa-pinterest-p" />
                  </Link>
                  <Link to="/">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="p-4 p-lg-5 bg-light">
                <h4 className="mt-0">Send Us Your Question</h4>
                <form id="contact_form" name="contact_form" className="">
                  <div className="row">
                    <div className="col-sm-6 col-xl-4">
                      <div className="mb-3">
                        <input name="form_name" className="form-control bg-white" type="text" placeholder="Enter Name"/>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-4">
                      <div className="mb-3">
                        <input name="form_email" className="form-control bg-white required email" type="email" placeholder="Enter Email"/>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="mb-3">
                        <input name="form_phone" className="form-control bg-white required phone" type="number" placeholder="Enter Phone"/>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea name="form_message" className="form-control bg-white required" rows={5} placeholder="Enter Message"></textarea>
                  </div>
                  <div className="mb-0">
                    <input name="form_botcheck" className="form-control" type="hidden" />
                    <button name="form_botcheck" className="theme-btn-nine animation-box" data-loading-text="Please wait...">
                      <span className="royle-btn__text">Submit Comment</span>
                      <span className="royle-btn__hover royle-btn__hover--1"></span>
                      <span className="royle-btn__hover royle-btn__hover--2"></span>
                      <span className="royle-btn__hover royle-btn__hover--3"></span>
                      <span className="royle-btn__hover royle-btn__hover--4"></span>
                      <span className="royle-btn__hover royle-btn__hover--5"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="sidebar">
              <div className="kodelisting-room-booking mb-30">
                <div className="kodelisting-room-booking-wrap">
                  <div className="room-booking-title d-flex align-items-end justify-content-between">
                    <h5 className="title">Reserve:</h5>
                    <span>From <span className="base-price">$299</span>/night</span>
                  </div>
                  <form className="reservation-form" id="contact_form2" name="contact_form">
                    <div className="row">
                      <div className="col-sm-12 mb-3">
                        <div className="form-floating">
                          <input type="datepicker" name="form_name" className="form-control date-pick" placeholder="Check In" id=""></input>
                          <label htmlFor="">Check In</label>
                        </div>
                      </div>
                      <div className="col-sm-12 mb-3">
                        <div className="form-floating">
                          <input type="datepicker2" name="form_name" className="form-control date-pick" placeholder="Check Out" id=""></input>
                          <label htmlFor="">Check Out</label>
                        </div>
                      </div>
                      <div className="col-sm-12 mb-3">
                        <select className="form-select" defaultValue="Room">
                          <option value="Room" disabled>Room</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="More">More</option>
                        </select>
                      </div>
                      <div className="col-sm-6 mb-3">
                        <select className="form-select" defaultValue="Adults">
                          <option value="Adults" disabled>Adults</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="More">More</option>
                        </select>
                      </div>
                      <div className="col-sm-6 mb-3">
                        <select className="form-select" defaultValue="Children">
                          <option value="Children" disabled>Children</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="More">More</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="room-booking-title mt-30">
                          <h5 className="title">Extra Services</h5>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="checkbox-row">
                          <label className="checkbox-label custom-checkbox">
                            <input type="checkbox" name="laundry" />
                            Laundry
                          </label>
                          <span className="checkbox-price">$10 / Night</span>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="checkbox-row">
                          <label className="checkbox-label custom-checkbox">
                            <input type="checkbox" name="CarRental" />
                            Car Rental
                          </label>
                          <span className="checkbox-price">$10 / Night</span>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="checkbox-row">
                          <label className="checkbox-label custom-checkbox">
                            <input type="checkbox" name="Breakfast" />
                            Breakfast
                          </label>
                          <span className="checkbox-price">$10 / Night</span>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="checkbox-row">
                          <label className="checkbox-label custom-checkbox">
                            <input type="checkbox" name="SeaView" />
                            Sea View
                          </label>
                          <span className="checkbox-price">$10 / Night</span>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="checkbox-row mb-30">
                          <label className="checkbox-label custom-checkbox">
                            <input type="checkbox" name="Wifi" />
                            Wifi
                          </label>
                          <span className="checkbox-price">$10 / Night</span>
                        </div>
                      </div>
                      <hr/>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="room-booking-title d-flex align-items-end justify-content-between mt-20">
                          <h5 className="title">Total Cost</h5>
                          <span><span className="base-price price-value">$299</span></span>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="total-base-price">
                          <div className="summary">
                            <div className="price-content d-flex justify-content-between">
                              <div className="label">
                                Total Base Price <i>i</i>
                              </div>
                              <div className="amount">$299</div>
                            </div>
                            <div className="total d-flex justify-content-between mt-2">
                              <div>Total</div>
                              <div>$299</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 mt-2">
                      <input name="form_botcheck" className="form-control" type="hidden" />
                      <button type="submit" className="theme-btn btn-style-one w-100" data-loading-text="Please wait..."><span className="btn-title">Book Now</span></button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="sidebar__single sidebar__post">
                <h3 className="sidebar__title">Compare Room</h3>
                <ul className="sidebar__post-list list-unstyled">
                  {COMPARE_ROOMS.map((room) => (
                    <li key={room.name}>
                      <div className="sidebar__post-image">
                        <img src={room.image} alt={room.name} />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta">
                            <i className="fas fa-door-open" />
                            {room.name}
                          </span>
                          <Link to="/room-details">{room.price}</Link>
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetailsSection;