import React, { Suspense, lazy, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { viewedSelector } from "../redux/selectors/selectors";

import Header from "../Components/Header/Header";
import Admin from "../Containers/Admin/Admin";
import Main from "../Containers/Main/Main";
import Footer from "../Components/Footer/Footer";

import AdminModal from "../Components/AdminModal/AdminModal";
import ModalBurger from "../Components/ModalBurger/ModalBurger";
import ModalCart from "../Components/ModalCart/ModalCart";

import css from "./App.module.css";
import { viewedLoad } from "../redux/actions/viewedAction";

const Products = lazy(() => import("../Containers/Products/Products"));
const View = lazy(() => import("../Containers/View/View"));
const About = lazy(() => import("../Containers/About/About"));
const Contact = lazy(() => import("../Containers/Contact/Contact"));
const Delivery = lazy(() => import("../Containers/Delivery/Delivery"));
const Payment = lazy(() => import("../Containers/Payment/Payment"));

function App() {
  const dispatch = useDispatch();

  const viewed = useSelector((state) => viewedSelector(state));

  useEffect(() => {
    const filtredViewed = viewed.filter(
      (item) =>
        Math.floor(Date.now() / 60000 / 60 / 24) ===
        Math.floor(item.date / 60000 / 60 / 24)
    );
    dispatch(viewedLoad(filtredViewed));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Header />

      <Suspense fallback={""}>
        <Switch>
          <Route exact path="/" component={Main} />

          <Route exact path="/products" component={Products} />
          <Route exact path="/products/view" component={View} />

          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/payment" component={Payment} />

          <Route exact path="/admin" component={Admin} />

          <Redirect to="/" />
        </Switch>
      </Suspense>

      <Footer />

      <AdminModal />
      <ModalBurger />
      <ModalCart />
    </div>
  );
}

export default App;
