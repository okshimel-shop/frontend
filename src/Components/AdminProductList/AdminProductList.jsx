import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { modalClose } from "../../redux/actions/modalAction";
import Pagination from "@material-ui/lab/Pagination";
import {
  getAllProducts,
  getQuantityProducts,
} from "../../redux/operations/productOperation";
import { quantitySelector } from "../../redux/selectors/selectors";
import css from "./AdminProductList.module.css";

const AdminProductList = () => {
  const [page, setPage] = useState(1);
  const [limitOnPage] = useState(12);
  const [products, setProducts] = useState(null);

  const quantity = useSelector((state) => quantitySelector(state));

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getQuantityProducts());

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (quantity) {
      dispatch(getAllProducts(page, limitOnPage, quantity)).then((res) =>
        setProducts(res)
      );
    }

    return () => {
      setProducts(null);
    };
  }, [dispatch, limitOnPage, page, quantity]);

  const pageChangeHandle = (event, value) => {
    setPage(value);
  };

  const toProductPage = ({ target }) => {
    dispatch(modalClose());
    history.push(`/products/view?p=${target.id}`);
  };

  const timeConverter = (timestamp) => {
    const time = new Date(timestamp);

    var date = "0" + time.getDate();
    var month = "0" + time.getMonth();
    var year = time.getFullYear();
    return `${date.substr(-2)}.${month.substr(-2)}.${year}`;
  };

  return (
    <>
      <ul className={css.admin_product}>
        {products &&
          products.map((prod) => (
            <li
              key={prod.docId}
              className={css.admin_product__item}
              id={prod.id}
            >
              <p className={css.admin_product__item_id}>#{prod.id}</p>
              <img
                onClick={toProductPage}
                className={css.admin_product__item_img}
                src={prod.images[0]}
                alt={prod.title}
                width="130"
                height="130"
                id={prod.id}
              />
              <div className={css.admin_product__item_wrapper}>
                <p
                  onClick={toProductPage}
                  className={css.admin_product__item_title}
                  id={prod.id}
                >
                  {prod.title}
                </p>
                <p className={css.admin_product__item_price}>
                  Цена: {prod.price}
                </p>
                <p className={css.admin_product__item_quantity}>
                  Количество: {prod.quantity} шт.
                </p>
                <p className={css.admin_product__item_view}>
                  Просмотров: {prod.views}
                </p>
                <p className={css.admin_product__item_cat}>
                  Категория: {prod.category}
                </p>
              </div>
              <div>{timeConverter(prod.date)}</div>
            </li>
          ))}
      </ul>
      <div className={css.admin_product__pagination}>
        <Pagination
          count={Math.ceil(quantity / limitOnPage)}
          page={page}
          onChange={pageChangeHandle}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </>
  );
};

export default AdminProductList;
