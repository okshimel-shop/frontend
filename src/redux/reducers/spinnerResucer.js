import { createReducer } from "@reduxjs/toolkit";
import { spinnerEnable, spinnerDisable } from "../actions/spinnerAction";

const initialState = true;

export default createReducer(initialState, {
  [spinnerEnable]: () => true,
  [spinnerDisable]: () => false,
});
