import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/operations/productOperation";
import css from "./Products.module.css";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product);

  useEffect(() => {
    document.title = "Все товары";
    dispatch(getAllProducts());
    console.log("update");
  }, [dispatch]);

  console.log(products);

  return (
    <section className={css.products}>
      <div className={css.products__wrapper}>
        <h2 className={css.products__title}>Все товары</h2>
        <ul className={css.products__list}>
          {products.map((prod) => (
            <li key={prod.id} className={css.products__list_item}>
              <img
                className={css.products__list_item_img}
                src={prod.images[0]}
                alt={prod.title}
                width="130"
                height="130"
              />
              <h3 className={css.products__list_item_title}>{prod.title}</h3>
              <p className={css.products__list_item_price}>{prod.price} грн</p>
              <button className={css.products__list_item_btn}>Купить</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
