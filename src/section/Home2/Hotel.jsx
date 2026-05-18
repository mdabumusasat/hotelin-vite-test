import React from "react";
import hotelImage from "../../assets/images/mountain/hotel-image.jpg";

// Activities Data
const activities = [
  {
    id: 1,
    title: "Outdoor Wedding",
    author: "Habib Hemel",
    image: hotelImage,
    delay: "200",
  },
  {
    id: 2,
    title: "Meeting Event",
    author: "Jake Weary",
    image: hotelImage,
    delay: "400",
  },
  {
    id: 3,
    title: "Bar & Restaurants",
    author: "Lurch Schpellchek",
    image: hotelImage,
    delay: "600",
  },
  {
    id: 4,
    title: "Swimming Pool",
    author: "Russell Sprout",
    image: hotelImage,
    delay: "200",
  },
  {
    id: 5,
    title: "Fitness Centre",
    author: "Burgundy Flemming",
    image: hotelImage,
    delay: "400",
  },
];

const HotelActivitySection = () => {
  return (
    <section className="hotel-activity-section section-padding pt-0">
      <div className="container">
        <div className="hotel-activity-wrapper-mountain">
          <div className="sec-title text-center tx-title sec_title tz-itm-title tz-itm-anim">
            <h2 className="font-weight-300">Hotel Activity</h2>
          </div>
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={`hotel-activity-items-mountain ${
                index === activities.length - 1 ? "mb-0" : ""
              }`}
            >
              <h3>{activity.title}</h3>

              <div className="hotel-text">
                <span>{activity.author}</span>
              </div>
              <div
                className="hover-image d-none d-md-block bg-cover"
                style={{
                  backgroundImage: `url(${activity.image})`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelActivitySection;