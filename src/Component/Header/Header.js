import React from "react";
import basket from "../../images/interface/basket.svg";
import Logotype from "../Logotype/Logotype";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.header__wrapper}>
        <div className={css.header__burgerMenu}>
          <i className={css.header__burgerItem}></i>
        </div>

        <Logotype />

        <img
          className={css.header__basket}
          src={basket}
          alt=""
          width="28"
          height="28"
        />
      </div>
    </header>
  );
};

export default Header;
