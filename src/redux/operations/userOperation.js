import { auth } from "../../firebase";

export const userLogin = ({ email, password }) => async (dispatch) => {
  try {
    const result = await auth.signInWithEmailAndPassword(email, password);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const gatCurrentUser = () => async (dispatch) => {
  try {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log("User login");
      } else {
        console.log("User not login");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const signOutUser = () => async (dispatch) => {
  try {
    const user = auth.signOut();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
