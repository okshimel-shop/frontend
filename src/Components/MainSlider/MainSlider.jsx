import React from "react";
import Slider from "infinite-react-carousel";
import css from "./MainSlider.module.css";

const MainSlider = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    duration: 200,
    pauseOnHover: true,
    swipe: false,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            className={css.sliderImg}
            src="https://images.wallpaperscraft.ru/image/ulitsa_nochnoj_gorod_neon_187651_3840x2160.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={css.sliderImg}
            src="https://images.wallpaperscraft.ru/image/skaly_vid_sverhu_more_187641_3840x2160.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className={css.sliderImg}
            src="https://images.wallpaperscraft.ru/image/apelsin_tsitrus_frukt_184594_3840x2160.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;
