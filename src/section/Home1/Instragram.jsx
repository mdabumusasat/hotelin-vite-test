import React from "react";
import { Link } from "react-router-dom";
import instagramThumb1 from "../../assets/images/instragram/instragram-thumb1.jpg";
import instagramThumb2 from "../../assets/images/instragram/instragram-thumb2.jpg";
import instagramThumb3 from "../../assets/images/instragram/instragram-thumb3.jpg";
import instagramThumb4 from "../../assets/images/instragram/instragram-thumb4.jpg";
import instagramThumb5 from "../../assets/images/instragram/instragram-thumb5.jpg";
import instagramThumb6 from "../../assets/images/instragram/instragram-thumb6.jpg";

// Instagram Images Data
const instagramImages = [
  {
    id: 1,
    image: instagramThumb1,
    delay: 200,
  },
  {
    id: 2,
    image: instagramThumb2,
    delay: 300,
  },
  {
    id: 3,
    image: instagramThumb3,
    delay: 400,
  },
  {
    id: 4,
    image: instagramThumb4,
    delay: 500,
  },
  {
    id: 5,
    image: instagramThumb5,
    delay: 600,
  },
  {
    id: 6,
    image: instagramThumb6,
    delay: 700,
  },
];

const InstagramSection = () => {
  return (
    <section className="instragram-area">
      <div className="container-fluid gx-4">
        <div className="row gx-3">
          {instagramImages.map((item) => (
            <div
              key={item.id}
              className="col-xl-2 col-lg-4 col-sm-6"
            >
              <div className="instragram-wrapper">
                <div className="instragram-thumb">
                  <img
                    src={item.image}
                    alt={`Instagram ${item.id}`}
                  />

                  <div className="instragram-button">
                    <Link
                      to="#"
                      aria-label="Instagram Post"
                    >
                      <i className="fa-brands fa-instagram"></i>
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

export default InstagramSection;