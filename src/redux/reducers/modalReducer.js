import { createReducer } from "@reduxjs/toolkit";
import { modalOpen, modalClose } from "../actions/modalAction";

const initialState = "hidden";

export default createReducer(initialState, {
  [modalOpen]: (_, { payload }) => payload,
  [modalClose]: () => "hidden",
});
