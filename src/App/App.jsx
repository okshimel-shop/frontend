import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../Component/Header/Header";
import Main from "../Containers/Main/Main";
import Login from "../Containers/Login/Login";
import Products from "../Containers/Products/Products";
import Company from "../Containers/Company/Company";
import Footer from "../Component/Footer/Footer";
import ModalBurger from "../Component/ModalBurger/ModalBurger";
import ModalBasket from "../Component/ModalBasket/ModalBasket";

import css from "./App.module.css";

// const Products = React.lazy(() => import("../Containers/Products/Products"));

function App() {
  return (
    <div className={css.container}>
      <Header />

      {/* <Suspense fallback={<div>Загрузка...</div>}> */}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />

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

      <ModalBurger />
      <ModalBasket />
    </div>
  );
}

export default App;
