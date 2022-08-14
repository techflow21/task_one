import React from "react";
import "../assets/css/Blog.css";
import chicken_veg from "../assets/images/Rectangle 69.png";
import onion_salad from "../assets/images/Rectangle 70.png";
import pao_chicken from "../assets/images/Rectangle 71.png";

const Blog = () => {
  return (
    <div>
      <div className="blog__container">
        <div className="food__menu_h2">Blog Our Latest News</div>
        <div className="food__menu_p">
          <p>
            Have you ever browsed food blogs like mine and wondered how to start
            a food blog of your very own?{" "}
          </p>
        </div>
        <ul class="food-menu-list">
          <li>
            <div class="food-menu-card">
              <div class="card-banner">
                <img
                  src={chicken_veg}
                  width="270"
                  height="200"
                  loading="lazy"
                  alt="Jollof Rice and Chicken"
                  class="w-100"
                />
              </div>
              <div className="title__date">
                <p>Design</p>
                <span>01 October 2019</span>
              </div>
              <h3 className="card-title">Jollof Rice and Chicken</h3>
              <p class="category">
                Fried potato/yam chips with egg sauce or any tooping of your
                choice
              </p>
              <div className="more-wrapper">
                <p className="more">READ MORE</p>
              </div>
            </div>
          </li>
          <li>
            <div class="food-menu-card">
              <div class="card-banner">
                <img
                  src={onion_salad}
                  width="270"
                  height="200"
                  loading="lazy"
                  alt="Jollof Rice and Chicken"
                  class="w-100"
                />
              </div>
              <div className="title__date">
                <p>Design</p>
                <span>01 October 2019</span>
              </div>
              <h3 className="card-title">Jollof Rice and Chicken</h3>
              <p class="category">
                Fried potato/yam chips with egg sauce or any tooping of your
                choice
              </p>
              <div className="more-wrapper">
                <p className="more">READ MORE</p>
              </div>
            </div>
          </li>
          <li>
            <div class="food-menu-card">
              <div class="card-banner">
                <img
                  src={pao_chicken}
                  width="270"
                  height="200"
                  loading="lazy"
                  alt="Jollof Rice and Chicken"
                  class="w-100"
                />
              </div>
              <div className="title__date">
                <p>Design</p>
                <span>01 October 2019</span>
              </div>
              <h3 className="card-title">Jollof Rice and Chicken</h3>
              <p class="category">
                Fried potato/yam chips with egg sauce or any tooping of your
                choice
              </p>
              <div className="more-wrapper">
                <p className="more">READ MORE</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
