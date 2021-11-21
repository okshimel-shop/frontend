import React from "react";
import Loader from "react-loader-spinner";
import css from "./Loader.module.css";

const Spinner = () => {
  return (
    <div className={css.loader__wrapper}>
      {/* <Loader type="Oval" color="#666" height={50} width={50} /> */}
      <Loader type="Grid" color="#666" height={50} width={50} />
      {/* <Loader type="ThreeDots" color="#666" height={50} width={50} /> */}
    </div>
  );
};

export default Spinner;
