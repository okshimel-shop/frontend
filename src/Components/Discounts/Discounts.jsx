import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InfiniteCarousel from "react-leaf-carousel";
import { getDiscounts } from "../../redux/operations/productOperation";
import { loaderSelector } from "../../redux/selectors/selectors";
import Loader from "../../Components/Loader/Loader";
import css from "../../helpers/sliders.module.css";

const Discounts = () => {
  const [discounts, setDiscounts] = useState(null);

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
    dispatch(getDiscounts(8)).then((res) => setDiscounts(res));

    return () => {
      setDiscounts(null);
    };
  }, [dispatch]);

  return (
    <section className={css.sliders}>
      {loaderStatus && <Loader />}

      {!loaderStatus && discounts && (
        <div className={css.sliders__wrapper}>
          <h2 className={css.sliders__title}>Акционные</h2>
          <ul className={css.sliders__list}>
            <InfiniteCarousel {...settings}>
              {discounts.map((prod) => (
                <div key={prod.docId} className={css.sliders__list_item}>
                  <Link to={`/products/view?p=${prod.id}`}>
                    <img
                      className={css.sliders__list_item_img}
                      src={prod.images[0]}
                      alt={prod.title}
                      width="130"
                      height="130"
                    />
                    <h3 className={css.sliders__list_item_title}>
                      {prod.title}
                    </h3>
                  </Link>

                  <div className={css.sliders__list_item_wrapper}>
                    <p className={css.sliders__list_item_price}>{prod.price}</p>
                    <div className={css.sliders__list_item_favourite_wraper}>
                      <button
                        className={css.sliders__list_item_favourite}
                      ></button>
                      <button className={css.sliders__list_item_btn}></button>
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

export default Discounts;
