import React, { useEffect, useState } from "react";
import throttle from "lodash.throttle";
import MainSlider from "../../Components/MainSlider/MainSlider";
import NewProducts from "../../Components/NewProducts/NewProducts";
import Discounts from "../../Components/Discounts/Discounts";
import Bestsellers from "../../Components/Bestsellers/Bestsellers";

const howStartWidth = () => {
  const width = window.innerWidth;

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
  const [slidesToShow, setSlidesToShow] = useState(howStartWidth());

  useEffect(() => {
    document.title = `${title} Онлайн магазин товаров ручной работы`;
    window.addEventListener("resize", throttle(resizeWidthHandler, 300));
    return function cleanEventListener() {
      window.removeEventListener("resize", resizeWidthHandler);
    };
  }, []);

  const resizeWidthHandler = () => {
    const width = window.innerWidth;

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
