import React from "react";
import { Link } from "react-router-dom";
import eventImg1 from "../../assets/images/resource/event1-1.jpg";
import eventImg2 from "../../assets/images/resource/event1-2.jpg";
import exploreImg1 from "../../assets/images/resort/explore/explore-image.png";
import exploreImg2 from "../../assets/images/resort/explore/explore-shape1.png";
import exploreImg3 from "../../assets/images/resort/explore/explore-shape2.png";

const events = [
  {
    id: 1,
    title: "Matangi Island Luxury Spa",
    image: eventImg1,
    description:
      "Nestled between ocean & palm-lined shores beachside retreat invites you to experience serenity exceptional & the timeless sports peaceful",
    link: "/page-service-details",
  },
  {
    id: 2,
    title: "Summer Activities",
    image: eventImg2,
    description:
      "Nestled between ocean & palm-lined shores beachside retreat invites you to experience serenity exceptional & the timeless sports peaceful",
    link: "/page-service-details",
  },
];

const EventSectionResort = () => {
  return (
    <section className="event-section-resort">
      <div className="outer-box">
        {/* Section Title */}
        <div className="sec-title mb-60">
          <h2 className="title text-reveal-anim">
            Local Activities & Events
          </h2>
        </div>

        {/* Events */}
        <div className="row">
          {events.map((event) => (
            <div key={event.id} className="col-lg-6">
              <div className="event-block-resort">
                <div className="inner-block">

                  {/* Image */}
                  <div className="image-box">
                    <figure className="image-1">
                      <img src={event.image} alt={event.title} />
                    </figure>
                  </div>

                  {/* Content */}
                  <div className="content-box">
                    <h3 className="title">{event.title}</h3>

                    <div className="text">{event.description}</div>

                    <Link to={event.link} className="theme-btn-five">
                      Explore More{" "}
                      <i className="fa-light fa-arrow-up-right"></i>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Section */}
      <div className="explore-section-resort pt-140">
        <div className="container">
          <div className="outer-box mb-0">
            <div className="row">
              <div className="col-xxl-6">
                <h3 className="title text-reveal-anim">
                  Your First Booking <br />
                  Discount -{" "}
                  <span className="color1">Get 50% Off</span> on Your Next Adventure with Us!
                </h3>

                <div className="btn-wrp">
                  <Link to="/page-contact" className="download-btn">
                    <i className="fa-brands fa-apple"></i> Download iOS
                  </Link>

                  <Link to="/page-contact" className="download-btn">
                    <i className="fa-brands fa-android"></i> Download Android
                  </Link>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="image">
              <img
                className="wow bounceInRight"
                src={exploreImg1}
                alt="Explore"
              />
            </div>

            {/* Shapes */}
            <div className="sec-shape">
              <img
                className="animation__arryLeftRight"
                src={exploreImg2}
                alt="Shape"
              />
            </div>

            <div className="sec-line">
              <img
                src={exploreImg3}
                alt="Line Shape"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSectionResort;