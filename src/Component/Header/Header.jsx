import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { modalOpen } from "../../redux/actions/modalAction";
import Logotype from "../Logotype/Logotype";
import phone from "../../images/interface/phone.svg";
import magnifier from "../../images/interface/magnifier.svg";
import basket from "../../images/interface/basket.svg";
import css from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();

  const openModalHandler = (btnType) => {
    dispatch(modalOpen(btnType));
  };

  return (
    <header className={css.header}>
      <div className={css.header__wrapper}>
        <div
          onClick={() => openModalHandler("left")}
          className={css.header__burgerMenu}
        >
          <i className={css.header__burgerItem}></i>
        </div>

        <Logotype />

        <ul className={css.header__main_menu}>
          <li className={css.header__main_menu_item}>
            <Link to="/products" className={css.header__main_menu_item_link}>
              Товары
            </Link>
          </li>
          <li className={css.header__main_menu_item}>
            <Link to="/about" className={css.header__main_menu_item_link}>
              О компании
            </Link>
          </li>
          <li className={css.header__main_menu_item}>
            <Link to="/contacts" className={css.header__main_menu_item_link}>
              Контакты
            </Link>
          </li>
          <li className={css.header__main_menu_item}>
            <Link to="/deliveries" className={css.header__main_menu_item_link}>
              Доставка
            </Link>
          </li>
          <li className={css.header__main_menu_item}>
            <Link to="/payments" className={css.header__main_menu_item_link}>
              Оплата
            </Link>
          </li>
        </ul>

        <div className={css.header__phone_wrapper}>
          <img
            className={css.header__phone_icon}
            src={phone}
            alt="basket icon"
          />
          <a className={css.header__phone_link} href="tel:0975452910">
            (097) 54-52-910
          </a>
        </div>

        <div className={css.header__icon_wrapper}>
          <img
            className={css.header__magnifier_icon}
            src={magnifier}
            alt="basket icon"
          />
          <img
            onClick={() => openModalHandler("right")}
            className={css.header__basket_icon}
            src={basket}
            alt="basket icon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
