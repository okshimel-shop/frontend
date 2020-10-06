import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { isUserLoginOperation } from "../redux/operations/userOperation";

import AdminBar from "../Component/AdminBar/AdminBar";
import Header from "../Component/Header/Header";
import Main from "../Containers/Main/Main";
import Login from "../Containers/Login/Login";
import Products from "../Containers/Products/Products";
import Company from "../Containers/Company/Company";
import Footer from "../Component/Footer/Footer";
import AdminModal from "../Component/AdminModal/AdminModal";
import ModalBurger from "../Component/ModalBurger/ModalBurger";
import ModalBasket from "../Component/ModalBasket/ModalBasket";

import css from "./App.module.css";

// const Products = React.lazy(() => import("../Containers/Products/Products"));

function App() {
  const dispatch = useDispatch();
  const islogged = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(isUserLoginOperation());
  });

  return (
    <div className={css.container}>
      {islogged && <AdminBar />}
      <Header />

      {/* <Suspense fallback={<div>Загрузка...</div>}> */}
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
      {/* </Suspense> */}

      <Footer />

      <AdminModal />
      <ModalBurger />
      <ModalBasket />
    </div>
  );
}

export default App;
