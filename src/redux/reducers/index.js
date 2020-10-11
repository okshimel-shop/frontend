import { combineReducers } from "redux";
import modal from "./modalReducer";
import user from "./userReducer";
import spinner from "./spinnerResucer";

const rootReducer = combineReducers({
  modal,
  user,
  spinner,
});

export default rootReducer;
