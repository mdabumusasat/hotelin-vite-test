import React from "react";
import { Link } from "react-router-dom";
import featureThumb1 from "../../assets/images/feature/feature-thumb1.jpg";
import featureThumb2 from "../../assets/images/feature/feature-thumb2.jpg";
import featureThumb3 from "../../assets/images/feature/feature-thumb3.jpg";
import featureThumb4 from "../../assets/images/feature/feature-thumb4.jpg";
import featureThumb5 from "../../assets/images/feature/feature-thumb5.jpg";
import featureThumb6 from "../../assets/images/feature/feature-thumb6.jpg";
import featureBgShapeBirds from "../../assets/images/feature/feature-bg-shape-birds.png";

// Feature Data
const features = [
  {
    id: 1,
    title: "Restaurant",
    image: featureThumb1,
    delay: "300",
  },
  {
    id: 2,
    title: "Swimming Pool",
    image: featureThumb2,
    delay: "400",
  },
  {
    id: 3,
    title: "Fitness Centre",
    image: featureThumb3,
    delay: "500",
  },
  {
    id: 4,
    title: "Spa & Massage",
    image: featureThumb4,
    delay: "300",
  },
  {
    id: 5,
    title: "Meeting Room",
    image: featureThumb5,
    delay: "400",
  },
  {
    id: 6,
    title: "Laundry Service",
    image: featureThumb6,
    delay: "500",
  },
];

const FeatureSection = () => {
  return (
    <>
      {/* Feature area start */}
      <section className="feature-area position-relative z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-wrapper text-center mb-50">
                <h2 className="section-title text-reveal-anim">
                  Living Space Features
                </h2>
              </div>
            </div>
          </div>

          {/* Feature Items */}
          <div className="row">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="col-xl-4 col-lg-6"
              >
                <div className="feature-box">
                  <div className="thumb">
                    <img
                      src={feature.image}
                      alt={feature.title}
                    />
                  </div>

                  <div className="content-box">
                    <h4 className="title">{feature.title}</h4>
                    <p className="text">
                      Exclusive deals & curated planning luxury
                      escape.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="feature-bottom">
                <p>These popular rooms have a lot to offers!</p>

                <div className="button">
                  <Link to="/page-rooms">
                    View All Rooms{" "}
                    <span>
                      <i className="fa-regular fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Shape */}
        <div className="feature-bg-shape">
          <img
            className="feature-bg-shape-birds"
            src={featureBgShapeBirds}
            alt="Decorative birds shape"
          />
        </div>
      </section>
      {/* Feature area end */}
    </>
  );
};

export default FeatureSection;