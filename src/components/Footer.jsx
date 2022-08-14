import React from "react";
import "../assets/css/Footer.css";
import logoIcon from "../assets/images/Vector (5).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer__container">
        <div className="navbar__brand">
          <ul>
            <li className="logo__img">
              <img src={logoIcon} alt="Logo" className="footer__logoImg" />
            </li>
            <li className="footer__logo_name">Meals</li>
          </ul>
        </div>

        <div className="company__links">
          <p className="footer-company">Company</p>
          <ul>
            <li>Blog</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="services__links">
          <p className="footer-services">Services</p>
          <ul>
            <li>FAQs</li>
            <li>Our Menu</li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="copyright">&copy; 2022 Meals. All rights reserved.</p>
        <div className="social__links">
          <ul>
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
