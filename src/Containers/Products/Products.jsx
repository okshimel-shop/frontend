import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import queryString from "query-string";
import Loader from "../../Components/Loader/Loader";
import Pagination from "@material-ui/lab/Pagination";
import {
  getAllProducts,
  getQuantityProducts,
} from "../../redux/operations/productOperation";
import { productsLoad } from "../../redux/actions/productAction";
import {
  loaderSelector,
  productsSelector,
  quantitySelector,
} from "../../redux/selectors/selectors";
import css from "./Products.module.css";

const Products = ({ location, history }) => {
  const [page, setPage] = useState(1);
  const [limitOnPage] = useState(12);

  const quantity = useSelector((state) => quantitySelector(state));
  const products = useSelector((state) => productsSelector(state));
  const loaderStatus = useSelector((state) => loaderSelector(state));

  const dispatch = useDispatch();

  const queryPage = queryString.parse(location.search).page;

  useEffect(() => {
    const handlePageNumber = queryPage ? Number(queryPage) : 1;
    setPage(handlePageNumber);
    return () => {
      dispatch(productsLoad(null));
    };
  }, [dispatch, queryPage]);

  const getQuantityProductsHandler = useCallback(() => {
    if (!quantity) {
      dispatch(getQuantityProducts());
    }
  }, [dispatch, quantity]);

  useEffect(() => {
    getQuantityProductsHandler();
  }, [getQuantityProductsHandler]);

  const getAllProductsHandler = useCallback(() => {
    if (quantity) {
      dispatch(getAllProducts(page, limitOnPage, quantity));
    }
  }, [dispatch, limitOnPage, page, quantity]);

  useEffect(() => {
    getAllProductsHandler();
  }, [getAllProductsHandler]);

  const handlePageChange = (event, value) => {
    history.push(`?page=${value}`);
  };

  return (
    <section className={css.products}>
      <Helmet>
        <title>Все товары | Okshimel Shop</title>
      </Helmet>

      {loaderStatus && <Loader />}

      {!loaderStatus && products && (
        <div className={css.products__wrapper}>
          <h2 className={css.products__title}>Все товары</h2>

          <ul className={css.products__list}>
            {products.map((prod) => (
              <li key={prod.docId} className={css.products__list_item}>
                <Link to={`/products/view?p=${prod.id}`}>
                  <img
                    className={css.products__list_item_img}
                    src={prod.images[0]}
                    alt={prod.title}
                    width="130"
                    height="130"
                  />
                </Link>
                <Link to={`/products/view?p=${prod.id}`}>
                  <h3 className={css.products__list_item_title}>
                    {prod.title}
                  </h3>
                </Link>

                <div className={css.products__list_item_wrapper}>
                  <p className={css.products__list_item_price}>{prod.price}</p>
                  <div className={css.products__list_item_favourite_wraper}>
                    <button
                      className={css.products__list_item_favourite}
                    ></button>
                    <button className={css.products__list_item_btn}></button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className={css.products__pagination}>
            <Pagination
              count={Math.ceil(quantity / limitOnPage)}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
