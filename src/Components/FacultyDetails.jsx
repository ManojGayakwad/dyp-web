/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import FacultyProfile from "./FacultyProfile";
import AccordionInfo from "./AccordionInfo.jsx";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import facultyData from "../data.js";
import "../index.css";

function FacultyDetails() {
  const { id } = useParams();

  const getDetails = (facultyId) => {
    return facultyData.find((faculty) => faculty.id === parseInt(facultyId));
  };

  const facultyDetails = getDetails(id);

  if (!facultyDetails) {
    return <div>Faculty not found</div>;
  }

  return (
    <div
      className="container ml-auto mr-auto mt-4 p-4"
      style={{ maxWidth: "83%" }}
    >
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-lg-4 col-md-6">
          {" "}
          <FacultyProfile faculty={facultyDetails} />
        </div>

        <div className="col-lg-8 col-md-6">
          {" "}
          <AccordionInfo facultyDetails={facultyDetails} />
        </div>
      </div>
    </div>
  );
}

export default FacultyDetails;
