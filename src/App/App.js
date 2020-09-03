import React from "react";
import Header from "../Component/Header/Header";
import css from "./App.module.css";
import Main from "../Component/Main/Main";
import Footer from "../Component/Footer/Footer";

function App() {
  return (
    <div className={css.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
