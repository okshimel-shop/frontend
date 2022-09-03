import React from "react";
import { Link } from "react-router-dom";
import owner from "../../images/pet/owner.png";

import css from "./Logotype.module.css";

const Logotype = () => {
  return (
    <h1 className={css.logo}>
      <Link to="/" className={css.logo__link}>
        Okshimel test
        <img
          className={css.logo__icon}
          src={owner}
          alt=""
          width="36"
          height="36"
        />
      </Link>
    </h1>
  );
};

export default Logotype;
