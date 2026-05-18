import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import lineImage from "../../assets/images/mountain/line.png";
import instagram01 from "../../assets/images/mountain/instagram/instagram-01.jpg";
import instagram02 from "../../assets/images/mountain/instagram/instagram-02.jpg";
import instagram03 from "../../assets/images/mountain/instagram/instagram-03.jpg";
import instagram04 from "../../assets/images/mountain/instagram/instagram-04.jpg";
import instagram05 from "../../assets/images/mountain/instagram/instagram-05.jpg";

// Instagram Images Array
const instagramImages = [
  instagram01,
  instagram02,
  instagram03,
  instagram04,
  instagram05,
  instagram01,
  instagram02,
  instagram03,
];

// Footer Menu Items
const footerMenus = [
  { label: "Home", href: "/" },
  { label: "Pages", href: "/page-about" },
  { label: "Rooms", href: "/room-details" },
  { label: "Features", href: "/page-about" },
  { label: "Blog", href: "/news-details" },
  { label: "Contact Us", href: "/page-contact" },
];

// Social Links
const socialLinks = [
  { icon: "fa-facebook-f", href: "#" },
  { icon: "fa-x-twitter", href: "#" },
  { icon: "fa-linkedin-in", href: "#" },
  { icon: "fa-pinterest", href: "#" },
];

export default function Footer() {
  return (
    <footer className="footer-section-mountain fix">
      <div className="container">
        {/* Footer Top */}
        <div className="footer-top-wrapper-mountain">
          {/* Left Content */}
          <div className="footer-left-content">
            <h2 className="sec-title tx-title sec_title tz-itm-title tz-itm-anim">
              <span className="line">
                <img src={lineImage} alt="line" />
              </span>{" "}
              Get the <br />
              amazing travel offers <br />
              into your inbox!
            </h2>

            <h3 className="footer-big-text">
              <Link to="#">hello@royleFacilities.com</Link>
            </h3>
          </div>

          {/* Right Content */}
          <div className="footer-right-items">
            {/* Newsletter Form */}
            <form action="#">
              <div className="form-clt">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                />

                <button
                  type="submit"
                  className="icon"
                  aria-label="Submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="22"
                    viewBox="0 0 30 22"
                    fill="none"
                  >
                    <path
                      d="M18.8047 1L28.6931 11L18.8047 21"
                      stroke="#15221C"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 10.9971L28.417 10.9971"
                      stroke="#15221C"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <span className="privacy-text">
                We are committed to protecting your <b>privacy policy.</b>
              </span>
            </form>

            {/* Contact List */}
            <div className="contact-list">
              <h4>Contact Us</h4>

              <ul>
                {/* Address */}
                <li>
                  <div className="icon">
                    <svg
                      width="19"
                      height="24"
                      viewBox="0 0 19 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.25006 12.5279C10.9069 12.5279 12.2501 11.1191 12.2501 9.38116C12.2501 7.64324 10.9069 6.23438 9.25006 6.23438C7.59317 6.23438 6.25 7.64324 6.25 9.38116C6.25 11.1191 7.59317 12.5279 9.25006 12.5279Z"
                        stroke="white"
                        strokeOpacity="0.6"
                        strokeWidth="2"
                      />
                      <path
                        d="M1.19216 7.54572C3.08642 -1.18863 15.4232 -1.17854 17.3079 7.55581C18.4137 12.6794 14.5012 18.8497 11.8377 21.5325C9.90496 23.4892 8.59506 23.4892 6.65271 21.5325C3.99881 18.8497 0.0863638 12.6693 1.19216 7.54572Z"
                        stroke="white"
                        strokeOpacity="0.6"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  <div className="contact-text">
                    <span>
                      16958 CA-58, Mojave, CA 93501 <br />
                      United States
                    </span>
                  </div>
                </li>

                {/* Phone */}
                <li>
                  <div className="icon">
                    <svg
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.70588C1 2.41176 2.88235 1 5.70588 1H15.1176C17.9412 1 19.8235 2.41176 19.8235 5.70588V12.2941C19.8235 15.5882 17.9412 17 15.1176 17H5.70588"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.1168 6.17578L12.171 8.52844C11.2015 9.30011 9.61096 9.30011 8.64154 8.52844L5.70508 6.17578"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 13.2344H6.64706"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 9.46875H3.82353"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="contact-text">
                    <Link to="#">(123) 587 - 789 - 258</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Instagram Slider */}
        <div className="footer-instagram-wrapper-mountain">
          <Swiper
            modules={[Autoplay]}
            className="footer-instagram-slider"
            loop={true}
            speed={1000}
            spaceBetween={24}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
          >
            {instagramImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="footer-instgram-image">
                  <img
                    src={image}
                    alt={`Instagram ${index + 1}`}
                    className="w-100"
                  />

                  <Link to="#" className="instagram-text">
                    <i className="fa-brands fa-instagram"></i> INSTAGRAM
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom-mountain">
          <p>© Copyright 2026 Kodesolution</p>

          <ul className="footer-menu-list">
            {footerMenus.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <div className="social-icon">
            {socialLinks.map((item, index) => (
              <Link key={index} to={item.href}>
                <i className={`fa-brands ${item.icon}`}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}