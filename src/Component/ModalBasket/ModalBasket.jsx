import React from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { modalClose } from "../../redux/actions/modalAction";
import closeIcon from "../../images/interface/close-btn.svg";
import animation from "./transition/ModalBasket.module.css";
import BackgroundOvarlay from "../BackgoundOvarlay/BackgroundOvarlay";
import css from "./ModalBasket.module.css";

const ModalBasket = () => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(({ modal }) => modal);

  const modalCloseHandler = () => {
    dispatch(modalClose());
  };

  const scrollSwitcher = (type) => {
    document.body.style.overflowY = type;
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
          onClick={modalCloseHandler}
          className={css.modal_basket__container}
        >
          <div className={css.modal_basket__body}>
            <img
              onClick={modalCloseHandler}
              className={css.modal_basket__button_close}
              src={closeIcon}
              alt="Close icon"
            />
          </div>
        </div>
      </CSSTransition>

      <BackgroundOvarlay modalStatus={modalStatus} />

      {modalStatus !== "closed"
        ? scrollSwitcher("hidden")
        : scrollSwitcher("auto")}
    </>
  );
};

export default ModalBasket;
