import React from "react";
import "../assets/css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import indo_chicken from "../assets/images/image 5.png";

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="header__container">
        <div className="header__text">
          <h2>Delicious meals at your convenience</h2>
          <p>
            Order your meals from us and we will have it delivered at your
            doorstep.
          </p>
          <button className="header__button">Get Started</button>
        </div>
        <div className="header__image">
          <div className="header__img">
            <img src={indo_chicken} alt="plate_of_food" className="main__img" />
          </div>
          <div className="callout">
            <FontAwesomeIcon icon={faHeadphones} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
