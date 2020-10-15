import React from "react";
import css from "./Availability.module.css";

const Availability = ({ quantity }) => {
  return (
    <>
      {quantity > 1 && (
        <div className={css.availability_stock}>
          <p className={css.availability_stock__text}>Есть в наличии</p>
        </div>
      )}

      {quantity === 1 && (
        <div className={css.availability_ends}>
          <p className={css.availability_ends__text}>Заканчивается</p>
        </div>
      )}

      {quantity < 1 && (
        <div className={css.availability_ended}>
          <p className={css.availability_ended__text}>Нет в наличии</p>
        </div>
      )}
    </>
  );
};

export default Availability;
