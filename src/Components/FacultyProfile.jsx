/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function FacultyProfile({ faculty }) {
  const { name, designation, imageSrc } = faculty;

  return (
    <div className="">
      <div className="faculty-profile team-card team_style1 box_shadow1 animation fadeInUp">
        <div className="faculty-profile__img-box">
          <img className="faculty-profile__img" src={imageSrc} alt={name} />
        </div>
        <div className="faculty-profile__content">
          <div className="faculty-profile__intro">
            <h5 className="faculty-profile__title">{name}</h5>
            <span className="faculty-profile__desc">{designation}</span>
          </div>
        </div>

        <hr />

        <div className="team_name mt-3">
          <h6 className="m-3 text-muted">Contact info :</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Email :</span>
              <a
                href={`mailto:$`}
                className="text-secondary text-decoration-none text-sm"
              >
                {"demo@gmail.com"}
              </a>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Phone :</span>
              <p className="mb-0">{"1234567890"}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FacultyProfile;
