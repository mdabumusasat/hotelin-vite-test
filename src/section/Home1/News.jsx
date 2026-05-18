import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import blogThumb1 from "../../assets/images/blog/blog-thumb1.jpg";
import blogThumb2 from "../../assets/images/blog/blog-thumb2.jpg";
import blogThumb3 from "../../assets/images/blog/blog-thumb3.jpg";
import buttonArrow from "../../assets/images/icons/button-arrow.svg";

// Blog Posts Data
const blogPosts = [
  {
    id: 1,
    image: blogThumb1,
    date: "May 17, 2026",
    comments: "2 Comment",
    title: "Elevating Hotel Hangouts for the Modern Guest",
  },
  {
    id: 2,
    image: blogThumb2,
    date: "May 17, 2026",
    comments: "2 Comment",
    title: "Next-Gen Branding Solutions for Boutique Hotels",
  },
  {
    id: 3,
    image: blogThumb3,
    date: "May 17, 2026",
    comments: "2 Comment",
    title: "Modern Hospitality Tailored to New-Age Travelers",
  },
  {
    id: 4,
    image: blogThumb2,
    date: "May 17, 2026",
    comments: "2 Comment",
    title: "Next-Gen Branding Solutions for Boutique Hotels",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-area">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-between">
          <div className="col-xl-6">
            <div className="section-wrapper mb-3 mb-lg-0 mb-xl-5">
              <h2 className="section-title text-reveal-anim">
                Latest News & Articles
              </h2>
            </div>
          </div>

          <div className="col-xl-3">
            <div className="blog-arrow-box d-flex justify-content-xl-end">
              <button
                className="slider-prev"
                aria-label="Previous Slide"
              >
                <i className="fa-regular fa-arrow-left"></i>
              </button>

              <button
                className="slider-next"
                aria-label="Next Slide"
              >
                <i className="fa-regular fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Blog Slider */}
        <div className="row">
          <div className="col-xl-12">
            <div className="blog-slide-wrapper mt-5 mt-xl-0">
              <Swiper
                modules={[Navigation, Autoplay]}
                className="blog-active"
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: ".blog-arrow-box .slider-prev",
                  nextEl: ".blog-arrow-box .slider-next",
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
              >
                {blogPosts.map((post) => (
                  <SwiperSlide key={post.id}>
                    <div className="blog-box">
                      {/* Image */}
                      <div className="image-box">
                        <img
                          className="w-img"
                          src={post.image}
                          alt={post.title}
                        />
                        <img
                          className="w-img"
                          src={post.image}
                          alt={post.title}
                        />
                        <Link
                          className="img-btn"
                          to="/news-details"
                        />
                      </div>

                      {/* Content */}
                      <div className="content-box">
                        {/* Meta */}
                        <div className="post-meta">
                          <ul>
                            <li>
                              <i className="fa-classic fa-light fa-calendar-days"></i>{" "}
                              {post.date}
                            </li>
                            <li>
                              <i className="fa-classic fa-light fa-comments"></i>{" "}
                              {post.comments}
                            </li>
                          </ul>
                        </div>

                        {/* Title */}
                        <h4 className="title">
                          <Link to="/news-details">
                            {post.title}
                          </Link>
                        </h4>

                        {/* Button */}
                        <div className="button">
                          <Link
                            className="theme-btn-main"
                            to="/news-details"
                          >
                            <span className="theme-btn-arrow-left theme-color-white">
                              <img
                                className="filter-white"
                                src={buttonArrow}
                                alt="arrow"
                              />
                            </span>

                            <span className="theme-btn theme-color-white">
                              More Details
                            </span>

                            <span className="theme-btn-arrow-right theme-color-white">
                              <img
                                className="filter-white"
                                src={buttonArrow}
                                alt="arrow"
                              />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;