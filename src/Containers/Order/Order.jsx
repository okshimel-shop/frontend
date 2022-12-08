import React, { memo, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCartProducts } from "../../redux/operations/productOperation";
import { cartSelector } from "../../redux/selectors/selectors";
import noimage from "../../images/products/no-image.png";

import css from "./Order.module.css";
import { cartSet } from "../../redux/actions/cartAction";

const Order = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  const cartId = useSelector((state) => cartSelector(state));

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCartProducts(cartId)).then(({ data }) => setCartItems(data));
  }, [cartId, dispatch]);

  useEffect(() => {
    const request = cartItems.reduce(
      (totalPrice, item) => totalPrice + item.price,
      0
    );
    setTotalSum(request);
  }, [cartItems]);

  const toProductPage = ({ target }) => {
    history.push(`/products/view?p=${target.id}`);
  };

  const removeProductHandler = ({ target }) => {
    dispatch(cartSet({ id: target.id }));

    const result = cartItems.filter((item) => item.id !== Number(target.id));

    setCartItems(result);
  };

  return (
    <div className={css.order__section}>
      <Helmet>
        <title>Оформити замовлення | Okshimel Shop</title>
      </Helmet>

      <h2 className={css.order__title}>Оформити замовлення</h2>

      <div className={css.order__contacts_wrap}>
        <form className={css.order__contacts_form}>
          <div className={css.order__contacts_form_wrap}>
            <label className={css.order__contacts_form_label}>
              Ваше ім'я
              <input
                className={css.order__contacts_form_input}
                type="text"
                placeholder="Ім'я"
              />
            </label>
            <label className={css.order__contacts_form_label}>
              Ваше прізвище
              <input
                className={css.order__contacts_form_input}
                type="text"
                placeholder="Прізвище"
              />
            </label>
          </div>
          <div className={css.order__contacts_form_wrap}>
            <label className={css.order__contacts_form_label}>
              Ваш номер телефону
              <input
                className={css.order__contacts_form_input}
                type="tel"
                placeholder="Мобільний телефон"
              />
            </label>
            <label className={css.order__contacts_form_label}>
              Електронна пошта
              <input
                className={css.order__contacts_form_input}
                type="email"
                placeholder="Електронна пошта"
              />
            </label>
          </div>
        </form>
      </div>

      <div className={css.order__details_wrap}>
        <div className={css.order__detail__titles_wrap}>
          <p className={css.order__detail__title}>Замовлення N 1</p>
          <p className={css.order__detail__title}>на суму: {totalSum} грн</p>
        </div>
        <div className={css.order__detail__product_wrap}>
          <ul className={css.order__detail__product_list}>
            {cartItems &&
              cartItems.map((item) => (
                <li key={item.id} className={css.order__detail__product_item}>
                  <div className={css.order__detail__product_link}>
                    {item.images[0] ? (
                      <img
                        onClick={toProductPage}
                        className={css.order__detail__product_img}
                        src={item.images[0]}
                        alt={item.title}
                        id={item.id}
                        width={50}
                        height={50}
                      />
                    ) : (
                      <img
                        onClick={toProductPage}
                        className={css.modal_cart__list_item_img}
                        src={noimage}
                        alt="Изображение не загружено"
                        id={item.id}
                      />
                    )}
                    <p
                      onClick={toProductPage}
                      id={item.id}
                      className={css.order__detail__product_name}
                    >
                      {item.title}
                    </p>
                  </div>
                  <div className={css.order__detail__product_options}>
                    <div className={css.order__detail__product_price}>
                      <span className={css.order__detail__product_aftertitle}>
                        Ціна
                      </span>
                      <span className={css.order__detail__product_count}>
                        {item.price} грн
                      </span>
                    </div>
                    <div className={css.order__detail__product_quantity}>
                      <span className={css.order__detail__product_aftertitle}>
                        Кількість
                      </span>
                      <span className={css.order__detail__product_count}>
                        1 шт
                      </span>
                    </div>
                    <div className={css.order__detail__product_sum}>
                      <span className={css.order__detail__product_aftertitle}>
                        Сума
                      </span>
                      <span className={css.order__detail__product_count}>
                        {item.price} грн
                      </span>
                    </div>
                    <div
                      className={css.order__detail__product_delete}
                      onClick={removeProductHandler}
                      id={item.id}
                    ></div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <button className={css.order__confirm_button} type="button">
        Замовлення підтверджую
      </button>
    </div>
  );
};

export default memo(Order);
