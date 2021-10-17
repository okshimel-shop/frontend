import React from "react";
import css from "./Availability.module.css";

const Availability = ({ quantity }) => {
  return (
    <>
      {quantity > 1 && (
        <div
          className={`${css.availability} ${css.availability__bg_color_stock}`}
        >
          <p className={css.availability__stock}>Є в наявності</p>
        </div>
      )}

      {quantity === 1 && (
        <div
          className={`${css.availability} ${css.availability__bg_color_ends}`}
        >
          <p className={css.availability__ends}>Закінчується</p>
        </div>
      )}

      {quantity < 1 && (
        <div
          className={`${css.availability} ${css.availability__bg_color_ended}`}
        >
          <p className={css.availability__ended}>Закінчився</p>
        </div>
      )}
    </>
  );
};

export default Availability;
