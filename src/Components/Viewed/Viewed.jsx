import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteCarousel from "react-leaf-carousel";
import { viewedClear } from "../../redux/actions/viewedAction";
import { getViewedProducts } from "../../redux/operations/viewedOperation";
import { viewedSelector } from "../../redux/selectors/selectors";
import css from "./Viewed.module.css";

const Viewed = ({ prodId, loaderStatus }) => {
  const dispatch = useDispatch();

  const viewed = useSelector((state) => viewedSelector(state));

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
    const lastViewed = JSON.parse(localStorage.getItem("viewed"));
    const filteredArr = lastViewed.filter(
      (item, idx) => idx < 9 && item.id !== prodId
    );

    dispatch(getViewedProducts(filteredArr));
    return () => {
      dispatch(viewedClear([]));
    };
  }, [dispatch, prodId]);

  return (
    <>
      {!loaderStatus && viewed.length !== 0 && (
        <section className={css.viewed}>
          <div className={css.viewed__wrapper}>
            <h2 className={css.viewed__title}>Недавно смотрели</h2>
            <ul className={css.viewed__list}>
              <InfiniteCarousel {...settings}>
                {viewed.map((item) => (
                  <div key={item.id} className={css.viewed__list_item}>
                    <img
                      className={css.viewed__list_item_img}
                      src={item.images[0]}
                      alt={item.title}
                    />
                    <h3 className={css.viewed__list_item_title}>
                      {item.title}
                    </h3>
                    <div className={css.viewed__list_item_wrapper}>
                      <p className={css.viewed__list_item_price}>120</p>
                      <div className={css.viewed__list_item_favourite_wraper}>
                        <button
                          className={css.viewed__list_item_favourite}
                        ></button>
                        <button className={css.viewed__list_item_btn}></button>
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

export default Viewed;
