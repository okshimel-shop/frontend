import React from "react";
import Slider from "infinite-react-carousel";
import css from "./Discounts.module.css";

const Discounts = ({ slides }) => {
  const settings = {
    arrows: false,
    dots: true,
    dotsScroll: slides,
    duration: 200,
    slidesToShow: slides,
  };

  return (
    <section className={css.discounts}>
      <div className={css.discounts__wrapper}>
        <h2 className={css.discounts__title}>Акции</h2>
        <ul className={css.discounts__list}>
          <Slider {...settings}>
            <li className={css.discounts__list_item}>
              <img
                className={css.discounts__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
                width="130"
                height="130"
              />
              <h3 className={css.discounts__list_item_title}>Маска №2</h3>
              <p className={css.discounts__list_item_price}>120 грн</p>
              <button className={css.discounts__list_item_btn}>Купить</button>
            </li>
            <li className={css.discounts__list_item}>
              <img
                className={css.discounts__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
                width="130"
                height="130"
              />
              <h3 className={css.discounts__list_item_title}>Маска №2</h3>
              <p className={css.discounts__list_item_price}>120 грн</p>
              <button className={css.discounts__list_item_btn}>Купить</button>
            </li>
            <li className={css.discounts__list_item}>
              <img
                className={css.discounts__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
                width="130"
                height="130"
              />
              <h3 className={css.discounts__list_item_title}>Маска №2</h3>
              <p className={css.discounts__list_item_price}>120 грн</p>
              <button className={css.discounts__list_item_btn}>Купить</button>
            </li>
            <li className={css.discounts__list_item}>
              <img
                className={css.discounts__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
                width="130"
                height="130"
              />
              <h3 className={css.discounts__list_item_title}>Маска №2</h3>
              <p className={css.discounts__list_item_price}>120 грн</p>
              <button className={css.discounts__list_item_btn}>Купить</button>
            </li>
            <li className={css.discounts__list_item}>
              <img
                className={css.discounts__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
                width="130"
                height="130"
              />
              <h3 className={css.discounts__list_item_title}>Маска №2</h3>
              <p className={css.discounts__list_item_price}>120 грн</p>
              <button className={css.discounts__list_item_btn}>Купить</button>
            </li>
            <li className={css.discounts__list_item}>
              <img
                className={css.discounts__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
                width="130"
                height="130"
              />
              <h3 className={css.discounts__list_item_title}>Маска №2</h3>
              <p className={css.discounts__list_item_price}>120 грн</p>
              <button className={css.discounts__list_item_btn}>Купить</button>
            </li>
            <li className={css.discounts__list_item}>
              <img
                className={css.discounts__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
                width="130"
                height="130"
              />
              <h3 className={css.discounts__list_item_title}>Маска №2</h3>
              <p className={css.discounts__list_item_price}>120 грн</p>
              <button className={css.discounts__list_item_btn}>Купить</button>
            </li>
            <li className={css.discounts__list_item}>
              <img
                className={css.discounts__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
                width="130"
                height="130"
              />
              <h3 className={css.discounts__list_item_title}>Маска №2</h3>
              <p className={css.discounts__list_item_price}>120 грн</p>
              <button className={css.discounts__list_item_btn}>Купить</button>
            </li>
          </Slider>
        </ul>
      </div>
    </section>
  );
};

export default Discounts;
