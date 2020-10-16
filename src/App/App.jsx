import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { isUserLoginOperation } from "../redux/operations/userOperation";

import Header from "../Components/Header/Header";
import Main from "../Containers/Main/Main";
import Admin from "../Containers/Admin/Admin";
import Products from "../Containers/Products/Products";
import ProductsList from "../Containers/View/View";
import Company from "../Containers/Company/Company";
import Footer from "../Components/Footer/Footer";
import AdminModal from "../Components/AdminModal/AdminModal";
import ModalBurger from "../Components/ModalBurger/ModalBurger";
import ModalBasket from "../Components/ModalBasket/ModalBasket";

import css from "./App.module.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isUserLoginOperation());
  }, [dispatch]);

  useEffect(() => {
    if (!localStorage.getItem("viewed")) {
      localStorage.setItem("viewed", JSON.stringify([]));
    } else {
      const lastViewed = JSON.parse(localStorage.getItem("viewed"));
      const filtredViewed = lastViewed.filter(
        (item) =>
          Math.floor(Date.now() / 60000 / 60 / 24) ===
          Math.floor(item.date / 60000 / 60 / 24)
      );
      localStorage.setItem("viewed", JSON.stringify(filtredViewed));
    }
  }, []);

  return (
    <div className={css.container}>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />

        <Route exact path="/products" component={Products} />
        <Route exact path="/products/view" component={ProductsList} />

        <Route exact path="/about" component={Company} />
        <Route exact path="/contacts" component={Company} />
        <Route exact path="/deliveries" component={Company} />
        <Route exact path="/payments" component={Company} />

        <Route exact path="/admin" component={Admin} />

        <Redirect to="/" />
      </Switch>
      <Footer />

      <AdminModal />
      <ModalBurger />
      <ModalBasket />
    </div>
  );
}

export default App;
