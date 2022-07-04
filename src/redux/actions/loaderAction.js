import { createAction } from "@reduxjs/toolkit";
import { LOADER_ON, LOADER_OFF } from "../constants/constants";

export const loaderOn = createAction(LOADER_ON);
export const loaderOff = createAction(LOADER_OFF);
