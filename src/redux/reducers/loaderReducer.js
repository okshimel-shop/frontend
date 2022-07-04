import { createReducer } from "@reduxjs/toolkit";
import { loaderOn, loaderOff } from "../actions/loaderAction";

const initialState = false;

export default createReducer(initialState, {
  [loaderOn]: () => true,
  [loaderOff]: () => false,
});
