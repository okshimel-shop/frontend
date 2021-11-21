import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InfiniteCarousel from "react-leaf-carousel";
import { getNewProducts } from "../../redux/operations/productOperation";
import { loaderSelector } from "../../redux/selectors/selectors";
import noimage from "../../images/products/no-image.png";
import Loader from "../../Components/Loader/Loader";
import css from "../../helpers/sliders.module.css";

const NewProducts = () => {
  const [newProducts, setNewProducts] = useState(null);

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
    dispatch(getNewProducts(15))
      .then(({ data }) => setNewProducts(data))
      .catch((err) => console.log(err));

    return () => {
      setNewProducts(null);
    };
  }, [dispatch]);

  return (
    <>
      <section className={css.sliders}>
        {loaderStatus && <Loader />}

        <div className={css.sliders__wrapper}>
          <h2 className={css.sliders__title}>Новинки</h2>
          <ul className={css.sliders__list}>
            {!loaderStatus && newProducts && (
              <InfiniteCarousel {...settings}>
                {newProducts.map((prod) => (
                  <div key={prod.id} className={css.sliders__list_item}>
                    <Link to={`/products/view?p=${prod.id}`}>
                      {prod.images[0] ? (
                        <img
                          className={css.sliders__list_item_img}
                          src={prod.images[0]}
                          alt={prod.title}
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
                      <Link to={`/products/view?p=${prod.id}`}>
                        <h3 className={css.sliders__list_item_title}>
                          {prod.title}
                        </h3>
                      </Link>

                      <div className={css.sliders__list_item_wrapper}>
                        <p className={css.sliders__list_item_price}>
                          {prod.price}
                        </p>
                        <div
                          className={css.sliders__list_item_favourite_wraper}
                        >
                          <button
                            className={css.sliders__list_item_favourite}
                          ></button>
                          <button
                            className={css.sliders__list_item_btn}
                          ></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </InfiniteCarousel>
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default NewProducts;
