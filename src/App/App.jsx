import React, { Suspense, lazy, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isUserLoginOperation } from "../redux/operations/userOperation";

import Header from "../Components/Header/Header";
import Admin from "../Containers/Admin/Admin";
import Main from "../Containers/Main/Main";
import Footer from "../Components/Footer/Footer";

import AdminModal from "../Components/AdminModal/AdminModal";
import ModalBurger from "../Components/ModalBurger/ModalBurger";
import ModalBasket from "../Components/ModalBasket/ModalBasket";

import css from "./App.module.css";

const Products = lazy(() => import("../Containers/Products/Products"));
const View = lazy(() => import("../Containers/View/View"));
const Company = lazy(() => import("../Containers/Company/Company"));

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

      <Suspense fallback={""}>
        <Switch>
          <Route exact path="/" component={Main} />

          <Route exact path="/products" component={Products} />
          <Route exact path="/products/view" component={View} />

          <Route exact path="/about" component={Company} />
          <Route exact path="/contacts" component={Company} />
          <Route exact path="/deliveries" component={Company} />
          <Route exact path="/payments" component={Company} />

          <Route exact path="/admin" component={Admin} />

          <Redirect to="/" />
        </Switch>
      </Suspense>

      <Footer />

      <AdminModal />
      <ModalBurger />
      <ModalBasket />
    </div>
  );
}

export default App;
