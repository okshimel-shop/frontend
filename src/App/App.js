import React, { useState } from "react";
import Header from "../Component/Header/Header";
import SliderBar from "../Component/SliderBar/SliderBar";
import Main from "../Component/Main/Main";
import Footer from "../Component/Footer/Footer";
import ModalSidebar from "../Component/ModalSidebar/ModalSidebar";
import css from "./App.module.css";

function App() {
  const [modalSbStatus, setModalSbStatus] = useState(false);

  const modalSbToggle = () => {
    setModalSbStatus((state) => !state);
  };

  return (
    <div className={css.container}>
      <Header modalSbToggle={modalSbToggle} />
      <SliderBar />
      <Main />
      <Footer />
      <ModalSidebar
        modalSbStatus={modalSbStatus}
        modalSbToggle={modalSbToggle}
      />
    </div>
  );
}

export default App;
