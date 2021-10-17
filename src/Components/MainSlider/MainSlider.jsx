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
    axis: "horizontal",
    interval: 10000,
    transitionTime: 250,
  };

  return (
    <ul className={css.main_slider}>
      <Carousel {...settings}>
        <div>
          <img
            className={css.main_slider__img}
            src={
              process.env.NODE_ENV === "production"
                ? `${process.env.REACT_APP_PRODUCT_SERVER_URL}` +
                  `/banners/main/banner1.jpg`
                : `${process.env.REACT_APP_LOCAL_SERVER_URL}` +
                  `/banners/main/banner1.jpg`
            }
            alt=""
          />
          <Link to="/products?page=1" className={css.main_slider__img_link} />
        </div>

        <div>
          <img
            className={css.main_slider__img}
            src={
              process.env.NODE_ENV === "production"
                ? `${process.env.REACT_APP_PRODUCT_SERVER_URL}` +
                  `/banners/main/banner2.jpg`
                : `${process.env.REACT_APP_LOCAL_SERVER_URL}` +
                  `/banners/main/banner2.jpg`
            }
            alt=""
          />
          <Link to="/products?page=2" className={css.main_slider__img_link} />
        </div>

        <div>
          <img
            className={css.main_slider__img}
            src={
              process.env.NODE_ENV === "production"
                ? `${process.env.REACT_APP_PRODUCT_SERVER_URL}` +
                  `/banners/main/banner3.jpg`
                : `${process.env.REACT_APP_LOCAL_SERVER_URL}` +
                  `/banners/main/banner3.jpg`
            }
            alt=""
          />
          <Link to="/products?page=3" className={css.main_slider__img_link} />
        </div>
      </Carousel>
    </ul>
  );
};

export default MainSlider;
