import { auth } from "../../firebase";
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
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  }
};

export const userLogoutOperation = () => async (dispatch) => {
  try {
    auth.signOut();
  } catch (error) {
    console.log(error);
  }
};
