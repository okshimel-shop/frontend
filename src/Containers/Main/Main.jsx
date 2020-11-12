import React from "react";
import { Helmet } from "react-helmet";
import MainSlider from "../../Components/MainSlider/MainSlider";
import NewProducts from "../../Components/NewProducts/NewProducts";
import Discounts from "../../Components/Discounts/Discounts";
import Bestsellers from "../../Components/Bestsellers/Bestsellers";

const Main = () => {
  return (
    <>
      <Helmet>
        <title>Okshimel Shop | Онлайн магазин товаров ручной работы</title>
      </Helmet>

      <MainSlider />

      <Bestsellers />
      <Discounts />
      <NewProducts />
    </>
  );
};

export default Main;
