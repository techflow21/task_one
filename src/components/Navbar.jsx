import React from "react";
import "../assets/css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoIcon from "../assets/images/Vector (5).png";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <div className="navbar__container">
        <div className="navbar__brand">
          <ul>
            <li className="logo__img">
              <img src={logoIcon} alt="Logo" className="logoImg" />
            </li>
            <li className="logo__name">Meals</li>
          </ul>
        </div>
        <div className="navbar__menu">
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Meal Plans</li>
          </ul>
        </div>
        <div className="create__account">
          <FontAwesomeIcon icon={faSearch} className="searchIcon" />
          <FontAwesomeIcon icon={faCartShopping} className="cartIcon" />
          <button className="login">Sign In</button>
          <button className="create">Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
