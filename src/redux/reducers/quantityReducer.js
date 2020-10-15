import { createReducer } from "@reduxjs/toolkit";
import { quantityGet } from "../actions/quantityAction";

const initialState = 0;

export default createReducer(initialState, {
  [quantityGet]: (_, { payload }) => payload,
});
