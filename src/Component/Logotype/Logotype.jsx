import React from "react";
import { Link } from "react-router-dom";
import css from "./Logotype.module.css";

const Logotype = () => {
  return (
    <h1 className={css.logo}>
      <Link to="/" className={css.logo__link}>
        Okshimel
      </Link>
    </h1>
  );
};

export default Logotype;
