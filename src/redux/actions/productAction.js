import { createAction } from "@reduxjs/toolkit";
import { PRODUCTS_LOAD } from "../constants/constants";

export const productsLoad = createAction(PRODUCTS_LOAD);
