import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { getOneProduct } from "../../redux/operations/viewOperation";
import { viewLoad } from "../../redux/actions/viewAction";
import { viewSelector } from "../../redux/selectors/selectors";
import css from "./View.module.css";

const ProductsList = ({ location, history }) => {
  const [imgSelected, setImgSelected] = useState(1);

  const view = useSelector((state) => viewSelector(state));

  const dispatch = useDispatch();

  const queryItem = queryString.parse(location.search).p;

  const getOneProductHanvler = useCallback(() => {
    dispatch(getOneProduct(Number(queryItem)));
  }, [dispatch, queryItem]);

  useEffect(() => {
    getOneProductHanvler();
    return () => {
      dispatch(viewLoad(null));
    };
  }, [dispatch, getOneProductHanvler]);

  const availability =
    !view ||
    (view.quantity === 0 && "Закончился") ||
    (view.quantity === 1 && "Заканчивается") ||
    (view.quantity >= 2 && "В наличии");

  const selectImgHandler = ({ target }) => {
    setImgSelected(Number(target.id));
    history.push(`${location.search}#img=${Number(target.id)}`);
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
          <h2 className={css.view__title}>{view.title}</h2>

          <p>{view.category}</p>

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
                id={idx + 1}
              />
            ))}
          </div>

          <p>{availability}</p>

          <p>{view.price}</p>

          <p>{view.desc}</p>
        </div>
      )}
    </section>
  );
};

export default ProductsList;
