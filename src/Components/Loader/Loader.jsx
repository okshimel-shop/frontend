import React from "react";
import Loader from "react-loader-spinner";
import css from "./Loader.module.css";

const Spinner = () => {
  return (
    <div className={css.loader__wrapper}>
      <Loader type="Oval" color="#666" height={80} width={80} />
    </div>
  );
};

export default Spinner;
