import React from "react";
import basket from "../../images/interface/basket.svg";
import Logotype from "../Logotype/Logotype";
import css from "./Header.module.css";
import { logDOM } from "@testing-library/react";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.header__wrapper}>
        {document.documentElement.clientWidth < 1200 && (
          <div className={css.header__burgerMenu}>
            <i className={css.header__burgerItem}></i>
          </div>
        )}

        <Logotype />

        <img className={css.header__basket} src={basket} alt="" />
      </div>
    </header>
  );
};

export default Header;
