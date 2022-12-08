import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import { modalClose } from "../../redux/actions/modalAction";
import { modalStatusSelector } from "../../redux/selectors/selectors";
import animation from "./transition/ModalReviews.module.css";
import BackgroundOvarlay from "../BackgoundOvarlay/BackgroundOvarlay";
import css from "./ModalReviews.module.css";

const ModalReviews = () => {
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [nameUser, setNameUser] = useState(() => {
    return JSON.parse(window.localStorage.getItem("nameUser")) ?? "";
  });
  const [review, setReview] = useState(() => {
    return JSON.parse(window.localStorage.getItem("review")) ?? "";
  });

  const dispatch = useDispatch();
  const modalStatus = useSelector((state) => modalStatusSelector(state));

  useEffect(() => {
    if (modalStatus === "review") {
      setLoaderStatus(true);

      setTimeout(() => {
        setLoaderStatus(false);
      }, 500);
    }
    // eslint-disable-next-line
  }, [modalStatus]);

  useEffect(() => {
    window.localStorage.setItem("nameUser", JSON.stringify(nameUser));
    window.localStorage.setItem("review", JSON.stringify(review));
  }, [nameUser, review]);

  const modalCloseHandler = (e) => {
    if (e.target.id === "modal-close" || e.target.id === "modal-close-button") {
      dispatch(modalClose());
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "nameUser":
        setNameUser(value);
        break;
      case "review":
        setReview(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <CSSTransition
        in={modalStatus === "review"}
        timeout={250}
        classNames={animation}
        unmountOnExit
      >
        {loaderStatus === "true" ? (
          <Loader />
        ) : (
          <div
            className={css.modal_review__container}
            onClick={modalCloseHandler}
            id="modal-close"
          >
            <div className={css.modal_review__body}>
              <div className={css.modal_review__header}>
                <div
                  onClick={modalCloseHandler}
                  className={css.modal_review__button_close}
                  id="modal-close-button"
                ></div>
                <p className={css.modal_review__modal_title}>Залишити відгук</p>
              </div>

              <div className={css.modal_review__main}>
                <form
                  onSubmit={handleSubmitReview}
                  className={css.modal_reviews__form}
                >
                  <input
                    className={css.modal_reviews__input}
                    value={nameUser}
                    onChange={handleChange}
                    name="nameUser"
                    type="text"
                    placeholder="Ваше ім'я"
                  />
                  <textarea
                    className={css.modal_reviews__text}
                    value={review}
                    onChange={handleChange}
                    name="review"
                    placeholder="Текст"
                  />
                  <button type="submit" className={css.modal_review__submit}>
                    Відправити
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </CSSTransition>

      <BackgroundOvarlay modalStatus={modalStatus} />
    </>
  );
};

export default ModalReviews;
