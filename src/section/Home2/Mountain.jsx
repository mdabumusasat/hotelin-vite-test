import React from "react";
import { Link } from "react-router-dom";
import team01 from "../../assets/images/mountain/team/team-01.jpg";
import team02 from "../../assets/images/mountain/team/team-02.jpg";
import team03 from "../../assets/images/mountain/team/team-03.jpg";
import team04 from "../../assets/images/mountain/team/team-04.jpg";

// Team Members Data
const teamMembers = [
  {
    id: 1,
    name: "Amelia Ava",
    image: team01,
    profileUrl: "/page-team-details",
    linkedinUrl: "/page-about",
    delay: "200",
  },
  {
    id: 2,
    name: "Jacob Smith",
    image: team02,
    profileUrl: "/page-team-details",
    linkedinUrl: "/page-about",
    delay: "400",
  },
  {
    id: 3,
    name: "Amelia Ava",
    image: team03,
    profileUrl: "/page-team-details",
    linkedinUrl: "/page-about",
    delay: "600",
  },
  {
    id: 4,
    name: "Amelia Ava",
    image: team04,
    profileUrl: "/page-team-details",
    linkedinUrl: "/page-about",
    delay: "800",
  },
];

const MountainTeamSection = () => {
  return (
    <section className="mountain-team fix section-padding">
      <div className="container">
        <div className="team-wrapper">
          <div className="sec-title text-center tx-title sec_title tz-itm-title tz-itm-anim">
            <h2 className="title mx-auto">Meet Our Guide</h2>
          </div>
          <div className="row">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="col-xl-3 col-lg-4 col-md-6"
              >
                <div className="mountain-team-block">
                  <img
                    src={member.image}
                    alt={member.name}
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                  />

                  {/* Member Name */}
                  <h3 className="title">
                    <Link to={member.profileUrl}>
                      {member.name}
                    </Link>
                  </h3>

                  {/* LinkedIn Button */}
                  <Link
                    to={member.linkedinUrl}
                    className="theme-btn-main"
                  >
                    <span className="icon">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </span>
                    <span className="text">LinkedIn</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="team-button">
            <Link
              to="/page-team"
              className="theme-btn-eight d-grid mx-auto"
            >
              <span className="royle-btn__text d-flex justify-content-between">
                View all Agent
                <i className="icon lnr-icon-arrow-right"></i>
              </span>

              <span className="royle-btn__hover royle-btn__hover--1"></span>
              <span className="royle-btn__hover royle-btn__hover--2"></span>
              <span className="royle-btn__hover royle-btn__hover--3"></span>
              <span className="royle-btn__hover royle-btn__hover--4"></span>
              <span className="royle-btn__hover royle-btn__hover--5"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MountainTeamSection;