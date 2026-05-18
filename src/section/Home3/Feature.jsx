import React from "react";
import { Link } from "react-router-dom";
import featureImg1 from "../../assets/images/resort/feature/1.jpg";
import featureImg2 from "../../assets/images/resort/feature/2.jpg";
import featureImg3 from "../../assets/images/resort/feature/3.jpg";
import featureImg4 from "../../assets/images/resort/feature/4.jpg";

const featureItems = [
  {
    id: 1,
    number: "01",
    title: "Food & Beverage",
    image: featureImg1,
    link: "/page-service-details",
  },
  {
    id: 2,
    number: "02",
    title: "Lifestyle",
    image: featureImg2,
    link: "/page-service-details",
  },
  {
    id: 3,
    number: "03",
    title: "Food & Beverage",
    image: featureImg3,
    link: "/page-service-details",
  },
  {
    id: 4,
    number: "04",
    title: "Videography",
    image: featureImg4,
    link: "/page-service-details",
  },
];

export default function FeatureSectionResort() {
  return (
    <section className="feature-section-resort section-padding">
      <div className="container">
        <div className="sec-title mb-60">
          <h2 className="title">SERVICE AREAS</h2>
        </div>
        <div className="feature-block-resort">
          {featureItems.map((item) => (
            <div key={item.id} className="list-item">
              <div className="left">
                <span className="number">{item.number}</span>
                <h3 className="title">{item.title}</h3>
              </div>
              <Link to={item.link} className="more-btn">
                <span>More Details</span>
                <i className="fa-solid fa-plus"></i>
              </Link>
              <div
                className="hover-image"
                style={{ backgroundImage: `url(${item.image})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}