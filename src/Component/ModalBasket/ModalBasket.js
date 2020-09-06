import React from "react";
import { CSSTransition } from "react-transition-group";
import closeIcon from "../../images/interface/close-btn.svg";
import component from "./transition/component.module.css";
import overlay from "./transition/overlay.module.css";
import css from "./ModalBasket.module.css";

const ModalBasket = ({ isModalBask, modalBaskTog }) => {
  return (
    <CSSTransition
      in={isModalBask}
      timeout={400}
      classNames={component}
      unmountOnExit
    >
      {(stage) => (
        <div className={css.modal_sidebar__container}>
          <CSSTransition
            in={stage === "entered"}
            timeout={200}
            classNames={overlay}
            unmountOnExit
          >
            <div
              onClick={() => modalBaskTog(false)}
              className={css.modal_sidebar__overlay}
            ></div>
          </CSSTransition>
          <div className={css.modal_sidebar__body}>
            <img
              onClick={() => modalBaskTog(false)}
              className={css.modal_sidebar__button_close}
              src={closeIcon}
              alt="Close icon"
            />
          </div>
        </div>
      )}
    </CSSTransition>
  );
};

export default ModalBasket;
