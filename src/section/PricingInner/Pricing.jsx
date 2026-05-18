
import React from "react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    id: 1,
    title: "Single Room",
    price: 29,
    priceLabel: "Per Room",
    link: "/page-pricing",
    features: [
      "Pick & Drop Service",
      "Swimming Pool",
      "City Tour Guide",
      "Fibre Internet",
      "Book Flights Online",
      "Book Hotel Rooms",
    ],
  },
  {
    id: 2,
    title: "Double Room",
    price: 40,
    priceLabel: "Per Room",
    link: "/page-pricing",
    features: [
      "Pick & Drop Service",
      "Swimming Pool",
      "City Tour Guide",
      "Fibre Internet",
      "Book Flights Online",
      "Book Hotel Rooms",
    ],
  },
  {
    id: 3,
    title: "Family Room",
    price: 99,
    priceLabel: "Per Room",
    link: "/page-pricing",
    features: [
      "Pick & Drop Service",
      "Swimming Pool",
      "City Tour Guide",
      "Fibre Internet",
      "Book Flights Online",
      "Book Hotel Rooms",
    ],
  },
];

const PricingSectionFour = () => {
  return (
    <section className="pricing-section-four">
      <div className="auto-container">
        <div className="row">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="pricing-block-four col-md-6 col-lg-4"
            >
              <div className="inner-box">
                <div className="content-column">
                  <div className="inner-column wow fadeInLeft">
                    <span className="pricing-title">{plan.title}</span>

                    <h6 className="pricing-amount">
                      <sup>$</sup>
                      {plan.price} <span>{plan.priceLabel}</span>
                    </h6>

                    <ul className="list-style-two">
                      {plan.features.map((feature, index) => (
                        <li key={index}>
                          <i className="icon fa-solid fa-circle-check" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={plan.link}
                      className="book-now btn-style-four"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSectionFour;