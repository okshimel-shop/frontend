import { combineReducers } from "redux";
import modal from "./modalReducer";
import user from "./userReducer";
import loader from "./loaderReducer";
import view from "./viewReducer";
import products from "./productReducer";
import quantity from "./quantityReducer";

const rootReducer = combineReducers({
  modal,
  user,
  loader,
  view,
  products,
  quantity,
});

export default rootReducer;
