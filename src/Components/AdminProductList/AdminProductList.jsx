import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { quantitySelector } from "../../redux/selectors/selectors";
import { modalClose } from "../../redux/actions/modalAction";
import Loader from "../../Components/Loader/Loader";
import Pagination from "@material-ui/lab/Pagination";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  deleteProduct,
  getAllProducts,
} from "../../redux/operations/productOperation";
import noimage from "../../images/products/no-image.png";
import css from "./AdminProductList.module.css";

const AdminProductList = () => {
  const [page, setPage] = useState(1);
  const [limitOnPage] = useState(12);
  const [products, setProducts] = useState(null);
  const [loaderStatus, setLoaderStatus] = useState(false);

  const quantity = useSelector((state) => quantitySelector(state));

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setLoaderStatus(true);
    dispatch(getAllProducts(page - 1, limitOnPage))
      .then((res) => setProducts(res))
      .finally(
        setTimeout(() => {
          setLoaderStatus(false);
        }, 1000)
      );

    return () => {
      setProducts(null);
    };
    // eslint-disable-next-line
  }, [page]);

  const productDeleteHandler = (id) => {
    dispatch(deleteProduct(id)).then(({ status }) => {
      status &&
        setTimeout(() => {
          dispatch(getAllProducts(page - 1, limitOnPage)).then((res) =>
            setProducts(res)
          );
        }, 500);
    });
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

      {!loaderStatus && (
        <>
          <ul className={css.admin_product}>
            {products &&
              products.map((prod) => (
                <li
                  key={prod.id}
                  className={css.admin_product__item}
                  id={prod.id}
                >
                  <p className={css.admin_product__item_id}>#{prod.id}</p>
                  {prod.images[0] ? (
                    <img
                      onClick={toProductPage}
                      className={css.admin_product__item_img}
                      src={prod.images[0]}
                      alt={prod.title}
                      width="130"
                      height="130"
                      id={prod.id}
                    />
                  ) : (
                    <img
                      onClick={toProductPage}
                      className={css.admin_product__item_img}
                      src={noimage}
                      alt="Изображение не загружено"
                      id={prod.id}
                    />
                  )}
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
                      Количество: {prod.amount} шт.
                    </p>
                    <p className={css.admin_product__item_view}>
                      Просмотров: {prod.views}
                    </p>
                    <p className={css.admin_product__item_cat}>
                      Категория: {prod.category}
                    </p>
                  </div>
                  <div>{timeConverter(prod.createdAt)}</div>

                  <IconButton
                    onClick={() => productDeleteHandler(prod.id)}
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
      )}
    </>
  );
};

export default AdminProductList;
