import React from "react";
import css from "./Social.module.css";

const Social = () => {
  return (
    <ul className={css.social__list}>
      <li className={css.social__item}>
        <a href="/" className={css.social__item_link} target="_blank">
          <p></p>
        </a>
      </li>
      <li className={css.social__item}>
        <a href="/" className={css.social__item_link} target="_blank">
          <p></p>
        </a>
      </li>
      <li className={css.social__item}>
        <a href="/" className={css.social__item_link} target="_blank">
          <p></p>
        </a>
      </li>
      <li className={css.social__item}>
        <a href="/" className={css.social__item_link} target="_blank">
          <p></p>
        </a>
      </li>
      <li className={css.social__item}>
        <a href="/" className={css.social__item_link} target="_blank">
          <p></p>
        </a>
      </li>
    </ul>
  );
};

export default Social;
