import React, { useState } from "react";
import Header from "../Component/Header/Header";
import SliderBar from "../Component/SliderBar/SliderBar";
import Main from "../Component/Main/Main";
import Footer from "../Component/Footer/Footer";
import ModalBurger from "../Component/ModalBurger/ModalBurger";
import ModalBasket from "../Component/ModalBasket/ModalBasket";
import css from "./App.module.css";

function App() {
  const [modalOpen, setModalOpen] = useState("nothin");

  const modalOpenHandler = (status) => {
    setModalOpen(status);
  };

  return (
    <div className={css.container}>
      <Header modalOpenHandler={modalOpenHandler} />
      <SliderBar />
      <Main />
      <Footer />
      <ModalBurger modalOpen={modalOpen} modalOpenHandler={modalOpenHandler} />
      <ModalBasket modalOpen={modalOpen} modalOpenHandler={modalOpenHandler} />
    </div>
  );
}

export default App;
