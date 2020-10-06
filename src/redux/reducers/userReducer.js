import { createReducer } from "@reduxjs/toolkit";
import { userStatus } from "../actions/userAction";

const initialState = null;

export default createReducer(initialState, {
  [userStatus]: (_, { payload }) => payload,
});
