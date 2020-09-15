import React, { useEffect, useState } from "react";
import throttle from "lodash.throttle";
import MainSlider from "../../Component/MainSlider/MainSlider";
import NewProducts from "../../Component/NewProducts/NewProducts";
import Discounts from "../../Component/Discounts/Discounts";
import Bestsellers from "../../Component/Bestsellers/Bestsellers";

const resizeHandler2 = () => {
  const width = document.documentElement.clientWidth;
  if (width <= 767) {
    return 2;
  } else if (width >= 768 && width <= 1023) {
    return 3;
  } else {
    return 4;
  }
};
const title = "Okshimel Shop |";

const Main = () => {
  const [slidesToShow, setSlidesToShow] = useState(resizeHandler2());

  useEffect(() => {
    document.title = `${title} Онлайн магазин товаров ручной работы`;
    window.addEventListener("resize", throttle(resizeHandler, 300));
    return function cleanEventListener() {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const resizeHandler = () => {
    const width = document.documentElement.clientWidth;

    if (width <= 767) {
      setSlidesToShow(2);
    } else if (width >= 768 && width <= 1023) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(4);
    }
  };

  return (
    <>
      <MainSlider />
      <Discounts slides={slidesToShow} />
      <Bestsellers slides={slidesToShow} />
      <NewProducts slides={slidesToShow} />
    </>
  );
};

export default Main;
