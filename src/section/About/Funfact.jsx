import React from "react";
import CounterUp from "../../lib/CounterUp";

const funfacts = [
  {
    id: 1,
    number: 258,
    suffix: "",
    title: "Luxury Rooms",
  },
  {
    id: 2,
    number: 25,
    suffix: "k",
    title: "Five Star Ratings",
  },
  {
    id: 3,
    number: 25,
    suffix: "k",
    title: "Five Star Ratings",
  },
  {
    id: 4,
    number: 2,
    suffix: "m",
    title: "Served Breakfast",
  },
];

export default function FunfactSectionResort() {
  return (
      <section className="fanfact-section pt-240 pb-200">
        <div className="outer-box">
          <div className="row g-4 g-xl-0">
            {funfacts.map((item) => (
              <div
                key={item.id}
                className="col-md-6 col-xl-3">
                <div
                  className="fanfact-block"
                  data-speed=".9">
                  <h3 className="title count-box">
                    <CounterUp end={item.number} />
                    {item.suffix}
                  </h3>
                  <span className="sub-title">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
  </section>
  );
}