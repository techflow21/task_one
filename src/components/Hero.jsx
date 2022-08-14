import React from "react";
import "../assets/css/Hero.css";
import indo_chicken from "../assets/images/Rectangle 82 (5).png";
import semo_meat from "../assets/images/Rectangle 82.png";
import coconut_rice from "../assets/images/Rectangle 82 (1).png";
import yellow_eba from "../assets/images/Rectangle 82 (2).png";
import beans_plate from "../assets/images/Rectangle 82 (3).png";
import scotch_egg from "../assets/images/Rectangle 82 (4).png";

const Hero = () => {
  return (
    <div className="hero__wrapper">
      <div className="hero__wrapper__text">
        <h4>MENU</h4>
      </div>
      <div className="menu__container">
        <h3 className="menu">Current menu</h3>
        <div className="hero__menu">
          <ul>
            <li className="menu__all">All</li>
            <li>Rice</li>
            <li>Beans</li>
            <li>Fries</li>
            <li>Swallow</li>
            <li>Others</li>
          </ul>
        </div>
      </div>

      <div className="hero__container">
        <ul class="food-menu-list">
          <li>
            <div class="food-menu-card">
              <div class="card-banner">
                <img
                  src={indo_chicken}
                  width="300"
                  height="220"
                  loading="lazy"
                  alt="Jollof Rice and Chicken"
                  class="w-100"
                />
              </div>
              <h3 className="card-title">Jollof Rice and Chicken</h3>
              <p class="category">
                Fried potato/yam chips with egg sauce or any tooping of your
                choice
              </p>
              <div className="price-wrapper">
                <data className="price">$1,500</data>
              </div>
            </div>
          </li>
          <li>
            <div class="food-menu-card">
              <div class="card-banner">
                <img
                  src={semo_meat}
                  width="300"
                  height="220"
                  loading="lazy"
                  alt="Fried Chicken Unlimited"
                  class="w-100"
                />
              </div>
              <h3 className="card-title">Swallow with Draw Soup</h3>
              <p class="category">
                Fried potato/yam chips with egg sauce or any tooping of your
                choice
              </p>
              <div className="price-wrapper">
                <data className="price">$1000</data>
              </div>
            </div>
          </li>
          <li>
            <div class="food-menu-card">
              <div class="card-banner">
                <img
                  src={coconut_rice}
                  width="300"
                  height="220"
                  loading="lazy"
                  alt="Fried Chicken Unlimited"
                  class="w-100"
                />
              </div>
              <h3 className="card-title">Fries with Egg sauce</h3>
              <p class="category">
                Fried potato/yam chips with egg sauce or any tooping of your
                choice
              </p>
              <div className="price-wrapper">
                <data className="price">$1,500</data>
              </div>
            </div>
          </li>
          <li>
            <div class="food-menu-card">
              <div class="card-banner">
                <img
                  src={yellow_eba}
                  width="300"
                  height="220"
                  loading="lazy"
                  alt="Fried Chicken Unlimited"
                  class="w-100"
                />
              </div>
              <h3 className="card-title">Swallow with Egusi Soup</h3>
              <p class="category">Nicely cooked egusi soup and eba</p>
              <div className="price-wrapper">
                <data className="price">$1000</data>
              </div>
            </div>
          </li>
          <li>
            <div class="food-menu-card">
              <div class="card-banner">
                <img
                  src={beans_plate}
                  width="300"
                  height="220"
                  loading="lazy"
                  alt="Fried Chicken Unlimited"
                  class="w-100"
                />
              </div>
              <h3 className="card-title">Beans</h3>
              <p class="category">
                Fried potato/yam chips with egg sauce or any tooping of your
                choice
              </p>
              <div className="price-wrapper">
                <data className="price">$700</data>
              </div>
            </div>
          </li>
          <li>
            <div class="food-menu-card">
              <div class="card-banner">
                <img
                  src={scotch_egg}
                  width="300"
                  height="220"
                  loading="lazy"
                  alt="Fried Chicken Unlimited"
                  class="w-100"
                />
              </div>
              <h3 className="card-title">Fried Rice</h3>
              <p class="category">
                Fried potato/yam chips with egg sauce or any tooping of your
                choice
              </p>
              <div className="price-wrapper">
                <data className="price">$600</data>
              </div>
            </div>
          </li>
        </ul>
        <button className="full__menu_btn">Full Menu</button>
      </div>
    </div>
  );
};

export default Hero;
