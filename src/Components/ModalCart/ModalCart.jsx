import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { modalClose } from "../../redux/actions/modalAction";
import animation from "./transition/ModalCart.module.css";
import BackgroundOvarlay from "../BackgoundOvarlay/BackgroundOvarlay";
import {
  cartSelector,
  modalStatusSelector,
} from "../../redux/selectors/selectors";
import { getCartProducts } from "../../redux/operations/cartOperation";
import { cartSet } from "../../redux/actions/cartAction";
import css from "./ModalCart.module.css";

const ModalCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const cartId = useSelector((state) => cartSelector(state));
  const modalStatus = useSelector((state) => modalStatusSelector(state));

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (modalStatus !== "closed") {
      dispatch(getCartProducts(cartId)).then((res) => setCartItems(res));
    }

    // eslint-disable-next-line
  }, [modalStatus]);

  useEffect(() => {
    const request = cartItems.reduce(
      (totalPrice, item) => totalPrice + item.price,
      0
    );

    setTotalPrice(request);
    // eslint-disable-next-line
  }, [cartItems]);

  const modalCloseHandler = (e) => {
    e.target.id === "modal-close" && dispatch(modalClose());
  };

  const toProductPage = ({ target }) => {
    console.log(target.id);

    dispatch(modalClose());
    history.push(`/products/view?p=${target.id}`);
  };

  const removeProductHandler = ({ target }) => {
    dispatch(cartSet({ id: target.id }));

    const result = cartItems.filter((item) => item.id !== Number(target.id));

    setCartItems(result);
  };

  return (
    <>
      <CSSTransition
        in={modalStatus === "right"}
        timeout={250}
        classNames={animation}
        unmountOnExit
      >
        <div
          className={css.modal_cart__container}
          onClick={modalCloseHandler}
          id="modal-close"
        >
          <div className={css.modal_cart__body}>
            <div className={css.modal_cart__header}>
              <div
                onClick={modalCloseHandler}
                className={css.modal_cart__button_close}
                id="modal-close"
              ></div>
              <p className={css.modal_cart__modal_title}>КОРЗИНА</p>
            </div>

            <ul className={css.modal_cart__list}>
              {cartItems &&
                cartItems.map((item) => (
                  <li key={item.id} className={css.modal_cart__list_item}>
                    <img
                      onClick={toProductPage}
                      className={css.modal_cart__list_item_img}
                      src={item.images[0]}
                      alt={item.title}
                      id={item.id}
                    />
                    <div className={css.modal_cart__list_item_wrapper}>
                      <h3
                        onClick={toProductPage}
                        className={css.modal_cart__list_item_title}
                        id={item.id}
                      >
                        {item.title}
                      </h3>

                      <p className={css.modal_cart__list_item_price}>
                        {item.price}
                      </p>
                      <div onClick={removeProductHandler} id={item.id}>
                        Delete
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            {cartId.length > 0 && (
              <div className={css.modal_cart__receipt}>
                <span className={css.modal_cart__receipt_total}>
                  {totalPrice}
                </span>

                <button className={css.modal_cart__receipt_submit}>
                  Оформить заказ
                </button>
              </div>
            )}
          </div>
        </div>
      </CSSTransition>

      <BackgroundOvarlay modalStatus={modalStatus} />
    </>
  );
};

export default ModalCart;
