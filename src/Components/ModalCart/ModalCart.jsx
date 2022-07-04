import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { modalClose } from "../../redux/actions/modalAction";
import animation from "./transition/ModalCart.module.css";
import BackgroundOvarlay from "../BackgoundOvarlay/BackgroundOvarlay";
import {
  cartSelector,
  modalStatusSelector,
} from "../../redux/selectors/selectors";
import { getCartProducts } from "../../redux/operations/productOperation";
import { cartSet } from "../../redux/actions/cartAction";
import emptyCart from "../../images/pet/empty.png";
import noimage from "../../images/products/no-image.png";
import css from "./ModalCart.module.css";

const ModalCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loaderStatus, setLoaderStatus] = useState(false);

  const cartId = useSelector((state) => cartSelector(state));
  const modalStatus = useSelector((state) => modalStatusSelector(state));

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (modalStatus === "right") {
      setLoaderStatus(true);
      dispatch(getCartProducts(cartId))
        .then(({ data }) => setCartItems(data))
        .finally(
          setTimeout(() => {
            setLoaderStatus(false);
          }, 500)
        );
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
              <p className={css.modal_cart__modal_title}>КОШИК</p>
            </div>

            <div className={css.modal_cart__main}>
              {cartId.length === 0 && (
                <div className={css.modal_cart__empty_wrapper}>
                  <img
                    className={css.modal_cart__empty_img}
                    src={emptyCart}
                    alt=""
                  />
                  <span className={css.modal_cart__empty_text}>Пусто</span>
                </div>
              )}

              {loaderStatus && <Loader />}

              {!loaderStatus && cartId.length > 0 && (
                <ul className={css.modal_cart__list}>
                  {cartItems &&
                    cartItems.map((item) => (
                      <li key={item.id} className={css.modal_cart__list_item}>
                        {item.images[0] ? (
                          <img
                            onClick={toProductPage}
                            className={css.modal_cart__list_item_img}
                            src={item.images[0]}
                            alt={item.title}
                            id={item.id}
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
                          <div
                            className={css.modal_cart__list_item_delete}
                            onClick={removeProductHandler}
                            id={item.id}
                          ></div>
                        </div>
                      </li>
                    ))}
                </ul>
              )}
              {!loaderStatus && cartId.length > 0 && (
                <div className={css.modal_cart__receipt}>
                  <span className={css.modal_cart__receipt_total}>
                    {totalPrice}
                  </span>

                  <button className={css.modal_cart__receipt_submit}>
                    Оформити замовлення
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </CSSTransition>

      <BackgroundOvarlay modalStatus={modalStatus} />
    </>
  );
};

export default ModalCart;
