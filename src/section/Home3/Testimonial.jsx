import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import author1 from "../../assets/images/resort/testimonial/testi-img1.png";
import author2 from "../../assets/images/resort/testimonial/testi-img2.png";
import videoThumb1 from "../../assets/images/resort/testimonial/image1.jpg";
import videoThumb2 from "../../assets/images/resort/testimonial/image2.jpg";

const testimonials = [
  {
    id: 1,
    authorImage: author1,
    authorName: "Hanson Deck",
    authorRole: "IT Director at Cognizant",
    videoThumbnail: videoThumb1,
    videoId: "Fvae8nxzVz4",
    review:
      "Duis ullamcorper arcu egestas nisl luctus, sit amet lobortis lorem gravida. Phasellus u mauris sodales hendrerit. Phasellus interdum lacinia diam, vitae bibendum nisi elementum urna.",
  },
  {
    id: 2,
    authorImage: author2,
    authorName: "Hanson Deck",
    authorRole: "IT Director at Cognizant",
    videoThumbnail: videoThumb2,
    videoId: "Fvae8nxzVz4",
    review:
      "Duis ullamcorper arcu egestas nisl luctus, sit amet lobortis lorem gravida. Phasellus u mauris sodales hendrerit. Phasellus interdum lacinia diam, vitae bibendum nisi elementum urna.",
  },
  {
    id: 3,
    authorImage: author1,
    authorName: "Hanson Deck",
    authorRole: "IT Director at Cognizant",
    videoThumbnail: videoThumb1,
    videoId: "Fvae8nxzVz4",
    review:
      "Duis ullamcorper arcu egestas nisl luctus, sit amet lobortis lorem gravida. Phasellus u mauris sodales hendrerit. Phasellus interdum lacinia diam, vitae bibendum nisi elementum urna.",
  },
  {
    id: 4,
    authorImage: author2,
    authorName: "Hanson Deck",
    authorRole: "IT Director at Cognizant",
    videoThumbnail: videoThumb2,
    videoId: "Fvae8nxzVz4",
    review:
      "Duis ullamcorper arcu egestas nisl luctus, sit amet lobortis lorem gravida. Phasellus u mauris sodales hendrerit. Phasellus interdum lacinia diam, vitae bibendum nisi elementum urna.",
  },
];

export default function TestimonialSectionThree() {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("Fvae8nxzVz4");

  const handleOpenVideo = (id) => {
    setVideoId(id);
    setOpen(true);
  };

  return (
    <>
      <section className="testimonial-section-three tp-team-area section-padding">
        <div className="outer-box">
          <div className="sec-title text-center mb-60">
            <h2 className="title text-reveal-anim">
              What customers have to say
            </h2>
          </div>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="tp-team-item marque">
                <div className="row g-0">
                  <div className="col-md-6">
                    <div className="testimonial-block-three">
                      <div className="content">
                        <div className="star">
                          {[...Array(5)].map((_, index) => (
                            <i key={index} className="fa-solid fa-star"></i>
                          ))}
                        </div>
                        <p className="text">{item.review}</p>
                      </div>
                      <div className="info">
                        <img
                          src={item.authorImage}
                          alt={item.authorName}
                        />
                        <div>
                          <h6 className="title">{item.authorName}</h6>
                          <span className="sub-title">
                            {item.authorRole}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="testimonial-block-four">
                      <figure className="image">
                        <img
                          src={item.videoThumbnail}
                          alt="Testimonial Video"
                          className="w-100"
                        />
                      </figure>
                      <Link
                        to="#"
                        className="play-now-two"
                        onClick={(e) => {
                          e.preventDefault();
                          handleOpenVideo(item.videoId);
                        }}>
                        <i className="fa-solid fa-play"></i>
                        <span className="ripple"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="review tp_fade_bottom">
            5.0 out of 5.0 based on <Link to="#0">2,746 reviews</Link>
          </div>
        </div>
      </section>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </>
  );
}