import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import Availability from "../../Components/Availability/Availability";
import Viewed from "../../Components/Viewed/Viewed";
import {
  addOneView,
  getOneProduct,
} from "../../redux/operations/viewOperation";
import { viewLoad } from "../../redux/actions/viewAction";
import { viewSelector } from "../../redux/selectors/selectors";
import css from "./View.module.css";

const ProductsList = ({ location, history }) => {
  const [imgSelected, setImgSelected] = useState(0);

  const view = useSelector((state) => viewSelector(state));

  const dispatch = useDispatch();

  const queryItem = queryString.parse(location.search).p;
  const hashId = queryString.parse(location.hash).img;

  useEffect(() => {
    hashId && setImgSelected(hashId - 1);
  }, [hashId]);

  useEffect(() => {
    if (view) {
      const lastViewed = JSON.parse(localStorage.getItem("viewed"));
      const checkViewToday = lastViewed.find((item) => item.id === queryItem);
      !checkViewToday && dispatch(addOneView(view.docId, view.views));
    }
  }, [dispatch, view, queryItem]);

  useEffect(() => {
    if (view) {
      const lastViewed = JSON.parse(localStorage.getItem("viewed"));
      const filterArrViewed = lastViewed.find((item) => item.id === queryItem);

      if (!filterArrViewed) {
        const newArrViewed = [
          { id: queryItem, date: Date.now() },
          ...lastViewed,
        ];
        localStorage.setItem("viewed", JSON.stringify(newArrViewed));
      }
    }
  }, [view, queryItem]);

  const getOneProductHandler = useCallback(() => {
    dispatch(getOneProduct(Number(queryItem)));
  }, [dispatch, queryItem]);

  useEffect(() => {
    getOneProductHandler();

    return () => {
      dispatch(viewLoad(null));
    };
  }, [dispatch, getOneProductHandler]);

  const selectImgHandler = ({ target }) => {
    setImgSelected(Number(target.id));
    history.replace(`${location.search}#img=${Number(target.id) + 1}`);
  };

  return (
    <section className={css.view}>
      {view && (
        <Helmet>
          <title>{view.title} | Okshimel Shop</title>
        </Helmet>
      )}

      {view && (
        <div className={css.view__wrapper}>
          <p className={css.view__category}>
            <b>&#8249;</b> {view.category}
          </p>

          <h2 className={css.view__title}>{view.title}</h2>

          <img
            className={css.view_preview_img}
            src={view.images[imgSelected]}
            alt={view.title}
          />

          <div className={css.view__image_picker_wrapper}>
            {view.images.map((img, idx) => (
              <img
                onClick={selectImgHandler}
                key={idx}
                className={css.view__image_picker_item}
                src={img}
                alt={view.title}
                id={idx}
              />
            ))}
          </div>

          <div className={css.view__action_wrapper}>
            <p className={css.view__action_price}>{view.price} ₴</p>

            <Availability quantity={view.quantity} />

            {view.quantity > 0 && (
              <button className={css.view__action_buy}>Купить</button>
            )}
            {view.quantity < 1 && (
              <button className={css.view__action_buy}>Под заказ</button>
            )}
          </div>

          <div className={css.view__description}>
            <h3 className={css.view__description_title}>
              Описание
              <p className={css.view__description_title_prod}> {view.title}</p>
            </h3>

            <p className={css.view__description_text}>{view.desc}</p>
          </div>
        </div>
      )}

      {view && <Viewed slides={2} />}
    </section>
  );
};

export default ProductsList;
