import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import Availability from "../../Components/Availability/Availability";
import Viewed from "../../Components/Viewed/Viewed";
import Loader from "../../Components/Loader/Loader";
import {
  addOneView,
  getOneProduct,
} from "../../redux/operations/viewOperation";
import { viewLoad } from "../../redux/actions/viewAction";
import { loaderSelector, viewSelector } from "../../redux/selectors/selectors";
import css from "./View.module.css";

const ProductsList = ({ location, history }) => {
  const [imgSelected, setImgSelected] = useState(0);

  const loaderStatus = useSelector((state) => loaderSelector(state));
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

      {loaderStatus && <Loader />}

      {!loaderStatus && view && (
        <div className={css.view__wrapper}>
          <p className={css.view__category}>
            <b>&#8249;</b> {view.category}
          </p>

          <h2 className={css.view__title}>{view.title}</h2>

          <div className={css.view_main_wrapper}>
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

            <div className={css.view__order_wrapper}>
              <p className={css.view__order_price}>{view.price} ₴</p>

              <Availability quantity={view.quantity} />

              {view.quantity > 0 && (
                <button className={css.view__order_buy}>Купить</button>
              )}
              {view.quantity < 1 && (
                <button className={css.view__order_buy}>Под заказ</button>
              )}
            </div>

            <div className={css.view__delivery_wrapper}>
              <h3 className={css.view__delivery_title}>Доставка в: КИЕВ</h3>

              <ul className={css.view__delivery_list}>
                <li className={css.view__delivery_list_item}>
                  <p className={css.view__delivery_list_item_title}>
                    Самовывоз по нашему адресу
                  </p>
                  <p className={css.view__delivery_list_item_price}>
                    Бесплатно
                  </p>
                </li>
                <li className={css.view__delivery_list_item}>
                  <p className={css.view__delivery_list_item_title}>
                    Самовывоз из Новой Почты
                  </p>
                  <p className={css.view__delivery_list_item_price}>
                    По тарифам перевозчика
                  </p>
                </li>
                <li className={css.view__delivery_list_item}>
                  <p className={css.view__delivery_list_item_title}>
                    Самовывоз из Укрпочты
                  </p>
                  <p className={css.view__delivery_list_item_price}>
                    По тарифам перевозчика
                  </p>
                </li>
                <li className={css.view__delivery_list_item}>
                  <p className={css.view__delivery_list_item_title}>
                    Самовывоз из Justin
                  </p>
                  <p className={css.view__delivery_list_item_price}>
                    По тарифам перевозчика
                  </p>
                </li>
              </ul>
            </div>
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

      {view && <Viewed prodId={queryItem} loaderStatus={loaderStatus} />}
    </section>
  );
};

export default ProductsList;
