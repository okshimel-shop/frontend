import React, { memo } from "react";
import { Helmet } from "react-helmet";
import map from "../../images/products/map_delivery.png";
import css from "./Delivery.module.css";

const Delivery = () => {
  return (
    <div className={css.delivery__section}>
      <Helmet>
        <title>Доставка | Okshimel Shop</title>
      </Helmet>

      <h2 className={css.delivery__title}>Доставка та оплата</h2>
      <div className={css.delivery__wrap}>
        <p className={css.delivery__text}>
          Замовлення відправляємо протягом 1-2 днів після оплати.
        </p>
        <p className={css.delivery__text}>
          Відправка можлива такими перевізниками:
        </p>
        <ul>
          <li className={css.delivery__text_post}>* Нова Пошта</li>
          <li className={css.delivery__text_post}>* Укрпошта</li>
          <li className={css.delivery__text_post}>* JustIn</li>
        </ul>
        <img className={css.delivery__img} width={600} src={map} alt="map" />
        <p className={css.delivery__text}></p>
        <p className={css.delivery__text}></p>
      </div>
    </div>
  );
};

export default memo(Delivery);
