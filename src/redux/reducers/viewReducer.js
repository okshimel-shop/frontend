import { createReducer } from "@reduxjs/toolkit";
import { viewLoad } from "../actions/viewAction";

const initialState = null;

export default createReducer(initialState, {
  [viewLoad]: (_, { payload }) => payload,
});
