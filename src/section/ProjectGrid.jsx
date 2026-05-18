import React from "react";
import { Link } from "react-router-dom";
import room21 from "../assets/images/resource/room2-1.jpg";
import room22 from "../assets/images/resource/room2-2.jpg";
import room23 from "../assets/images/resource/room2-3.jpg";

const rooms = [
  {
    id: 1,
    image: room21,
    title: "Barbados Dream",
    category: "Tourism",
    area: "2100 Sq Ft",
    type: "Resort",
    standard: "Standard",
    link: "/room-details",
  },
  {
    id: 2,
    image: room22,
    title: "River Lounge Bar",
    category: "Tourism",
    area: "2100 Sq Ft",
    type: "Resort",
    standard: "Standard",
    link: "/room-details",
  },
  {
    id: 3,
    image: room23,
    title: "King Size Bed",
    category: "Tourism",
    area: "2100 Sq Ft",
    type: "Resort",
    standard: "Standard",
    link: "/room-details",
  },
  {
    id: 4,
    image: room23,
    title: "King Size Bed",
    category: "Tourism",
    area: "2100 Sq Ft",
    type: "Resort",
    standard: "Standard",
    link: "/room-details",
  },
  {
    id: 5,
    image: room21,
    title: "Barbados Dream",
    category: "Tourism",
    area: "2100 Sq Ft",
    type: "Resort",
    standard: "Standard",
    link: "/room-details",
  },
  {
    id: 6,
    image: room22,
    title: "River Lounge Bar",
    category: "Tourism",
    area: "2100 Sq Ft",
    type: "Resort",
    standard: "Standard",
    link: "/room-details",
  },
];

const RoomSectionIsland = () => {
  return (
    <section className="room-section-island pt-100 pb-100">
      <div className="container">
        <div className="row">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="col-lg-4 col-md-6">
              <div className="room-block-island">
                <div className="inner-block">
                  <div className="image-box">
                    <figure className="image-1">
                      <img
                        src={room.image}
                        alt={room.title}
                      />
                    </figure>
                  </div>
                  <div className="content-box">
                    <ul className="feature-list">
                      <li>
                        <i className="fa-classic fa-light fa-arrow-up-right-from-square"></i>{" "}
                        {room.area}
                      </li>
                      <li>
                        <i className="fa-classic fa-light fa-hotel"></i>{" "}
                        {room.type}
                      </li>
                      <li>
                        <i className="fa-classic fa-light fa-triangle"></i>{" "}
                        {room.standard}
                      </li>
                    </ul>
                    <h4 className="title">{room.title}</h4>
                    <div className="category">
                      {room.category}
                    </div>
                  </div>
                  <Link
                    to={room.link}
                    className="btn-learn-more">
                    Learn More{" "}
                    <i className="icon far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomSectionIsland;