import React from "react";
import facebook from "../../images/social/facebook.png";
import instagram from "../../images/social/instagram.png";
import telegram from "../../images/social/telegram.png";
import viber from "../../images/social/viber.png";
import youtube from "../../images/social/youtube.png";
import css from "./Social.module.css";

const Social = () => {
  return (
    <ul className={css.social__list}>
      <li className={css.social__item}>
        <img className={css.social__item_img} src={facebook} alt="" />
      </li>
      <li className={css.social__item}>
        <img className={css.social__item_img} src={instagram} alt="" />
      </li>
      <li className={css.social__item}>
        <img className={css.social__item_img} src={telegram} alt="" />
      </li>
      <li className={css.social__item}>
        <img className={css.social__item_img} src={viber} alt="" />
      </li>
      <li className={css.social__item}>
        <img className={css.social__item_img} src={youtube} alt="" />
      </li>
    </ul>
  );
};

export default Social;
