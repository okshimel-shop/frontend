import React, { useState } from "react";
import Header from "../Component/Header/Header";
import SliderBar from "../Component/SliderBar/SliderBar";
import Main from "../Component/Main/Main";
import Footer from "../Component/Footer/Footer";
import ModalBurger from "../Component/ModalBurger/ModalBurger";
import css from "./App.module.css";

const template = {
  status: false,
  position: "undefined",
};

function App() {
  const [modalStatus, setModalStatus] = useState(template);

  return (
    <div className={css.container}>
      <Header setModalStatus={setModalStatus} />
      <SliderBar />
      <Main />
      <Footer />
      <ModalBurger modalStatus={modalStatus} setModalStatus={setModalStatus} />
    </div>
  );
}

export default App;
