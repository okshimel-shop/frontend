import React from "react";
import Social from "../Social/Social";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footer__wrapper}>
        <ul className={css.footer__help_list}>
          <li className={css.footer__help_list_item}>О компании</li>
          <li className={css.footer__help_list_item}>Контакты</li>
          <li className={css.footer__help_list_item}>Доставка</li>
          <li className={css.footer__help_list_item}>Оплата</li>
        </ul>
        <Social />

        <div className={css.footer__working_wrapper}>
          <p className={css.footer__working_title}>Режим работы: Пн-Вс</p>
          <p className={css.footer__working_desc}>с 10:00 - до 20:00</p>
        </div>

        <p className={css.footer__copyright}>
          Copyright © 2020 Магазин Okshimel
        </p>
      </div>
    </footer>
  );
};

export default Footer;
