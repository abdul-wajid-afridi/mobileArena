import React from "react";
import "../styles/Footer.css";
import logo from "../images/concept1.png";
import {
  FaFacebook,
  FaInstagram,
  FaMap,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer">
        {/* address */}
        <div className="footer__address">
          <h4>Mobile Arena</h4>
          <p> -kpk peshawar saddar</p>
          <p> -office no 45 denz tower</p>
          <p> -pakistan</p>
        </div>
        {/* links */}
        <div className="footer__link">
          <div>
            <p>mobilearena@gmail.com</p>
          </div>
          <div className="footer__socials">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaWhatsapp />
            </span>
          </div>
        </div>
        <p className="footer__rights">
          All Rights Reserved <span>Mobile Arena</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
