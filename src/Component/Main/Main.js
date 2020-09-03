import React from "react";
import css from "./Main.module.css";
import SliderBar from "../SliderBar/SliderBar";
import Products from "../Products/Products";

const Main = () => {
  return (
    <div>
      <SliderBar />
      <Products />
    </div>
  );
};

export default Main;
