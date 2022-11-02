import { wrap } from "lodash";
import React, { memo } from "react";
import { Helmet } from "react-helmet";
import css from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={css.contacts__section}>
      <Helmet>
        <title>Контакти | Okshimel Shop</title>
      </Helmet>

      <h2 className={css.contacts__title}>Контакти</h2>
      <div className={css.contacts__table_wrap}>
        <div className={css.contacts__table_info}>
          <h3 className={css.contacts__table_form_title}>Ми на зв'язку</h3>
          <p className={css.contacts__table_form_text}>
            Зв'язатися з нами ви завжди можете за телефоном, вказаним нижче.
          </p>
          <p className={css.contacts__table_form_text}>
            Також ви можете надіслати свій запит/скаргу/пропозицію за допомогою
            такої форми.
          </p>
          <p className={css.contacts__table_form_text_tel}>
            (096) 808 29 82 Аліна
          </p>
          <p className={css.contacts__table_form_text}>
            м. Київ, проспект Петра Григоренко 22/20
          </p>
        </div>
        <div className={css.contacts__table_form_wrap}>
          <h3 className={css.contacts__table_form_title}>Напишіть нам</h3>
          <form className={css.contacts__table_form}>
            <input
              className={css.contacts__table_form_input}
              type="text"
              placeholder="Ваше ім'я"
            />
            <input
              className={css.contacts__table_form_input}
              type="text"
              placeholder="Ваш e-mail"
            />
            <input
              className={css.contacts__table_form_input}
              type="email"
              placeholder="Тема повідомлення"
            />
            <textarea
              className={css.contacts__table_form_textarea}
              type="text"
              placeholder="Текст повідомлення"
            />
            <button className={css.contacts__table_form_button} type="submit">
              Відправити повідомлення
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
