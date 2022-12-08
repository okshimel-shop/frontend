import React, { memo } from "react";
import { Helmet } from "react-helmet";
import css from "./About.module.css";

const About = () => {
  return (
    <div className={css.about__section}>
      <Helmet>
        <title>Про нас | Okshimel Shop</title>
      </Helmet>

      <h2 className={css.about__title}>Інформація про нас</h2>

      <div className={css.about__wrap}>
        <p className={css.about__text}>
          Зв'язатися з нами ви завжди можете за телефоном, вказаним нижче.
        </p>
        <p className={css.about__text}>
          Також ви можете надіслати свій запит/скаргу/пропозицію за допомогою
          такої форми.
        </p>
        <p className={css.about__text}>(096) 808 29 82 Аліна</p>
        <p className={css.about__text}>
          м. Київ, проспект Петра Григоренко 22/20
        </p>
      </div>
    </div>
  );
};

export default memo(About);
