import { createAction } from "@reduxjs/toolkit";
import { USER_STATUS } from "../constants/constants";

export const userStatus = createAction(USER_STATUS);
