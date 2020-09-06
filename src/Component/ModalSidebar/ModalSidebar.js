import React from "react";
import { CSSTransition } from "react-transition-group";
import component from "./transition/component.module.css";
import overlay from "./transition/overlay.module.css";
import css from "./ModalSidebar.module.css";

const ModalSidebar = ({ modalSbStatus, modalSbToggle }) => {
  return (
    <CSSTransition
      in={modalSbStatus}
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
              onClick={modalSbToggle}
              className={css.modal_sidebar__overlay}
            ></div>
          </CSSTransition>
          <div className={css.modal_sidebar__body}></div>
        </div>
      )}
    </CSSTransition>
  );
};

export default ModalSidebar;
