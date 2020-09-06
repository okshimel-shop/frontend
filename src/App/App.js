import React, { useState } from "react";
import Header from "../Component/Header/Header";
import SliderBar from "../Component/SliderBar/SliderBar";
import Main from "../Component/Main/Main";
import Footer from "../Component/Footer/Footer";
import ModalBurger from "../Component/ModalBurger/ModalBurger";
import ModalBasket from "../Component/ModalBasket/ModalBasket";
import css from "./App.module.css";

function App() {
  const [isModalBurg, setIsModalBurg] = useState(false);
  const [isModalBask, setIsModalBask] = useState(false);

  const modalBurgTog = (status) => {
    setIsModalBurg(status);
  };

  const modalBaskTog = (status) => {
    setIsModalBask(status);
  };

  return (
    <div className={css.container}>
      <Header modalBurgTog={modalBurgTog} modalBaskTog={modalBaskTog} />
      <SliderBar />
      <Main />
      <Footer />
      <ModalBurger isModalBurg={isModalBurg} modalBurgTog={modalBurgTog} />
      <ModalBasket isModalBask={isModalBask} modalBaskTog={modalBaskTog} />
    </div>
  );
}

export default App;
