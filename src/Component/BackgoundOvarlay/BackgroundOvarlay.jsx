import React from "react";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import { CSSTransition } from "react-transition-group";
import { modalClose } from "../../redux/actions/modalAction";
import animation from "./transition/BackgoundOvarlay.module.css";
import css from "./BackgoundOvarlay.module.css";

const BackgroundOvarlay = ({ modalStatus = "closed" }) => {
  const dispatch = useDispatch();

  const modalCloseHandler = () => {
    dispatch(modalClose());
  };

  return (
    <CSSTransition
      in={modalStatus !== "closed"}
      timeout={250}
      classNames={animation}
      unmountOnExit
    >
      <div
        onClick={modalCloseHandler}
        className={css.backgound_ovarlay__body}
      ></div>
    </CSSTransition>
  );
};

BackgroundOvarlay.propTypes = {
  modalStatus: PropTypes.string.isRequired,
};

export default BackgroundOvarlay;
