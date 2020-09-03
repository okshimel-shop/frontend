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
      <li>
        <img className={css.social__item} src={facebook} alt="" />
      </li>
      <li>
        <img className={css.social__item} src={instagram} alt="" />
      </li>
      <li>
        <img className={css.social__item} src={telegram} alt="" />
      </li>
      <li>
        <img className={css.social__item} src={viber} alt="" />
      </li>
      <li>
        <img className={css.social__item} src={youtube} alt="" />
      </li>
    </ul>
  );
};

export default Social;
