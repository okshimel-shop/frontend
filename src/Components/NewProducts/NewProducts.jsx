import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import css from "../../helpers/sliders.module.css";

const NewProducts = () => {
  const settings = {
    breakpoints: [
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
        },
      },
    ],
    animationDuration: 500,
    arrows: true,
    dots: false,
    slidesToScroll: 4,
    slidesToShow: 4,
    slidesSpacing: 0,
    swipe: false,
  };

  return (
    <section className={css.sliders}>
      <div className={css.sliders__wrapper}>
        <h2 className={css.sliders__title}>Новые товары</h2>
        <ul className={css.sliders__list}>
          <InfiniteCarousel {...settings}>
            <div className={css.sliders__list_item}>
              <img
                className={css.sliders__list_item_img}
                src="https://loremflickr.com/320/240?random=17"
                alt="no-img"
              />
              <h3 className={css.sliders__list_item_title}>
                Маска волк для детских утренни
              </h3>
              <div className={css.sliders__list_item_wrapper}>
                <p className={css.sliders__list_item_price}>120</p>
                <div className={css.sliders__list_item_favourite_wraper}>
                  <button className={css.sliders__list_item_favourite}></button>
                  <button className={css.sliders__list_item_btn}></button>
                </div>
              </div>
            </div>
            <div className={css.sliders__list_item}>
              <img
                className={css.sliders__list_item_img}
                src="https://loremflickr.com/320/240?random=18"
                alt="no-img"
              />
              <h3 className={css.sliders__list_item_title}>
                Карнавальная маска мишки для детей
              </h3>
              <div className={css.sliders__list_item_wrapper}>
                <p className={css.sliders__list_item_price}>150</p>
                <div className={css.sliders__list_item_favourite_wraper}>
                  <button className={css.sliders__list_item_favourite}></button>
                  <button className={css.sliders__list_item_btn}></button>
                </div>
              </div>
            </div>
            <div className={css.sliders__list_item}>
              <img
                className={css.sliders__list_item_img}
                src="https://loremflickr.com/320/240?random=19"
                alt="no-img"
              />
              <h3 className={css.sliders__list_item_title}>
                Карнавальная маска мишки для детей
              </h3>
              <div className={css.sliders__list_item_wrapper}>
                <p className={css.sliders__list_item_price}>100</p>
                <div className={css.sliders__list_item_favourite_wraper}>
                  <button className={css.sliders__list_item_favourite}></button>
                  <button className={css.sliders__list_item_btn}></button>
                </div>
              </div>
            </div>
            <div className={css.sliders__list_item}>
              <img
                className={css.sliders__list_item_img}
                src="https://loremflickr.com/320/240?random=20"
                alt="no-img"
              />
              <h3 className={css.sliders__list_item_title}>
                Карнавальная маска мишки для детей
              </h3>
              <div className={css.sliders__list_item_wrapper}>
                <p className={css.sliders__list_item_price}>70</p>
                <div className={css.sliders__list_item_favourite_wraper}>
                  <button className={css.sliders__list_item_favourite}></button>
                  <button className={css.sliders__list_item_btn}></button>
                </div>
              </div>
            </div>
            <div className={css.sliders__list_item}>
              <img
                className={css.sliders__list_item_img}
                src="https://loremflickr.com/320/240?random=21"
                alt="no-img"
              />
              <h3 className={css.sliders__list_item_title}>
                Карнавальная маска мишки для детей
              </h3>
              <div className={css.sliders__list_item_wrapper}>
                <p className={css.sliders__list_item_price}>10000</p>
                <div className={css.sliders__list_item_favourite_wraper}>
                  <button className={css.sliders__list_item_favourite}></button>
                  <button className={css.sliders__list_item_btn}></button>
                </div>
              </div>
            </div>
            <div className={css.sliders__list_item}>
              <img
                className={css.sliders__list_item_img}
                src="https://loremflickr.com/320/240?random=22"
                alt="no-img"
              />
              <h3 className={css.sliders__list_item_title}>
                Карнавальная маска мишки для детей
              </h3>
              <div className={css.sliders__list_item_wrapper}>
                <p className={css.sliders__list_item_price}>10000</p>
                <div className={css.sliders__list_item_favourite_wraper}>
                  <button className={css.sliders__list_item_favourite}></button>
                  <button className={css.sliders__list_item_btn}></button>
                </div>
              </div>
            </div>
            <div className={css.sliders__list_item}>
              <img
                className={css.sliders__list_item_img}
                src="https://loremflickr.com/320/240?random=23"
                alt="no-img"
              />
              <h3 className={css.sliders__list_item_title}>
                Карнавальная маска мишки для детей
              </h3>
              <div className={css.sliders__list_item_wrapper}>
                <p className={css.sliders__list_item_price}>10000</p>
                <div className={css.sliders__list_item_favourite_wraper}>
                  <button className={css.sliders__list_item_favourite}></button>
                  <button className={css.sliders__list_item_btn}></button>
                </div>
              </div>
            </div>
            <div className={css.sliders__list_item}>
              <img
                className={css.sliders__list_item_img}
                src="https://loremflickr.com/320/240?random=24"
                alt="no-img"
              />
              <h3 className={css.sliders__list_item_title}>
                Карнавальная маска мишки для детей
              </h3>
              <div className={css.sliders__list_item_wrapper}>
                <p className={css.sliders__list_item_price}>10000</p>
                <div className={css.sliders__list_item_favourite_wraper}>
                  <button className={css.sliders__list_item_favourite}></button>
                  <button className={css.sliders__list_item_btn}></button>
                </div>
              </div>
            </div>
          </InfiniteCarousel>
        </ul>
      </div>
    </section>
  );
};

export default NewProducts;
