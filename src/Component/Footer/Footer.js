import React from "react";
import Social from "../Social/Social";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footer__wrapper}>
        <div className={css.footer__help_wrapper}>
          <ul className={css.footer__help_list}>
            <li className={css.footer__help_list_item}>О компании</li>
            <li className={css.footer__help_list_item}>Контакты</li>
            <li className={css.footer__help_list_item}>Доставка</li>
            <li className={css.footer__help_list_item}>Оплата</li>
          </ul>
        </div>

        <div className={css.footer__working_wrapper}>
          <p className={css.footer__working_title}>Режим работы</p>
          <p className={css.footer__working_desc}>Пн-Вс: 10:00 - 20:00</p>
        </div>

        <Social />
      </div>
      <div className={css.footer__copyright}>
        <p className={`${css.footer__copyright_text}`}>
          @ 2020. Интеренет-магазин Okshimel
        </p>
      </div>
    </footer>
  );
};

export default Footer;
