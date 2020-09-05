import React from "react";
import css from "./Products.module.css";

const Products = () => {
  return (
    <section className={css.products}>
      <div className={css.products__wrapper}>
        <h2 className={css.products__title}>Каталог масок</h2>
        <ul className={css.products__list}>
          <li className={css.products__list_item}>
            <img
              className={css.products__list_item_img}
              src="https://www.tellerreport.com/images/no-image.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3 className={css.products__list_item_title}>Маска №1</h3>
            <p className={css.products__list_item_price}>120 грн</p>
            <button className={css.products__list_item_btn}>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              className={css.products__list_item_img}
              src="https://www.tellerreport.com/images/no-image.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3 className={css.products__list_item_title}>Маска №2</h3>
            <p className={css.products__list_item_price}>120 грн</p>
            <button className={css.products__list_item_btn}>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              className={css.products__list_item_img}
              src="https://www.tellerreport.com/images/no-image.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3 className={css.products__list_item_title}>Маска №3</h3>
            <p className={css.products__list_item_price}>120 грн</p>
            <button className={css.products__list_item_btn}>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              className={css.products__list_item_img}
              src="https://www.tellerreport.com/images/no-image.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3 className={css.products__list_item_title}>Маска №4</h3>
            <p className={css.products__list_item_price}>120 грн</p>
            <button className={css.products__list_item_btn}>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              className={css.products__list_item_img}
              src="https://www.tellerreport.com/images/no-image.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3 className={css.products__list_item_title}>Маска №5</h3>
            <p className={css.products__list_item_price}>120 грн</p>
            <button className={css.products__list_item_btn}>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              className={css.products__list_item_img}
              src="https://www.tellerreport.com/images/no-image.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3 className={css.products__list_item_title}>Маска №6</h3>
            <p className={css.products__list_item_price}>120 грн</p>
            <button className={css.products__list_item_btn}>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              className={css.products__list_item_img}
              src="https://www.tellerreport.com/images/no-image.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3 className={css.products__list_item_title}>Маска №7</h3>
            <p className={css.products__list_item_price}>120 грн</p>
            <button className={css.products__list_item_btn}>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              className={css.products__list_item_img}
              src="https://www.tellerreport.com/images/no-image.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3 className={css.products__list_item_title}>Маска №8</h3>
            <p className={css.products__list_item_price}>120 грн</p>
            <button className={css.products__list_item_btn}>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              className={css.products__list_item_img}
              src="https://www.tellerreport.com/images/no-image.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3 className={css.products__list_item_title}>Маска №9</h3>
            <p className={css.products__list_item_price}>120 грн</p>
            <button className={css.products__list_item_btn}>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              className={css.products__list_item_img}
              src="https://www.tellerreport.com/images/no-image.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3 className={css.products__list_item_title}>Маска №10</h3>
            <p className={css.products__list_item_price}>120 грн</p>
            <button className={css.products__list_item_btn}>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              className={css.products__list_item_img}
              src="https://www.tellerreport.com/images/no-image.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3 className={css.products__list_item_title}>Маска №11</h3>
            <p className={css.products__list_item_price}>120 грн</p>
            <button className={css.products__list_item_btn}>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              className={css.products__list_item_img}
              src="https://www.tellerreport.com/images/no-image.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3 className={css.products__list_item_title}>Маска №12</h3>
            <p className={css.products__list_item_price}>120 грн</p>
            <button className={css.products__list_item_btn}>Купить</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Products;
