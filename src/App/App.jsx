import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { isUserLoginOperation } from "../redux/operations/userOperation";

import Header from "../Components/Header/Header";
import Main from "../Containers/Main/Main";
import Login from "../Containers/Login/Login";
import Products from "../Containers/Products/Products";
import Company from "../Containers/Company/Company";
import Footer from "../Components/Footer/Footer";
import AdminModal from "../Components/AdminModal/AdminModal";
import ModalBurger from "../Components/ModalBurger/ModalBurger";
import ModalBasket from "../Components/ModalBasket/ModalBasket";

import css from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const islogged = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(isUserLoginOperation());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Header islogged={islogged} />
      <Switch>
        <Route exact path="/" component={Main} />
        {!islogged && <Route exact path="/admin" component={Login} />}

        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Products} />

        <Route exact path="/about" component={Company} />
        <Route exact path="/contacts" component={Company} />
        <Route exact path="/deliveries" component={Company} />
        <Route exact path="/payments" component={Company} />

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
