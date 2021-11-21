import React, { useEffect, useState } from "react";
import InfiniteCarousel from "react-leaf-carousel";
import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getViewedProducts } from "../../redux/operations/productOperation";
import { cartSet } from "../../redux/actions/cartAction";
import { loaderSelector } from "../../redux/selectors/selectors";
import noimage from "../../images/products/no-image.png";
import css from "../../helpers/sliders.module.css";

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
      {
        breakpoint: 1280,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4,
        },
      },
    ],
    animationDuration: 500,
    arrows: true,
    dots: false,
    slidesToScroll: 5,
    slidesToShow: 5,
    slidesSpacing: 4,
    swipe: false,
  };

  useEffect(() => {
    const filteredArr = viewed.filter(
      (item, idx) => idx <= 14 && item.id !== prodId
    );

    dispatch(getViewedProducts(filteredArr)).then(({ data }) =>
      setViewedProd(data)
    );
    return () => {
      setViewedProd(null);
    };
    // eslint-disable-next-line
  }, [dispatch, prodId]);

  const prodCartHandler = ({ target }) => {
    dispatch(cartSet({ id: target.id }));
  };

  return (
    <section className={css.sliders}>
      {viewedProd?.length > 0 && (
        <div className={css.sliders__wrapper}>
          <h2 className={css.sliders__title}>Переглянуто</h2>
          <ul className={css.sliders__list}>
            <InfiniteCarousel {...settings}>
              {viewedProd.map((item) => (
                <div key={item.id} className={css.sliders__list_item}>
                  <Link to={`/products/view?p=${item.id}`}>
                    {item.images[0] ? (
                      <img
                        className={css.sliders__list_item_img}
                        src={item.images[0]}
                        alt={item.title}
                        width="130"
                        height="130"
                      />
                    ) : (
                      <img
                        className={css.sliders__list_item_img}
                        src={noimage}
                        alt="Изображение не загружено"
                      />
                    )}
                  </Link>

                  <div className={css.sliders__list_item_bottom_wrapper}>
                    <Link to={`/products/view?p=${item.id}`}>
                      <h3 className={css.sliders__list_item_title}>
                        {item.title}
                      </h3>
                    </Link>

                    <div className={css.sliders__list_item_wrapper}>
                      <p className={css.sliders__list_item_price}>
                        {item.price}
                      </p>
                      <div className={css.sliders__list_item_favourite_wraper}>
                        <button
                          className={css.sliders__list_item_favourite}
                        ></button>
                        <button
                          onClick={prodCartHandler}
                          className={css.sliders__list_item_btn}
                          id={item.id}
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </InfiniteCarousel>
          </ul>
        </div>
      )}
    </section>
  );
};

Viewed.propTypes = {
  prodId: PropTypes.string.isRequired,
  viewed: PropTypes.array.isRequired,
};

export default Viewed;
