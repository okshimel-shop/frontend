import axios from "../../helpers/axios";
import { loaderOn, loaderOff } from "../actions/loaderAction";
import { userStatus } from "../actions/userAction";

export const userLoginOperation = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const {data} = await axios.post('/users/login', { email, password })
    dispatch(userStatus(data.token));
  } catch (error) {
    console.log(error.response)
  } finally {
    dispatch(loaderOff());
  }
};

export const userLogoutOperation = () => (dispatch) => {
  try {
    dispatch(userStatus(null));
  } catch (error) {
    console.log(error);
  }
};
