import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  loaderSelector,
  quantitySelector,
} from "../../redux/selectors/selectors";
import { modalClose } from "../../redux/actions/modalAction";
import Loader from "../../Components/Loader/Loader";
import Pagination from "@material-ui/lab/Pagination";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  deleteProduct,
  getAllProducts,
  getQuantityProducts,
} from "../../redux/operations/productOperation";
import css from "./AdminProductList.module.css";

const AdminProductList = () => {
  const [page, setPage] = useState(1);
  const [limitOnPage] = useState(12);
  const [products, setProducts] = useState(null);

  const quantity = useSelector((state) => quantitySelector(state));
  const loaderStatus = useSelector((state) => loaderSelector(state));

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!quantity) dispatch(getQuantityProducts());
    if (quantity) {
      dispatch(getAllProducts(page, limitOnPage, quantity)).then((res) => {
        console.log(res);
        return setProducts(res);
      });
    }

    return () => {
      setProducts(null);
    };
  }, [dispatch, limitOnPage, page, quantity]);

  const productDeleteHandler = (docId, images) => {
    dispatch(deleteProduct(docId, images)).then(
      ({ status, quantityProducts }) => {
        status &&
          setTimeout(() => {
            dispatch(
              getAllProducts(page, limitOnPage, quantityProducts)
            ).then((res) => setProducts(res));
          }, 500);
      }
    );
  };

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
      {loaderStatus && (
        <div className={css.admin_product__loader_wrapper}>
          <Loader />
        </div>
      )}

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

              <IconButton
                onClick={() => productDeleteHandler(prod.docId, prod.images)}
                aria-label="delete"
                size="small"
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
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
          hidePrevButton
          hideNextButton
        />
      </div>
    </>
  );
};

export default AdminProductList;
