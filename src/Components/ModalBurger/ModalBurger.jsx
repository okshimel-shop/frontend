import React from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { modalClose } from "../../redux/actions/modalAction";
import closeIcon from "../../images/interface/close-btn.svg";
import animation from "./transition/ModalBurger.module.css";
import BackgroundOvarlay from "../BackgoundOvarlay/BackgroundOvarlay";
import css from "./ModalBurger.module.css";

const ModalBurger = () => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(({ modal }) => modal);

  const modalCloseHandler = (e) => {
    if (e.target.id !== "modal-body") dispatch(modalClose());
  };

  const scrollSwitcher = (type) => {
    document.body.style.overflowY = type;
  };

  return (
    <>
      <CSSTransition
        in={modalStatus === "left"}
        timeout={250}
        classNames={animation}
        unmountOnExit
      >
        <div
          onClick={modalCloseHandler}
          className={css.modal_sidebar__container}
        >
          <div className={css.modal_sidebar__body} id="modal-body">
            <img
              onClick={modalCloseHandler}
              className={css.modal_sidebar__button_close}
              src={closeIcon}
              alt="Close icon"
            />
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

export default ModalBurger;