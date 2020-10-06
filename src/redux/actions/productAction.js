import { createAction } from "@reduxjs/toolkit";
import { PRODUCTS_LOAD, PRODUCTS_CLEAR } from "../constants/constants";

export const productsLoad = createAction(PRODUCTS_LOAD);
export const productsClear = createAction(PRODUCTS_CLEAR);
