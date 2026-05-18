import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import servicesDetailImage1 from "../assets/images/resource/service-details.jpg";
import servicesDetailImage2 from "../assets/images/resource/service-d1.jpg";
import servicesDetailImage3 from "../assets/images/resource/service-d2.jpg";

const services = [
  "Spa and Wellness",
  "Meeting Room",
  "Restaurant",
  "Free Wi-Fi",
  "Parking Facilities",
  "Room Service",
];

const faqData = [
  {
    q: "What services does your creative agency offer?",
    a: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    q: "Do you provide brand guidelines?",
    a: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    q: "Do you provide digital marketing services?",
    a: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
];

export default function ServiceDetailsSection() {
  const [activeFaq, setActiveFaq] = useState(1);

  return (
    <section className="services-details pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="service-sidebar">
              <div className="sidebar-widget service-sidebar-single">
                <div className="sidebar-service-list">
                  <ul>
                    {services.map((item, i) => (
                      <li key={i} className={i === 1 ? "current" : ""}>
                        <Link to="/page-service-details">
                          <i className="fas fa-angle-right"></i>
                          <span>{item}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-details-help">
                  <div className="help-shape-1"></div>
                  <div className="help-shape-2"></div>
                  <h2 className="help-title">
                    Contact with <br /> us for any <br /> advice
                  </h2>
                  <div className="help-icon">
                    <span className="lnr-icon-phone-handset"></span>
                  </div>
                  <div className="help-contact">
                    <p>Need help? Talk to an expert</p>
                    <Link to="#">+892 (123) 112 - 9999</Link>
                  </div>
                </div>
              <div className="sidebar-widget service-sidebar-single mt-4">
                <div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                  <Link to="#" className="theme-btn btn-style-one d-grid"><span className="btn-title"><span className="fas fa-file-pdf"></span> download pdf file</span></Link>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="services-details__content">
              <div className="service-details-image fix">
                <img
                  src={servicesDetailImage1}
                  alt="Service"
                />
              </div>
              <h3 className="mt-4">Service Overview</h3>
              <p className="text">Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              <p className="text">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur adipis icing elit  </p>
              <div className="content mt-40">
                <div className="text">
                  <h3>Service Center</h3>
                  <p className="text">
                    Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <blockquote className="blockquote-one">
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur
                  </blockquote>
                </div>
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 4000 }}
                  loop
                  spaceBetween={30}
                  slidesPerView={2}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1200: { slidesPerView: 2 },
                  }}
                  className="project-image-slider">
                  {[servicesDetailImage2, servicesDetailImage3, servicesDetailImage2].map(
                    (img, i) => (
                      <SwiperSlide key={i}>
                        <div className="image">
                          <img
                            className="w-100"
                            src={`${img}`}
                            alt=""
                          />
                        </div>
                        <p className="text">
                          Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing
                        </p>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
              <div className="mt-5">
                <h3 className="mb-3">Frequently Asked Question</h3>
                <p className="text">
                  Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <ul className="accordion-box wow fadeInRight">
                  {faqData.map((item, i) => (
                    <li
                      key={i}
                      className={`accordion block ${
                        activeFaq === i ? "active-block" : ""
                      }`}
                    >
                      <div
                        className={`acc-btn ${
                          activeFaq === i ? "active" : ""
                        }`}
                        style={{ color: "var(--theme-color-black)" }}
                        onClick={() =>
                          setActiveFaq(activeFaq === i ? -1 : i)
                        }
                      >
                        {item.q}
                        <div className="icon fa-solid fa-chevron-down"></div>
                      </div>

                      <div
                        className={`acc-content ${
                          activeFaq === i ? "current" : ""
                        }`}
                        style={{
                          display: activeFaq === i ? "block" : "none",
                        }}
                      >
                        <div className="content">
                          <div className="text">{item.a}</div>
                        </div>
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
}
