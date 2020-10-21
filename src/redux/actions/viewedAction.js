import { createAction } from "@reduxjs/toolkit";
import { VIEWED_LOAD, VIEWED_CLEAR } from "../constants/constants";

export const viewedLoad = createAction(VIEWED_LOAD);
export const viewedClear = createAction(VIEWED_CLEAR);
