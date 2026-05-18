import React from "react";
import { Link } from "react-router-dom";
import team01 from "../assets/images/mountain/team/team-01.jpg";
import team02 from "../assets/images/mountain/team/team-02.jpg";
import team03 from "../assets/images/mountain/team/team-03.jpg";
import team04 from "../assets/images/mountain/team/team-04.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Amelia Ava",
    image: team01,
    profileLink: "/page-team-details",
    linkedinLink: "/page-about",
  },
  {
    id: 2,
    name: "Amelia Ava",
    image: team02,
    profileLink: "/page-team-details",
    linkedinLink: "/page-about",
  },
  {
    id: 3,
    name: "Amelia Ava",
    image: team03,
    profileLink: "/page-team-details",
    linkedinLink: "/page-about",
  },
  {
    id: 4,
    name: "Amelia Ava",
    image: team04,
    profileLink: "/page-team-details",
    linkedinLink: "/page-about",
  },
];

const MountainTeam = () => {
  return (
    <section className="mountain-team fix pt-100 pt-md-80 pb-120 pb-md-80">
      <div className="container">
        <div className="team-wrapper">
          <div className="row">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="col-xl-3 col-lg-4 col-md-6">
                <div className="mountain-team-block">
                  <img src={member.image} alt={member.name} />
                  <img src={member.image} alt={member.name} />
                  <h3
                    className="title"
                    style={{
                      color: "var(--theme-color-light)",
                    }}>
                    <Link to={member.profileLink}>
                      {member.name}
                    </Link>
                  </h3>
                  <Link
                    className="theme-btn-main"
                    to={member.linkedinLink}>
                    <span className="icon">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </span>
                    <span className="text">LinkedIn</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MountainTeam;