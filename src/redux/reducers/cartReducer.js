import { createReducer } from "@reduxjs/toolkit";
import { cartSet, cartRemove } from "../actions/cartAction";

const initialState = [];

export default createReducer(initialState, {
  [cartSet]: (state, { payload }) => cartHandler(state, payload),
  [cartRemove]: (state, { payload }) => ({}),
});

const cartHandler = (state, payload) => {
  const prodStatus = state.find((item) => item.id === payload.id);

  if (!prodStatus) {
    return [payload, ...state];
  } else {
    const newCartArr = state.filter((item) => item.id !== payload.id);
    return newCartArr ? newCartArr : [];
  }
};
