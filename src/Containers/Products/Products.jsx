import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import Spinner from "../../Components/Spinner/Spinner";
import Pagination from "@material-ui/lab/Pagination";
import {
  getAllProducts,
  getQuantityProducts,
} from "../../redux/operations/productOperation";
import { spinnerEnable } from "../../redux/actions/spinnerAction";
import css from "./Products.module.css";

const Products = ({ location }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limitOnPage] = useState(12);
  const [quantityProducts, setQuantityProducts] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const spinnerStatus = useSelector((state) => state.spinner);
  const queryParams = queryString.parse(location.search).page;

  useEffect(() => {
    const handlePageNumber = queryParams ? Number(queryParams) : 1;
    setPage(handlePageNumber);
    return () => {
      dispatch(spinnerEnable());
    };
  }, [dispatch, queryParams]);

  useEffect(() => {
    if (!quantityProducts) {
      dispatch(getQuantityProducts()).then((res) => setQuantityProducts(res));
    }
  }, []);

  useEffect(() => {
    document.title = "Все товары";

    if (quantityProducts) {
      dispatch(
        getAllProducts(page, limitOnPage, quantityProducts)
      ).then((res) => setProducts(res));
    }
  }, [quantityProducts, page]);

  const handlePageChange = (event, value) => {
    history.push(`?page=${value}`);
  };

  return (
    <section className={css.products}>
      {spinnerStatus ? (
        <Spinner />
      ) : (
        <div className={css.products__wrapper}>
          <h2 className={css.products__title}>Все товары</h2>

          <ul className={css.products__list}>
            {products.map((prod) => (
              <li key={prod.docId} className={css.products__list_item}>
                <img
                  className={css.products__list_item_img}
                  src={prod.images[0]}
                  alt={prod.title}
                  width="130"
                  height="130"
                />
                <h3 className={css.products__list_item_title}>{prod.title}</h3>
                <p className={css.products__list_item_price}>{prod.price} ₴</p>
                <button className={css.products__list_item_btn}>Купить</button>
              </li>
            ))}
          </ul>

          <div className={css.products__pagination}>
            <Pagination
              count={Math.ceil(quantityProducts / limitOnPage)}
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
