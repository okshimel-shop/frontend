import { createReducer } from "@reduxjs/toolkit";
import { viewedLoad, viewedClear } from "../actions/viewedAction";

const initialState = [];

export default createReducer(initialState, {
  [viewedLoad]: (state, { payload }) => payload,
  [viewedClear]: (_, { payload }) => payload,
});
