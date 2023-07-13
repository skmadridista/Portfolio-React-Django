import React from "react";
import { FaPhone, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Offcanvas } from "react-bootstrap";
import "../static/css/icons.css";

const Contact = ({ show, handleClose }) => {
  const phoneNumber = "750-943-3323";
  const linkedinUrl = "https://www.linkedin.com/in/sauban-khan";
  const emailAddress = "saubankhan1997@gmail.com";

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className="offcanvas-container"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Contact Details</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="icons-container">
          <p>
            <FaLinkedin title="LinkedIn" />
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
          <p>
            <FaEnvelope title="Email" />
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </p>
          <p>
            <FaPhone title="Phone number" />
            Phone number: {phoneNumber}
          </p>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Contact;
