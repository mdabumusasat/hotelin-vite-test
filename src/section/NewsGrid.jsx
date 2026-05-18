import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import blog1 from "../assets/images/blog/blog-thumb1.jpg";
import blog2 from "../assets/images/blog/blog-thumb2.jpg";
import blog3 from "../assets/images/blog/blog-thumb3.jpg";
import arrowIcon from "../assets/images/icons/button-arrow.svg";

const blogDataTop = [
  {
    id: 1,
    image: blog1,
    date: "May 17, 2026",
    comments: "2 Comments",
    title: "Elevating Hotel Hangouts for the Modern Guest",
    link: "/news-details",
  },
  {
    id: 2,
    image: blog2,
    date: "May 17, 2026",
    comments: "2 Comments",
    title: "Next-Gen Branding Solutions for Boutique Hotels",
    link: "/news-details",
  },
  {
    id: 3,
    image: blog3,
    date: "May 17, 2026",
    comments: "2 Comments",
    title: "Modern Hospitality Tailored to New-Age Travelers",
    link: "/news-details",
  },
];

const blogDataBottom = [
  {
    id: 4,
    image: blog3,
    date: "May 17, 2026",
    comments: "2 Comments",
    title: "Modern Hospitality Tailored to New-Age Travelers",
    link: "/news-details",
  },
  {
    id: 5,
    image: blog1,
    date: "May 17, 2026",
    comments: "2 Comments",
    title: "Elevating Hotel Hangouts for the Modern Guest",
    link: "/news-details",
  },
  {
    id: 6,
    image: blog2,
    date: "May 17, 2026",
    comments: "2 Comments",
    title: "Next-Gen Branding Solutions for Boutique Hotels",
    link: "/news-details",
  },
];


const BlogCard = ({ blog }) => {
  return (
    <div className="blog-box">
      <div className="image-box">
        <img className="w-img" src={blog.image} alt={blog.title} />
        <img className="w-img" src={blog.image} alt={blog.title} />
        <Link className="img-btn" to={blog.link}></Link>
      </div>
      <div className="content-box">
        <div className="post-meta">
          <ul>
            <li>
              <i className="fa-light fa-calendar-days"></i> {blog.date}
            </li>
            <li>
              <i className="fa-light fa-comments"></i> {blog.comments}
            </li>
          </ul>
        </div>
        <h4 className="title">
          <Link to={blog.link}>{blog.title}</Link>
        </h4>
        <div className="button">
          <Link className="theme-btn-main" to={blog.link}>
            <span className="theme-btn-arrow-left">
              <img src={arrowIcon} alt="arrow" />
            </span>
            <span className="theme-btn">More Details</span>
            <span className="theme-btn-arrow-right">
              <img src={arrowIcon} alt="arrow" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogSlider = ({ blogs }) => {
  return (
    <div className="blog-slide-wrapper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="blog-active"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <BlogCard blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const BlogArea = () => {
  return (
    <section className="blog-area pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 mb-20">
            <BlogSlider blogs={blogDataTop} />
          </div>

          <div className="col-xl-12">
            <BlogSlider blogs={blogDataBottom} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;