import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import blogImage1 from "../../assets/images/resort/blog/blog-image1.jpg";
import blogImage2 from "../../assets/images/resort/blog/blog-image2.jpg";

const blogs = [
  {
    id: 1,
    image: blogImage1,
    tag: "Catering",
    title: "Exclusive Hotels on Earth",
    text: "Believe every journey should begin with comfort & trust make hotel booking simple.",
    date: "May 17, 2026",
    comments: 2,
    link: "/news-details",
  },
  {
    id: 2,
    image: blogImage2,
    tag: "Catering",
    title: "Guide to Planning a Getaway.",
    text: "Believe every journey should begin with comfort & trust make hotel booking simple.",
    date: "June 27, 2025",
    comments: 3,
    link: "/news-details",
  },
  {
    id: 3,
    image: blogImage1,
    tag: "Catering",
    title: "Exclusive Hotels on Earth",
    text: "Believe every journey should begin with comfort & trust make hotel booking simple.",
    date: "May 17, 2026",
    comments: 2,
    link: "/news-details",
  },
  {
    id: 4,
    image: blogImage2,
    tag: "Catering",
    title: "Guide to Planning a Getaway.",
    text: "Believe every journey should begin with comfort & trust make hotel booking simple.",
    date: "June 27, 2025",
    comments: 3,
    link: "/news-details",
  },
];

export default function BlogSectionResort() {
  return (
    <section className="blog-section-resort pt-140 pb-140">
      <div className="container">
        <div className="sec-title text-center mb-60">
          <h2 className="title text-reveal-anim">
            Latest News & Blogs
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".blog-slider-next",
            prevEl: ".blog-slider-prev",
          }}
          pagination={{
            el: ".blog-slider-pagination",
            clickable: true,
          }}
          className="blog-slider-resort"
        >
          {blogs.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="blog-post-resort">
                <div className="row g-5 align-items-center">
                  <div className="col-md-5">
                    <Link to={item.link} className="image">
                      <img src={item.image} alt={item.title} />
                    </Link>
                  </div>

                  <div className="col-md-7">
                    <div className="content">
                      <span className="tag">{item.tag}</span>

                      <h3 className="title">
                        <Link to={item.link}>{item.title}</Link>
                      </h3>

                      <p className="text">{item.text}</p>

                      <ul className="info">
                        <li>
                          <i className="fa-light fa-calendar-days"></i>{" "}
                          {item.date}
                        </li>
                        <li>
                          <i className="fa-light fa-comments"></i>{" "}
                          {item.comments} Comment
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="slider-info mt-60 text-center">
            <button className="blog-slider-prev">
              <i className="fa-light fa-angle-left"></i>
            </button>

            <div className="blog-slider-pagination"></div>

            <button className="blog-slider-next">
              <i className="fa-light fa-angle-right"></i>
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}