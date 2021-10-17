import React from "react";
import { Helmet } from "react-helmet";
import MainSlider from "../../Components/MainSlider/MainSlider";
import NewProducts from "../../Components/NewProducts/NewProducts";
import Discounts from "../../Components/Discounts/Discounts";
import Popular from "../../Components/Popular/Popular";

const Main = () => {
  return (
    <>
      <Helmet>
        <title>Okshimel Shop | Онлайн магазин товаров ручной работы</title>
      </Helmet>

      <MainSlider />

      <Popular />
      <Discounts />
      <NewProducts />
    </>
  );
};

export default Main;
