import React from "react";
import profile_img from "../assets/images/Image.png";
import quoteIcon from "../assets/images/Icon Color.png";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import "../assets/css/Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial__wrapper">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonial__container">
            <div className="testimonial__text">
              <h2>What our customers say about us</h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum.
              </p>
            </div>
            <div className="testimonial__card">
              <div className="profile">
                <div className="profile__img">
                  <img src={profile_img} alt="img" className="img" />
                </div>
                <h3>John Samson</h3>
                <p>ENUGU, NIGERIA</p>
              </div>
              <div className="card__text">
                <div className="quoteIcon">
                  <img src={quoteIcon} alt="quoteIcon" />
                </div>
                <div className="main__text">
                  <p>
                    White dwarf a still more glorious dawn awaits tingling of
                    the spine emerged into conciousness Vangelis shores of the
                    cosmic ocean. Tendrills of gossamer clouds kindling the
                    energy hidden in matter concept of the number one
                    performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial__container">
            <div className="testimonial__text">
              <h2>What our customers say about us</h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum.
              </p>
            </div>
            <div className="testimonial__card">
              <div className="profile">
                <div className="profile__img">
                  <img src={profile_img} alt="img" className="img" />
                </div>
                <h3>John Samson</h3>
                <p>ENUGU, NIGERIA</p>
              </div>
              <div className="card__text">
                <div className="quoteIcon">
                  <img src={quoteIcon} alt="quoteIcon" />
                </div>
                <div className="main__text">
                  <p>
                    White dwarf a still more glorious dawn awaits tingling of
                    the spine emerged into conciousness Vangelis shores of the
                    cosmic ocean. Tendrills of gossamer clouds kindling the
                    energy hidden in matter concept of the number one
                    performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial__container">
            <div className="testimonial__text">
              <h2>What our customers say about us</h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum.
              </p>
            </div>
            <div className="testimonial__card">
              <div className="profile">
                <div className="profile__img">
                  <img src={profile_img} alt="img" className="img" />
                </div>
                <h3>John Samson</h3>
                <p>ENUGU, NIGERIA</p>
              </div>
              <div className="card__text">
                <div className="quoteIcon">
                  <img src={quoteIcon} alt="quoteIcon" />
                </div>
                <div className="main__text">
                  <p>
                    White dwarf a still more glorious dawn awaits tingling of
                    the spine emerged into conciousness Vangelis shores of the
                    cosmic ocean. Tendrills of gossamer clouds kindling the
                    energy hidden in matter concept of the number one
                    performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial__container">
            <div className="testimonial__text">
              <h2>What our customers say about us</h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum.
              </p>
            </div>
            <div className="testimonial__card">
              <div className="profile">
                <div className="profile__img">
                  <img src={profile_img} alt="img" className="img" />
                </div>
                <h3>John Samson</h3>
                <p>ENUGU, NIGERIA</p>
              </div>
              <div className="card__text">
                <div className="quoteIcon">
                  <img src={quoteIcon} alt="quoteIcon" />
                </div>
                <div className="main__text">
                  <p>
                    White dwarf a still more glorious dawn awaits tingling of
                    the spine emerged into conciousness Vangelis shores of the
                    cosmic ocean. Tendrills of gossamer clouds kindling the
                    energy hidden in matter concept of the number one
                    performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial__container">
            <div className="testimonial__text">
              <h2>What our customers say about us</h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum.
              </p>
            </div>
            <div className="testimonial__card">
              <div className="profile">
                <div className="profile__img">
                  <img src={profile_img} alt="img" className="img" />
                </div>
                <h3>John Samson</h3>
                <p>ENUGU, NIGERIA</p>
              </div>
              <div className="card__text">
                <div className="quoteIcon">
                  <img src={quoteIcon} alt="quoteIcon" />
                </div>
                <div className="main__text">
                  <p>
                    White dwarf a still more glorious dawn awaits tingling of
                    the spine emerged into conciousness Vangelis shores of the
                    cosmic ocean. Tendrills of gossamer clouds kindling the
                    energy hidden in matter concept of the number one
                    performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
