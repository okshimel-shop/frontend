import React from "react";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import { CSSTransition } from "react-transition-group";
import { modalClose } from "../../redux/actions/modalAction";
import animation from "./transition/BackgoundOvarlay.module.css";
import css from "./BackgroundOvarlay.module.css";

const BackgroundOvarlay = ({ modalStatus = "hidden" }) => {
  const dispatch = useDispatch();

  const modalCloseHandler = () => {
    dispatch(modalClose());
  };

  const scrollSwitcher = (type) => {
    document.body.style.overflowY = type;
  };

  return (
    <>
      <CSSTransition
        in={modalStatus !== "hidden"}
        timeout={250}
        classNames={animation}
        unmountOnExit
      >
        <div
          onClick={modalCloseHandler}
          className={css.backgound_ovarlay__body}
        ></div>
      </CSSTransition>

      {modalStatus !== "hidden"
        ? scrollSwitcher("hidden")
        : scrollSwitcher("scroll")}
    </>
  );
};

BackgroundOvarlay.propTypes = {
  modalStatus: PropTypes.string.isRequired,
};

export default BackgroundOvarlay;
