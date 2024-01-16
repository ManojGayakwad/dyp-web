/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const FacultyCard = ({ id, name, designation, imageSrc, profileLink }) => (
  <div className="offset-0 col-lg-3 col-sm-6">
    <Link to={`/faculty/${id}`} className="text-decoration-none text-reset">
      <div
        className="team-card team_style1 box_shadow1 animation animated fadeInUp m-1 mb-5"
        data-animation="fadeInUp"
        data-animation-delay="0.7s"
        style={{ animationDelay: "0.01s", opacity: 1 }}
      >
      <div className="team-card__img-box">
        <img className="team-card__img" src={imageSrc} alt={name} />
      </div>
      <div className="team-card__content">
        <div className="team-card__intro">
          <h5 className="team-card__title">{name}</h5>
          <span className="team-card__desc">{designation}</span>
        </div>
      </div>
      </div>
    </Link>
  </div>
);

export default FacultyCard;
