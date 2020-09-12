import React from "react";
import Logotype from "../Logotype/Logotype";
import phone from "../../images/interface/phone.svg";
import magnifier from "../../images/interface/magnifier.svg";
import basket from "../../images/interface/basket.svg";
import css from "./Header.module.css";

const Header = ({ setModalStatus }) => {
  const modalWindowToggler = (e) => {
    const tagName = e.target.tagName;

    const template = {
      status: true,
      position: tagName !== "IMG" ? "left" : "right",
    };
    setModalStatus(template);
  };

  return (
    <header className={css.header}>
      <div className={css.header__wrapper}>
        <div onClick={modalWindowToggler} className={css.header__burgerMenu}>
          <i className={css.header__burgerItem}></i>
        </div>

        <Logotype />

        <ul className={css.header__main_menu}>
          <li className={css.header__main_menu_item}>Menu 1</li>
          <li className={css.header__main_menu_item}>Menu 2</li>
          <li className={css.header__main_menu_item}>Menu 3</li>
          <li className={css.header__main_menu_item}>Menu 4</li>
          <li className={css.header__main_menu_item}>Menu 5</li>
          <li className={css.header__main_menu_item}>Menu 6</li>
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
            onClick={modalWindowToggler}
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
