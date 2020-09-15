import React from "react";

import css from "./Logotype.module.css";

const Logotype = () => {
  return (
    <h1 className={css.logo}>
      <a href="/" className={css.logo__link}>
        Okshimel
      </a>
    </h1>
  );
};

export default Logotype;
