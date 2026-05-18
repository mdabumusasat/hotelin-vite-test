
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import testimonials01 from "../assets/images/testimonial/testi-thumb1.jpg";
import testimonials02 from "../assets/images/testimonial/testi-thumb2.jpg";
import testimonials03 from "../assets/images/testimonial/testi-thumb3.jpg";
import testimonialsThumb01 from "../assets/images/testimonial/testi-img1.png";
import testimonialsThumb02 from "../assets/images/testimonial/testi-img2.png";
import testimonialsThumb03 from "../assets/images/testimonial/testi-img3.png";

const testimonials = [
  {
    id: 1,
    thumb: testimonials01,
    authorImage: testimonialsThumb01,
    author: "Fergus Douchebag",
    designation: "CEO & Co Founder",
    text: "Studio thrives on innovation & collaboration delivering bespoke design solutions that transform brands & create lasting impressions.",
  },
  {
    id: 2,
    thumb: testimonials02,
    authorImage: testimonialsThumb02,
    author: "Spruce Springclean",
    designation: "UI/UX Designer",
    text: "Studio thrives on innovation & collaboration delivering bespoke design solutions that transform brands & create lasting impressions.",
  },
  {
    id: 3,
    thumb: testimonials03,
    authorImage: testimonialsThumb03,
    author: "Norman Gordon",
    designation: "Manager",
    text: "Studio thrives on innovation & collaboration delivering bespoke design solutions that transform brands & create lasting impressions.",
  },
  {
    id: 4,
    thumb: testimonials01,
    authorImage: testimonialsThumb01,
    author: "Fergus Douchebag",
    designation: "CEO & Co Founder",
    text: "Studio thrives on innovation & collaboration delivering bespoke design solutions that transform brands & create lasting impressions.",
  },
];

const YOUTUBE_VIDEO_ID = "Fvae8nxzVz4";

const TestimonialSectionOne = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="testimonial-section-one section-padding">
        <div className="container-fluid px-5">
          <div className="row g-0">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="testimonial-block-one col-lg-6 mb-20"
              >
                <div className="testimonial-thumb position-relative z-1">
                  <img src={item.thumb} alt={item.author} />

                  <div className="banner-play-button play-button">
                    <a
                      className="play-now-two"
                      onClick={() => setOpen(true)}
                    >
                      <i className="fa-solid fa-play" />
                      <span className="ripple" />
                    </a>
                  </div>
                </div>

                <div className="content-box">
                  <div className="review">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <i
                        key={index}
                        className="fa-sharp fa-solid fa-star-sharp"
                      />
                    ))}
                  </div>

                  <div className="testimonial-content">
                    <p className="text">{item.text}</p>

                    <div className="author-info">
                      <div className="testimonial-bio-img">
                        <img src={item.authorImage} alt={item.author} />
                      </div>

                      <div className="testimonial-bio-content">
                        <h6 className="author">{item.author}</h6>
                        <p className="desigation">{item.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={YOUTUBE_VIDEO_ID}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default TestimonialSectionOne;
