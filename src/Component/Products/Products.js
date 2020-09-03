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
              src="https://uaprom-static.c.prom.st/image/new_design/images/no_image-hce614324446b22b42a09b69093e309fce.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3>Маска №1</h3>
            <p>120 грн</p>
            <button>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              src="https://uaprom-static.c.prom.st/image/new_design/images/no_image-hce614324446b22b42a09b69093e309fce.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3>Маска №2</h3>
            <p>120 грн</p>
            <button>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              src="https://uaprom-static.c.prom.st/image/new_design/images/no_image-hce614324446b22b42a09b69093e309fce.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3>Маска №3</h3>
            <p>120 грн</p>
            <button>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              src="https://uaprom-static.c.prom.st/image/new_design/images/no_image-hce614324446b22b42a09b69093e309fce.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3>Маска №4</h3>
            <p>120 грн</p>
            <button>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              src="https://uaprom-static.c.prom.st/image/new_design/images/no_image-hce614324446b22b42a09b69093e309fce.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3>Маска №5</h3>
            <p>120 грн</p>
            <button>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              src="https://uaprom-static.c.prom.st/image/new_design/images/no_image-hce614324446b22b42a09b69093e309fce.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3>Маска №6</h3>
            <p>120 грн</p>
            <button>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              src="https://uaprom-static.c.prom.st/image/new_design/images/no_image-hce614324446b22b42a09b69093e309fce.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3>Маска №7</h3>
            <p>120 грн</p>
            <button>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              src="https://uaprom-static.c.prom.st/image/new_design/images/no_image-hce614324446b22b42a09b69093e309fce.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3>Маска №8</h3>
            <p>120 грн</p>
            <button>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              src="https://uaprom-static.c.prom.st/image/new_design/images/no_image-hce614324446b22b42a09b69093e309fce.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3>Маска №9</h3>
            <p>120 грн</p>
            <button>Купить</button>
          </li>
          <li className={css.products__list_item}>
            <img
              src="https://uaprom-static.c.prom.st/image/new_design/images/no_image-hce614324446b22b42a09b69093e309fce.png"
              alt="no-img"
              width="130"
              height="130"
            />
            <h3>Маска №10</h3>
            <p>120 грн</p>
            <button>Купить</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Products;
