import React from "react";
import Slider from "infinite-react-carousel";
import css from "./SliderBar.module.css";

const SliderBar = () => {
  const settings = {
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    duration: 500,
    pauseOnHover: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            className={css.sliderImg}
            src="https://static9.depositphotos.com/1006075/1197/i/450/depositphotos_11973672-stock-photo-cupcakes.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={css.sliderImg}
            src="https://www.ejin.ru/wp-content/uploads/2018/11/fshshshshshshshsh-e1542184507336.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={css.sliderImg}
            src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderBar;
