import React, { useEffect, useState } from "react";
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
import {
  loaderSelector,
  viewedSelector,
} from "../../redux/selectors/selectors";
import css from "./View.module.css";
import { viewedLoad } from "../../redux/actions/viewedAction";

const ProductsList = ({ location, history }) => {
  const [oneProd, setOneProd] = useState(null);
  const [imgSelected, setImgSelected] = useState(0);

  const loaderStatus = useSelector((state) => loaderSelector(state));
  const viewed = useSelector((state) => viewedSelector(state));

  const dispatch = useDispatch();

  const queryItem = queryString.parse(location.search).p;
  const hashId = queryString.parse(location.hash).img;

  useEffect(() => {
    oneProd && hashId && setImgSelected(hashId - 1);
  }, [oneProd, hashId]);

  useEffect(() => {
    if (oneProd) {
      const checkViewToday = viewed.find((item) => item.id === queryItem);
      !checkViewToday && dispatch(addOneView(oneProd.docId, oneProd.views));
    }
    // eslint-disable-next-line
  }, [dispatch, oneProd, queryItem]);

  useEffect(() => {
    if (oneProd) {
      const filterArrViewed = viewed.find((item) => item.id === queryItem);

      if (!filterArrViewed) {
        const newArrViewed = [{ id: queryItem, date: Date.now() }, ...viewed];
        dispatch(viewedLoad(newArrViewed));
      }
    }
    // eslint-disable-next-line
  }, [dispatch, oneProd, queryItem]);

  useEffect(() => {
    dispatch(getOneProduct(Number(queryItem))).then((res) => setOneProd(res));
    // eslint-disable-next-line
  }, [dispatch, queryItem]);

  const selectImgHandler = ({ target }) => {
    setImgSelected(Number(target.id));
    history.replace(`${location.search}#img=${Number(target.id) + 1}`);
  };

  return (
    <section className={css.view}>
      {oneProd && <Helmet>oneProd </Helmet>}

      {loaderStatus && <Loader />}

      {!loaderStatus && oneProd && (
        <div className={css.view__wrapper}>
          <p className={css.view__category}>
            <b>&#8249;</b> {oneProd.category}
          </p>

          <h2 className={css.view__title}>{oneProd.title}</h2>

          <div className={css.view_main_wrapper}>
            <img
              className={css.view_preview_img}
              src={oneProd.images[imgSelected]}
              alt={oneProd.title}
            />

            <div className={css.view__image_picker_wrapper}>
              {oneProd.images.map((img, idx) => (
                <img
                  onClick={selectImgHandler}
                  key={idx}
                  className={css.view__image_picker_item}
                  src={img}
                  alt={oneProd.title}
                  id={idx}
                />
              ))}
            </div>

            <div className={css.view__order_wrapper}>
              <p className={css.view__order_price}>{oneProd.price}</p>

              <Availability quantity={oneProd.quantity} />

              {oneProd.quantity > 0 && (
                <button className={css.view__order_buy}>Купить</button>
              )}
              {oneProd.quantity < 1 && (
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
              <span className={css.view__description_title_prod}>
                {` ${oneProd.title}`}
              </span>
            </h3>

            <p className={css.view__description_text}>{oneProd.desc}</p>
          </div>
        </div>
      )}

      {oneProd && <Viewed prodId={queryItem} viewed={viewed} />}
    </section>
  );
};

export default ProductsList;
