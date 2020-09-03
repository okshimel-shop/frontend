import React from "react";
import Logotype from "../Logotype/Logotype";
import Social from "../Social/Social";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footer__wrapper}>
        <div className={css.footer__working_wrapper}>
          <h3 className={css.footer__working_title}>Режим работы</h3>
          <p className={css.footer__working_desc}>Пн-Вс: 10:00 - 20:00</p>
        </div>

        <div className={css.footer__help_wrapper}>
          <h3 className={css.footer__help_title}>Помощь</h3>
          <ul className={css.footer__help_list}>
            <li className={css.footer__help_list_item}>О компании</li>
            <li className={css.footer__help_list_item}>Контакты</li>
            <li className={css.footer__help_list_item}>Доставка</li>
            <li className={css.footer__help_list_item}>Оплата</li>
          </ul>
        </div>

        <Social />

        <p className={css.footer__copyright}>
          @ 2020. Интеренет-магазин Okshimel
        </p>
      </div>
    </footer>
  );
};

export default Footer;
