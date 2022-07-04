import axios from "../../helpers/package/axios";
import { userStatus } from "../actions/userAction";

export const userLoginOperation = ({ email, password }) => async (dispatch) => {
  try {
    const {data} = await axios.post('/users/login', { email, password })
    dispatch(userStatus(data.token));
  } catch (error) {
    console.log(error.response)
  }
};

export const userLogoutOperation = () => (dispatch) => {
  try {
    dispatch(userStatus(null));
  } catch (error) {
    console.log(error);
  }
};
