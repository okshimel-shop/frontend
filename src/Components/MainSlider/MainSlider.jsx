import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import css from "./MainSlider.module.css";

const MainSlider = () => {
  const settings = {
    showArrows: false,
    showIndicators: false,
    showStatus: false,
    showThumbs: false,
    useKeyboardArrows: false,
    stopOnHover: false,
    dynamicHeight: false,
    autoPlay: true,
    infiniteLoop: true,
    swipeable: false,
    axis: "vertical",
    interval: 5000,
    transitionTime: 500,
  };

  return (
    <ul className={css.main_slider}>
      <Carousel {...settings}>
        <div>
          <img
            className={css.main_slider__img}
            src="https://images.wallpaperscraft.ru/image/ulitsa_nochnoj_gorod_neon_187651_3840x2160.jpg"
            alt=""
          />
          <Link to="/products?page=1" className={css.main_slider__img_link} />
        </div>

        <div>
          <img
            className={css.main_slider__img}
            src="https://images.wallpaperscraft.ru/image/skaly_vid_sverhu_more_187641_3840x2160.jpg"
            alt=""
          />
          <Link to="/products?page=2" className={css.main_slider__img_link} />
        </div>

        <div to="/products?page=1">
          <img
            className={css.main_slider__img}
            src="https://images.wallpaperscraft.ru/image/apelsin_tsitrus_frukt_184594_3840x2160.jpg"
            alt=""
          />
          <Link to="/products?page=3" className={css.main_slider__img_link} />
        </div>
      </Carousel>
    </ul>
  );
};

export default MainSlider;
