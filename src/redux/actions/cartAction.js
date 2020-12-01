import { createAction } from "@reduxjs/toolkit";
import { SET_CART, REMOVE_CART } from "../constants/constants";

export const cartSet = createAction(SET_CART);
export const cartRemove = createAction(REMOVE_CART);
