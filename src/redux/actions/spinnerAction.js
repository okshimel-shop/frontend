import { createAction } from "@reduxjs/toolkit";
import { SPINNER_ENABLE, SPINNER_DISABLE } from "../constants/constants";

export const spinnerEnable = createAction(SPINNER_ENABLE);
export const spinnerDisable = createAction(SPINNER_DISABLE);
