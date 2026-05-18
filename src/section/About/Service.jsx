import React from "react";
import { Link } from "react-router-dom";
import service1 from "../../assets/images/resort/service/service-image1.jpg";
import service2 from "../../assets/images/resort/service/service-image2.jpg";
import service3 from "../../assets/images/resort/service/service-image3.jpg";
import service4 from "../../assets/images/resort/service/service-image4.jpg";

const services = [
  {
    id: 1,
    icon: "flaticon-bed-2",
    title: "Restaurant",
    image: service1,
  },
  {
    id: 2,
    icon: "flaticon-pool",
    title: "Swimming Pool",
    image: service2,
  },
  {
    id: 3,
    icon: "flaticon-weights",
    title: "Fitness Centre",
    image: service3,
  },
  {
    id: 4,
    icon: "flaticon-hanger",
    title: "Laundry Service",
    image: service4,
  },
];

const serviceDescription =
  "We provide professional reliable & hassle-free dry cleaning & laundry services tailored to your needs.";

export default function ServiceSectionResort() {
  return (
    <section className="service-section-resort pt-120 pb-120 px-5">
      <div className="row g-4">
        {services.map((service) => (
          <div key={service.id} className="col-lg-6 col-xl-4 col-xxl-3">
            <div className="service-block-resort tp_fade_bottom">
              <div className="icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="title">{service.title}</h3>
              <p className="text">{serviceDescription}</p>
              <Link to="/page-service-details" className="more-btn">
                More Details{" "}
                <i className="fa-light fa-arrow-up-right"></i>
              </Link>
              <div className="image">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-100"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}