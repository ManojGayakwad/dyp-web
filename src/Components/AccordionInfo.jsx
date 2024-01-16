/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Accordion from "react-bootstrap/Accordion";

function AccordionInfo({ facultyDetails }) {
  return (
    <Accordion defaultActiveKey="0" alwaysOpen>

      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="header-container">
            <div className="accordion-title h6">Education</div>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <ul>
            {facultyDetails.education.map((item, index) => (
              <li key={index} className="font-weight-bold h6">
                {item}
              </li>
            ))}
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <div className="header-container">
            <div className="accordion-title h6">Professional Experience</div>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          {facultyDetails.professionalExperience.map((item, index) => {
            return (
              <p key={index} className="font-weight-bold h6">
                {item}
              </p>
            );
          })}
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <div className="header-container">
            <div className="accordion-title h6">Research Areas(s)</div>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          {facultyDetails.researchAreas.map((item, index) => {
            return (
              <p key={index} className="font-weight-bold h6">
                {item}
              </p>
            );
          })}
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <div className="header-container">
            <div className="accordion-title h6">Key Publications</div>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          {facultyDetails.keyPublications.map((item, index) => {
            return (
              <p key={index} className="font-weight-bold h6">
                {item.type}
              </p>
            );
          })}
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <div className="header-container">
            <div className="accordion-title h6">Professional Distinctions</div>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          {facultyDetails.education.map((item, index) => {
            return (
              <p key={index} className="font-weight-bold h6">
                {item}
              </p>
            );
          })}
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>
          <div className="header-container">
            <div className="accordion-title h6">Key Research Projects</div>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          {facultyDetails.education.map((item, index) => {
            return (
              <p key={index} className="font-weight-bold h6">
                {item}
              </p>
            );
          })}
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default AccordionInfo;
