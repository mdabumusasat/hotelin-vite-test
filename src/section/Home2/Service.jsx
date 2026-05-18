import React from "react";
import { Link } from "react-router-dom";
import lineImage from "../../assets/images/mountain/line.png";

// Services Data
const services = [
  {
    id: 1,
    icon: "flaticon-pool",
    title: "Swimming Pool",
    href: "/page-services",
    delay: "200",
  },
  {
    id: 2,
    icon: "flaticon-weights",
    title: "Fitness Center",
    href: "/page-services",
    delay: "600",
  },
  {
    id: 3,
    icon: "flaticon-bathroom",
    title: "Luxury Bathroom",
    href: "/page-services",
    delay: "200",
  },
  {
    id: 4,
    icon: "flaticon-hangers",
    title: "Laundry Service",
    href: "/page-services",
    delay: "600",
  },
];

const ServiceMountain = () => {
  return (
    <section className="service-section service-mountain pt-0">
      <div className="container">
        {/* Section Title */}
        <div className="sec-title tx-title sec_title tz-itm-title tz-itm-anim">
          <h2 className="title">
            <span className="line">
              <img src={lineImage} alt="line" />
            </span>{" "}
            Royle Hotel <br /> &amp; Services.
          </h2>
        </div>

        {/* Services Wrapper */}
        <div className="service-wrapper-mountain">
          <div className="row align-xxl-center-only g-4 g-md-4 g-xl-3 g-xxl-0">
            {/* Service Item 1 */}
            <div className="col-xxl-2 col-xl-4 col-md-6 col-lg-4">
              <div className="service-box-items-mountain animation-box">
                <div className="icon">
                  <i className={services[0].icon}></i>
                </div>
                <h3>
                  <Link to={services[0].href}>
                    Swimming <br /> Pool
                  </Link>
                </h3>
              </div>
            </div>

            <div className="col-xl-1 d-none d-xxl-block"></div>

            {/* Description */}
            <div className="col-xxl-4 col-xl-4 col-md-6 col-lg-4">
              <div className="service-text animation-box">
                <p className="text">
                  Welcome to Royle Hotel & Resort. A luxurious 5-star retreat
                  located in the vibrant paradise. Our stunning resort combines
                  modern luxury with the island&apos;s rich culture and natural
                  beauty. Perched on the pristine shores of the Mediterranean.
                </p>
              </div>
            </div>

            <div className="col-xl-1 d-none d-xxl-block"></div>

            {/* Service Item 2 */}
            <div className="col-xxl-2 col-xl-4 col-md-6 col-lg-4">
              <div className="service-box-items-mountain animation-box">
                <div className="icon">
                  <i className={services[1].icon}></i>
                </div>
                <h3>
                  <Link to={services[1].href}>
                    Fitness <br /> Center
                  </Link>
                </h3>
              </div>
            </div>

            <div className="col-xl-2 d-none d-xxl-block"></div>
            <div className="col-xl-2 d-none d-xxl-block"></div>

            {/* Service Item 3 */}
            <div className="col-xxl-2 col-xl-4 col-md-6 col-lg-4">
              <div className="service-box-items-mountain animation-box">
                <div className="icon">
                  <i className={services[2].icon}></i>
                </div>
                <h3>
                  <Link to={services[2].href}>
                    Luxury <br /> Bathroom
                  </Link>
                </h3>
              </div>
            </div>

            <div className="col-xl-2 d-none d-xxl-block"></div>

            {/* View All Services Button */}
            <div className="col-xxl-4 col-xl-4 col-md-6 col-lg-4 d-flex align-items-end">
              <Link
                to="/page-service"
                className="theme-btn-eight animation-box"
              >
                <span className="royle-btn__text">
                  View all Services
                  <i className="lnr-icon-arrow-right ms-5"></i>
                </span>
                <span className="royle-btn__hover royle-btn__hover--1"></span>
                <span className="royle-btn__hover royle-btn__hover--2"></span>
                <span className="royle-btn__hover royle-btn__hover--3"></span>
                <span className="royle-btn__hover royle-btn__hover--4"></span>
                <span className="royle-btn__hover royle-btn__hover--5"></span>
              </Link>
            </div>

            {/* Service Item 4 */}
            <div className="col-xxl-2 col-xl-4 col-md-6 col-lg-4">
              <div className="service-box-items-mountain animation-box">
                <div className="icon">
                  <i className={services[3].icon}></i>
                </div>
                <h3>
                  <Link to={services[3].href}>
                    Laundry <br /> Service
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMountain;