import React from "react";
import { Link } from "react-router-dom";
import Social from "../Social/Social";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footer__wrapper}>
        <ul className={css.footer__help_list}>
          <li className={css.footer__help_list_item}>
            <Link to="/about" className={css.footer__help_list_item_link}>
              О компании
            </Link>
          </li>
          <li className={css.footer__help_list_item}>
            <Link to="/contacts" className={css.footer__help_list_item_link}>
              Контакты
            </Link>
          </li>
          <li className={css.footer__help_list_item}>
            <Link to="/deliveries" className={css.footer__help_list_item_link}>
              Доставка
            </Link>
          </li>
          <li className={css.footer__help_list_item}>
            <Link to="/payments" className={css.footer__help_list_item_link}>
              Оплата
            </Link>
          </li>
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
