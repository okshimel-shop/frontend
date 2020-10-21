import { combineReducers } from "redux";
import modal from "./modalReducer";
import user from "./userReducer";
import loader from "./loaderReducer";
import view from "./viewReducer";
import viewed from "./viewedReducer";
import products from "./productReducer";
import quantity from "./quantityReducer";

const rootReducer = combineReducers({
  modal,
  user,
  loader,
  view,
  viewed,
  products,
  quantity,
});

export default rootReducer;
