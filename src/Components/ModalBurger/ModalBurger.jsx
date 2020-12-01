import React from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { modalClose } from "../../redux/actions/modalAction";
import closeIcon from "../../images/interface/close-btn.svg";
import animation from "./transition/ModalBurger.module.css";
import BackgroundOvarlay from "../BackgoundOvarlay/BackgroundOvarlay";
import { modalStatusSelector } from "../../redux/selectors/selectors";
import css from "./ModalBurger.module.css";

const ModalBurger = () => {
  const modalStatus = useSelector((state) => modalStatusSelector(state));

  const dispatch = useDispatch();

  const modalCloseHandler = (e) => {
    e.target.id !== "modal-body" && dispatch(modalClose());
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
    </>
  );
};

export default ModalBurger;
