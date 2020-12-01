import { createReducer } from "@reduxjs/toolkit";
import { viewedLoad } from "../actions/viewedAction";

const initialState = [];

export default createReducer(initialState, {
  [viewedLoad]: (state, { payload }) => payload,
});
