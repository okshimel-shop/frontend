import React from "react";
import Slider from "infinite-react-carousel";
import css from "./NewProducts.module.css";

const NewProducts = ({ slides }) => {
  const settings = {
    arrows: false,
    dots: true,
    dotsScroll: slides,
    duration: 200,
    slidesToShow: slides,
  };

  return (
    <section className={css.new_products}>
      <div className={css.new_products__wrapper}>
        <h2 className={css.new_products__title}>Новое</h2>
        <ul className={css.new_products__list}>
          <Slider {...settings}>
            <li className={css.new_products__list_item}>
              <img
                className={css.new_products__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
              />
              <h3 className={css.new_products__list_item_title}>Маска №2</h3>
              <p className={css.new_products__list_item_price}>120 грн</p>
              <button className={css.new_products__list_item_btn}>
                Купить
              </button>
            </li>
            <li className={css.new_products__list_item}>
              <img
                className={css.new_products__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
              />
              <h3 className={css.new_products__list_item_title}>Маска №2</h3>
              <p className={css.new_products__list_item_price}>120 грн</p>
              <button className={css.new_products__list_item_btn}>
                Купить
              </button>
            </li>
            <li className={css.new_products__list_item}>
              <img
                className={css.new_products__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
              />
              <h3 className={css.new_products__list_item_title}>Маска №2</h3>
              <p className={css.new_products__list_item_price}>120 грн</p>
              <button className={css.new_products__list_item_btn}>
                Купить
              </button>
            </li>
            <li className={css.new_products__list_item}>
              <img
                className={css.new_products__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
              />
              <h3 className={css.new_products__list_item_title}>Маска №2</h3>
              <p className={css.new_products__list_item_price}>120 грн</p>
              <button className={css.new_products__list_item_btn}>
                Купить
              </button>
            </li>
            <li className={css.new_products__list_item}>
              <img
                className={css.new_products__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
              />
              <h3 className={css.new_products__list_item_title}>Маска №2</h3>
              <p className={css.new_products__list_item_price}>120 грн</p>
              <button className={css.new_products__list_item_btn}>
                Купить
              </button>
            </li>
            <li className={css.new_products__list_item}>
              <img
                className={css.new_products__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
                width="130"
                height="130"
              />
              <h3 className={css.new_products__list_item_title}>Маска №2</h3>
              <p className={css.new_products__list_item_price}>120 грн</p>
              <button className={css.new_products__list_item_btn}>
                Купить
              </button>
            </li>
            <li className={css.new_products__list_item}>
              <img
                className={css.new_products__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
                width="130"
                height="130"
              />
              <h3 className={css.new_products__list_item_title}>Маска №2</h3>
              <p className={css.new_products__list_item_price}>120 грн</p>
              <button className={css.new_products__list_item_btn}>
                Купить
              </button>
            </li>
            <li className={css.new_products__list_item}>
              <img
                className={css.new_products__list_item_img}
                src="https://www.tellerreport.com/images/no-image.png"
                alt="no-img"
                width="130"
                height="130"
              />
              <h3 className={css.new_products__list_item_title}>Маска №2</h3>
              <p className={css.new_products__list_item_price}>120 грн</p>
              <button className={css.new_products__list_item_btn}>
                Купить
              </button>
            </li>
          </Slider>
        </ul>
      </div>
    </section>
  );
};

export default NewProducts;
