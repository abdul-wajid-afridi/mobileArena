import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/HomeCard.css";
const HomeCard = ({ image, name, role, education }) => {
  return (
    <div className="homecard">
      <div className="homecard__img">
        <img src={image} alt={name} />
        <div className="homecard__icons">
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaInstagram />
          </span>

          <span>
            <FaLinkedin />
          </span>
        </div>
      </div>
      <div className="homecard__details">
        <h5>{name}</h5>
        <p>{role}</p>
        <p>{education}</p>
      </div>
    </div>
  );
};

export default HomeCard;
