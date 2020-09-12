import React from "react";
import { CSSTransition } from "react-transition-group";
import closeIcon from "../../images/interface/close-btn.svg";
import component from "./transition/component.module.css";
import overlay from "./transition/overlay.module.css";
import css from "./ModalBurger.module.css";

const ModalBurger = ({ modalStatus, setModalStatus }) => {
  const modalWindowToggler = () => {
    const template = {
      status: false,
      position: modalStatus.position,
    };
    setModalStatus(template);
  };

  const foundPosition = () => {
    if (modalStatus.position === "left") {
      return css.modal_sidebar__button_close_left;
    } else if (modalStatus.position === "right") {
      return css.modal_sidebar__button_close_right;
    }
  };

  return (
    <CSSTransition
      in={modalStatus.status}
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
              onClick={modalWindowToggler}
              className={css.modal_sidebar__overlay}
            ></div>
          </CSSTransition>
          <div className={css.modal_sidebar__body}>
            <img
              onClick={modalWindowToggler}
              className={foundPosition()}
              src={closeIcon}
              alt="Close icon"
            />
          </div>
        </div>
      )}
    </CSSTransition>
  );
};

export default ModalBurger;
