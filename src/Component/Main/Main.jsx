import React from "react";
import Products from "../Products/Products";
import css from "./Main.module.css";

const Main = () => {
  return (
    <div className={css.container}>
      <Products />
    </div>
  );
};

export default Main;
