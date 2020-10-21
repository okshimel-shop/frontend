import React from "react";
import css from "./Availability.module.css";

const Availability = ({ quantity }) => {
  return (
    <>
      {quantity > 1 && (
        <div className={css.availability}>
          <p className={css.availability__stock}>Есть в наличии</p>
        </div>
      )}

      {quantity === 1 && (
        <div className={css.availability}>
          <p className={css.availability__ends}>Заканчивается</p>
        </div>
      )}

      {quantity < 1 && (
        <div className={css.availability}>
          <p className={css.availability__ended}>Нет в наличии</p>
        </div>
      )}
    </>
  );
};

export default Availability;
