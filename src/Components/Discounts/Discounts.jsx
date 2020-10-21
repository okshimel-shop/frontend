import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import css from "./Discounts.module.css";

const Discounts = () => {
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
    <section className={css.new_products}>
      <div className={css.new_products__wrapper}>
        <h2 className={css.new_products__title}>Акции</h2>
        <ul className={css.new_products__list}>
          <InfiniteCarousel {...settings}>
            <div className={css.new_products__list_item}>
              <img
                className={css.new_products__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
              />
              <h3 className={css.new_products__list_item_title}>
                Карнавалья маска мишки для детей
              </h3>
              <p className={css.new_products__list_item_price}>10000</p>
              <button
                className={css.new_products__list_item_favourite}
              ></button>
            </div>
            <div className={css.new_products__list_item}>
              <img
                className={css.new_products__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
              />
              <h3 className={css.new_products__list_item_title}>
                Карнавалья маска мишки для детей
              </h3>
              <p className={css.new_products__list_item_price}>
                10000
                <span className={css.new_products__list_item_price_simbol}>
                  ₴
                </span>
              </p>
            </div>
            <div className={css.new_products__list_item}>
              <img
                className={css.new_products__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
              />
              <h3 className={css.new_products__list_item_title}>
                Карнавалья маска мишки для детей
              </h3>
              <p className={css.new_products__list_item_price}>
                10000
                <span className={css.new_products__list_item_price_simbol}>
                  ₴
                </span>
              </p>
            </div>
            <div className={css.new_products__list_item}>
              <img
                className={css.new_products__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
              />
              <h3 className={css.new_products__list_item_title}>
                Карнавалья маска мишки для детей
              </h3>
              <p className={css.new_products__list_item_price}>
                10000
                <span className={css.new_products__list_item_price_simbol}>
                  ₴
                </span>
              </p>
            </div>
            <div className={css.new_products__list_item}>
              <img
                className={css.new_products__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
              />
              <h3 className={css.new_products__list_item_title}>
                Карнавалья маска мишки для детей
              </h3>
              <p className={css.new_products__list_item_price}>
                10000
                <span className={css.new_products__list_item_price_simbol}>
                  ₴
                </span>
              </p>
            </div>
            <div className={css.new_products__list_item}>
              <img
                className={css.new_products__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
              />
              <h3 className={css.new_products__list_item_title}>
                Карнавалья маска мишки для детей
              </h3>
              <p className={css.new_products__list_item_price}>
                10000
                <span className={css.new_products__list_item_price_simbol}>
                  ₴
                </span>
              </p>
            </div>
          </InfiniteCarousel>
        </ul>
      </div>
    </section>
  );
};

export default Discounts;
