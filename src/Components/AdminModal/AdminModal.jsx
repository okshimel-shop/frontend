import React from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { modalClose } from "../../redux/actions/modalAction";
import animation from "./transition/AdminModal.module.css";

import AdminAddProduct from "../AdminAddProduct/AdminAddProduct";
import AdminProductList from "../AdminProductList/AdminProductList";

import BackgroundOvarlay from "../BackgoundOvarlay/BackgroundOvarlay";
import { modalStatusSelector } from "../../redux/selectors/selectors";
import css from "./AdminModal.module.css";

const AdminModal = () => {
  const dispatch = useDispatch();
  const modalStatus = useSelector((state) => modalStatusSelector(state));

  const modalCloseHandler = (e) => {
    if (e.target.id === "modal-close") {
      dispatch(modalClose());
    }
  };

  return (
    <>
      <CSSTransition
        in={modalStatus.includes("admin")}
        timeout={250}
        classNames={animation}
        unmountOnExit
      >
        <div
          onClick={modalCloseHandler}
          id="modal-close"
          className={css.modal_admin__container}
        >
          <div className={css.modal_admin__body}>
            <div className={css.modal_admin__body_header}>
              {modalStatus.includes("add") && (
                <p className={css.modal_admin__body_title}>ДОБАВИТЬ ТОВАР</p>
              )}
              {modalStatus.includes("list") && (
                <p className={css.modal_admin__body_title}>СПИСОК ТОВАРОВ</p>
              )}
              <div
                onClick={modalCloseHandler}
                className={css.modal_admin__button_close}
                id="modal-close"
              ></div>
            </div>

            <div className={css.modal_admin__main}>
              {modalStatus.includes("add") && <AdminAddProduct />}
              {modalStatus.includes("list") && <AdminProductList />}
            </div>
          </div>
        </div>
      </CSSTransition>

      <BackgroundOvarlay modalStatus={modalStatus} />
    </>
  );
};

export default AdminModal;
