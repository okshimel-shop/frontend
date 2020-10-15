import { createReducer } from "@reduxjs/toolkit";
import { productsLoad } from "../actions/productAction";

const initialState = null;

export default createReducer(initialState, {
  [productsLoad]: (_, { payload }) => payload,
});
