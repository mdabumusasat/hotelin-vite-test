
import React from "react";
import { Link } from "react-router-dom";
import servicesImage1 from "../assets/images/winter/service/service-image1.jpg";
import servicesImage2 from "../assets/images/winter/service/service-image2.jpg";
import servicesImage3 from "../assets/images/winter/service/service-image3.jpg";

const services = [
  {
    id: 1,
    title: "Glide Rentals",
    description: "Helping businesses navigate the right technology choices.",
    image: servicesImage1,
    icon: "flaticon-light",
    link: "/page-service-details",
    imageFirst: true,
  },
  {
    id: 2,
    title: "Elite Mountain",
    description: "Helping businesses navigate the right technology choices.",
    image: servicesImage3,
    icon: "flaticon-table-2",
    link: "/page-service-details",
    imageFirst: false,
  },
  {
    id: 3,
    title: "Ski & Ride",
    description: "Helping businesses navigate the right technology choices.",
    image: servicesImage2,
    icon: "flaticon-travel",
    link: "/page-service-details",
    imageFirst: true,
  },
];

const ServiceCard = ({ service }) => {
  const imageElement = (
    <figure className={`image ${service.imageFirst ? "mb-4" : ""}`}>
      <Link to={service.link}>
        <img src={service.image} alt={service.title} />
      </Link>
    </figure>
  );

  const contentElement = (
    <div
      className={`service-block-winter ${
        !service.imageFirst ? "mb-4" : ""
      }`}
    >
      <div className="icon">
        <i className={service.icon}></i>
      </div>

      <div className="sub-icon">
        <i className={service.icon}></i>
      </div>

      <h4 className="title">
        <Link to={service.link}>{service.title}</Link>
      </h4>

      <p className="text">
        Helping businesses navigate the right <br />
        technology choices.
      </p>
    </div>
  );

  return (
    <div className="col-lg-4">
      {service.imageFirst ? (
        <>
          {imageElement}
          {contentElement}
        </>
      ) : (
        <>
          {contentElement}
          {imageElement}
        </>
      )}
    </div>
  );
};

const ServiceSectionWinter = () => {
  return (
    <section className="service-section-winter pt-120 pb-120 pt-md-80 pb-md-80">
      <div className="container">
        <div className="row g-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionWinter;