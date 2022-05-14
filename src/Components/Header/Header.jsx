import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modalOpen } from "../../redux/actions/modalAction";
import Logotype from "../Logotype/Logotype";
import AdminBar from "../AdminBar/AdminBar";
import {
  cartSelector,
  isloggedSelector,
} from "../../redux/selectors/selectors";
import css from "./Header.module.css";

const Header = () => {
  const islogged = useSelector((state) => isloggedSelector(state));
  const cart = useSelector((state) => cartSelector(state));

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

        <button className={css.header__catalog_button}>Каталог</button>

        <div className={css.header__search_input_wrapper}>
          <input
            className={css.header__search_input}
            type="text"
            placeholder="Я ищу..."
          />
          <button className={css.header__search_input_button}>Найти</button>
        </div>

        <div className={css.header__icon_wrapper}>
          <div className={css.header__favorite_icon}></div>
          <div
            onClick={() => openModalHandler("right")}
            className={css.header__cart_icon}
          >
            {cart.length > 0 && (
              <span className={css.header__cart_quantity}>{cart.length}</span>
            )}
          </div>
        </div>
      </div>

      {islogged && <AdminBar />}
    </header>
  );
};

export default Header;
