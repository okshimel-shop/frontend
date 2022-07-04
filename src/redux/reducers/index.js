import { combineReducers } from "redux";
import cart from "./cartReducer";
import modal from "./modalReducer";
import quantity from "./quantityReducer";
import user from "./userReducer";
import viewed from "./viewedReducer";

const rootReducer = combineReducers({
  cart,
  modal,
  quantity,
  user,
  viewed,
});

export default rootReducer;
