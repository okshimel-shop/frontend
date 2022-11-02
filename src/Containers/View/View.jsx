import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import { Carousel } from "react-responsive-carousel";
import Availability from "../../Components/Availability/Availability";
import Viewed from "../../Components/Viewed/Viewed";
import Loader from "../../Components/Loader/Loader";
import { viewedLoad } from "../../redux/actions/viewedAction";
import { cartSet } from "../../redux/actions/cartAction";
import { getOneProduct } from "../../redux/operations/productOperation";
import { cartSelector, viewedSelector } from "../../redux/selectors/selectors";
import { modalOpen } from "../../redux/actions/modalAction";
//import review from "../../images/pet/review.png";
import css from "./View.module.css";

const ProductsList = ({ location, history }) => {
  const [oneProd, setOneProd] = useState(null);
  const [isInCart, setIsInCart] = useState(false);
  const [loaderStatus, setLoaderStatus] = useState(false);

  const viewed = useSelector((state) => viewedSelector(state));
  const cartId = useSelector((state) => cartSelector(state));

  const dispatch = useDispatch();

  const settings = {
    showArrows: true,
    showIndicators: true,
    showStatus: false,
    showThumbs: false,
    useKeyboardArrows: false,
    stopOnHover: false,
    dynamicHeight: false,
    autoPlay: false,
    infiniteLoop: true,
    swipeable: false,
    axis: "horizontal",
    interval: 0,
    transitionTime: 250,
  };

  const productId = queryString.parse(location.search).p;

  useEffect(() => {
    const isViewFound = viewed.find((item) => item.id === productId);

    setLoaderStatus(true);
    dispatch(getOneProduct(Number(productId), !!isViewFound))
      .then(({ data }) => setOneProd(data))
      .finally(
        setTimeout(() => {
          setLoaderStatus(false);
        }, 500)
      );
    // eslint-disable-next-line
  }, [productId]);

  useEffect(() => {
    if (oneProd) {
      const filterArrViewed = viewed.find((item) => item.id === productId);

      if (!filterArrViewed) {
        const newArrViewed = [{ id: productId, date: Date.now() }, ...viewed];
        dispatch(viewedLoad(newArrViewed));
      }
    }
    // eslint-disable-next-line
  }, [dispatch, oneProd, productId]);

  useEffect(() => {
    if (cartId && oneProd) {
      const result = cartId.some((item) => Number(item.id) === oneProd.id);
      setIsInCart(result);
    }
  }, [cartId, oneProd]);

  const prodCartHandler = ({ currentTarget }) => {
    dispatch(modalOpen("right"));
    dispatch(cartSet({ id: currentTarget.id }));
  };

  return (
    <section className={css.view}>
      {oneProd && (
        <Helmet>
          <title>{oneProd.title} | Okshimel Shop</title>
        </Helmet>
      )}

      {loaderStatus && <Loader />}

      {!loaderStatus && oneProd && (
        <div className={css.view__wrapper}>
          {oneProd?.subcategory && (
            <span className={css.view__category}>
              <Breadcrumbs aria-label="breadcrumb">
                {oneProd.subcategory.category.type.title && (
                  <Link underline="hover" color="inherit" href="#">
                    {oneProd.subcategory.category.type.title}
                  </Link>
                )}
                {oneProd.subcategory.category.title && (
                  <Link underline="hover" color="inherit" href="#">
                    {oneProd.subcategory.category.title}
                  </Link>
                )}
                {oneProd.subcategory.title && (
                  <Link underline="hover" color="inherit" href="#">
                    {oneProd.subcategory.title}
                  </Link>
                )}
              </Breadcrumbs>
            </span>
          )}

          <h2 className={css.view__title}>{oneProd.title}</h2>

          <div className={css.view_main_wrapper}>
            <ul className={css.view_preview_img_list}>
              <Carousel {...settings}>
                {oneProd.images.map((item, idx) => (
                  <img
                    key={idx}
                    className={css.view_preview_img_item}
                    src={item}
                    alt={oneProd.title}
                  />
                ))}
              </Carousel>
            </ul>

            <div className={css.view__order_wrapper}>
              <p className={css.view__order_price}>{oneProd.price}</p>

              <Availability quantity={oneProd.amount} />

              {!isInCart && oneProd.amount > 0 && (
                <button
                  onClick={prodCartHandler}
                  className={`${css.view__order_button} ${css.view__order_button_buy}`}
                  id={oneProd.id}
                >
                  <span className={css.view__order_button_title}>
                    Додати в кошик
                  </span>
                </button>
              )}

              {isInCart && oneProd.amount > 0 && (
                <button
                  className={`${css.view__order_button} ${css.view__order_button_in_cart}`}
                >
                  Товар вже в кошику
                </button>
              )}

              {oneProd.amount < 1 && (
                <button
                  className={`${css.view__order_button} ${css.view__order_button_under_the_order}`}
                >
                  Під замовлення
                </button>
              )}
            </div>

            <div className={css.view__delivery_wrapper}>
              <h3 className={css.view__delivery_title}>Доставка в: Київ</h3>

              <ul className={css.view__delivery_list}>
                <li className={css.view__delivery_list_item}>
                  <p className={css.view__delivery_list_item_title}>
                    Самовивіз з нашої адреси
                  </p>
                  <p className={css.view__delivery_list_item_price}>
                    Безкоштовно
                  </p>
                </li>
                <li className={css.view__delivery_list_item}>
                  <p className={css.view__delivery_list_item_title}>
                    Самовивіз з Нової Пошти
                  </p>
                  <p className={css.view__delivery_list_item_price}>
                    за тарифами перевізника
                  </p>
                </li>
                <li className={css.view__delivery_list_item}>
                  <p className={css.view__delivery_list_item_title}>
                    Самовивіз з JustIn
                  </p>
                  <p className={css.view__delivery_list_item_price}>
                    за тарифами перевізника
                  </p>
                </li>
              </ul>
            </div>

            <div
              className={`${css.view__payment_info_wrapper} ${css.view__payment_info_block_one}`}
            >
              <h3 className={css.view__payment_info_title}>Способи оплати</h3>
              <p className={css.view__payment_info_text}>
                Оплата під час самовивозу або картою онлайн
              </p>
            </div>
          </div>

          <div className={css.view__bottom_info_wrapper}>
            {oneProd.descriptions && (
              <div className={css.view__description}>
                <h3 className={css.view__description_title}>Опис товару</h3>

                <p className={css.view__description_text}>
                  {oneProd.descriptions}
                </p>
              </div>
            )}
            <div
              className={`${css.view__payment_info_wrapper} ${css.view__payment_info_block_two}`}
            >
              <h3 className={css.view__payment_info_title}>Способи оплати</h3>
              <p className={css.view__payment_info_text}>
                Оплата під час самовивозу або картою онлайн
              </p>
            </div>

            <div className={css.view__reviews_wrapper}>
              <div className={css.view__reviews_header_block}>
                <h3 className={css.view__reviews_header_title}>
                  Відгуки та питання
                  <span className={css.view__reviews_header_counter}> 2</span>
                </h3>
                <button className={css.view__reviews_header_add_btn}>
                  Додати
                </button>
              </div>

              {/* <div>
                <img src={review} alt="test" width="64" height="64" />
              </div> */}

              <div className={css.view__reviews_list_wrapper}>
                <ul className={css.view__reviews_list}>
                  <li className={css.view__reviews_list_item}>
                    <div className={css.view__reviews_list_item_header}>
                      <span className={css.view__reviews_list_item_name}>
                        Andrew Oskolok
                      </span>
                      <span className={css.view__reviews_list_item_date}>
                        19.02.2022
                      </span>
                    </div>
                    <p className={css.view__reviews_list_item_comment}>
                      My comment shasiohasas asdihg ashguhasiupg hpasiu gpas
                    </p>
                  </li>
                  <li className={css.view__reviews_list_item}>
                    <div className={css.view__reviews_list_item_header}>
                      <span className={css.view__reviews_list_item_name}>
                        Ruslan Danik
                      </span>
                      <span className={css.view__reviews_list_item_date}>
                        19.02.2022
                      </span>
                    </div>
                    <p className={css.view__reviews_list_item_comment}>
                      My comment jaas sajhg jhasdkgh asklhgaskldg k
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {viewed && viewed.length > 1 && (
        <Viewed prodId={productId} viewed={viewed} />
      )}
    </section>
  );
};

export default ProductsList;
