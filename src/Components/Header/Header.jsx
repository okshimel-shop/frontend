import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modalOpen } from "../../redux/actions/modalAction";
import Logotype from "../Logotype/Logotype";
import AdminBar from "../AdminBar/AdminBar";
import { isloggedSelector } from "../../redux/selectors/selectors";
import css from "./Header.module.css";

const Header = () => {
  const islogged = useSelector((state) => isloggedSelector(state));

  const dispatch = useDispatch();

  const openModalHandler = (btnType) => {
    dispatch(modalOpen(btnType));
  };

  return (
    <header className={css.header}>
      <div className="header__wrapper">
        <div
          onClick={() => openModalHandler("left")}
          className={css.header__burgerMenu}
        >
          <i className={css.header__burgerItem}></i>
        </div>

        <Logotype />

        <ul className={css.header__main_menu}>
          <li className={css.header__main_menu_item}>
            <Link
              to="/products?page=1"
              className={css.header__main_menu_item_link}
            >
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
          <div className={css.header__phone_icon}></div>
          <a className={css.header__phone_link} href="tel:0975452910">
            (097) 54-52-910
          </a>
        </div>

        <div className={css.header__icon_wrapper}>
          <div className={css.header__magnifier_icon}></div>
          <div
            onClick={() => openModalHandler("right")}
            className={css.header__basket_icon}
          ></div>
        </div>
      </div>

      {islogged && <AdminBar />}
    </header>
  );
};

export default Header;
