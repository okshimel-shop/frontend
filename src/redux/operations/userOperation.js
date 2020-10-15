import { auth } from "../../firebase";
import { loaderOn, loaderOff } from "../actions/loaderAction";
import { userStatus } from "../actions/userAction";

export const isUserLoginOperation = () => async (dispatch) => {
  try {
    dispatch(loaderOn());

    await auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(userStatus(user.email));
      } else {
        dispatch(userStatus(""));
      }
    });
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      dispatch(loaderOff());
    }, 500);
  }
};

export const userLoginOperation = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(loaderOff());
  }
};

export const userLogoutOperation = () => async (dispatch) => {
  try {
    auth.signOut();
  } catch (error) {
    console.log(error);
  }
};
