import { createReducer } from "@reduxjs/toolkit";
import { productsLoad, productsClear } from "../actions/productAction";

const initialState = [];

export default createReducer(initialState, {
  [productsLoad]: (_, { payload }) => payload,
  [productsClear]: () => [],
});
