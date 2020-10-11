import React from "react";
import Loader from "react-loader-spinner";
import css from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={css.loader__wrapper}>
      <Loader type="Oval" color="#666" height={100} width={100} />
    </div>
  );
};

export default Spinner;
