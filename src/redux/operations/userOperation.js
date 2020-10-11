import { auth } from "../../firebase";
import { spinnerDisable, spinnerEnable } from "../actions/spinnerAction";
import { userStatus } from "../actions/userAction";

export const isUserLoginOperation = () => async (dispatch) => {
  try {
    await auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(userStatus(user.email));
      } else {
        dispatch(userStatus(null));
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const userLoginOperation = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(spinnerEnable());
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(spinnerDisable());
  }
};

export const userLogoutOperation = () => async (dispatch) => {
  try {
    auth.signOut();
  } catch (error) {
    console.log(error);
  }
};
