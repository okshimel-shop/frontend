import React, { useEffect, useState } from "react";
import InfiniteCarousel from "react-leaf-carousel";
import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getViewedProducts } from "../../redux/operations/viewedOperation";
import { cartSet } from "../../redux/actions/cartAction";
import { loaderSelector } from "../../redux/selectors/selectors";
import css from "./Viewed.module.css";

const Viewed = ({ prodId, viewed }) => {
  const [viewedProd, setViewedProd] = useState(null);

  const loaderStatus = useSelector((state) => loaderSelector(state));

  const dispatch = useDispatch();

  const settings = {
    breakpoints: [
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
        },
      },
    ],
    animationDuration: 500,
    arrows: true,
    dots: false,
    slidesToScroll: 4,
    slidesToShow: 4,
    slidesSpacing: 0,
    swipe: false,
  };

  useEffect(() => {
    const filteredArr = viewed.filter(
      (item, idx) => idx <= 7 && item.id !== prodId
    );

    dispatch(getViewedProducts(filteredArr)).then((res) => setViewedProd(res));
    return () => {
      setViewedProd(null);
    };
    // eslint-disable-next-line
  }, [dispatch, prodId]);

  const prodCartHandler = ({ target }) => {
    dispatch(cartSet({ id: target.id }));
  };

  return (
    <>
      {!loaderStatus && viewedProd && viewedProd.length > 0 && (
        <section className={css.viewed}>
          <div className={css.viewed__wrapper}>
            <h2 className={css.viewed__title}>Недавно смотрели</h2>
            <ul className={css.viewed__list}>
              <InfiniteCarousel {...settings}>
                {viewedProd.map((item) => (
                  <div key={item.id} className={css.viewed__list_item}>
                    <Link to={`/products/view?p=${item.id}`}>
                      <img
                        className={css.viewed__list_item_img}
                        src={item.images[0]}
                        alt={item.title}
                      />

                      <h3 className={css.viewed__list_item_title}>
                        {item.title}
                      </h3>
                    </Link>

                    <div className={css.viewed__list_item_wrapper}>
                      <p className={css.viewed__list_item_price}>
                        {item.price}
                      </p>
                      <div className={css.viewed__list_item_favourite_wraper}>
                        <button
                          className={css.viewed__list_item_favourite}
                        ></button>
                        <button
                          onClick={prodCartHandler}
                          className={css.viewed__list_item_btn}
                          id={item.id}
                        ></button>
                      </div>
                    </div>
                  </div>
                ))}
              </InfiniteCarousel>
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

Viewed.propTypes = {
  prodId: PropTypes.string.isRequired,
  viewed: PropTypes.array.isRequired,
};

export default Viewed;
