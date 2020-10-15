import React from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { modalClose } from "../../redux/actions/modalAction";
import closeIcon from "../../images/interface/close-btn.svg";
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

  const scrollSwitcher = (type) => {
    document.body.style.overflowY = type;
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
            <img
              onClick={modalCloseHandler}
              className={css.modal_admin__button_close}
              id="modal-close"
              src={closeIcon}
              alt="Close icon"
            />

            {modalStatus.includes("add") && <AdminAddProduct />}
            {modalStatus.includes("list") && <AdminProductList />}
          </div>
        </div>
      </CSSTransition>

      <BackgroundOvarlay modalStatus={modalStatus} />

      {modalStatus !== "closed"
        ? scrollSwitcher("hidden")
        : scrollSwitcher("scroll")}
    </>
  );
};

export default AdminModal;
