import axios from "../../helpers/package/axios";

export const listAllCategories = () => () => {
  try {
    return axios.get('/categories/all')
  } catch (error) {
    console.log(error.response);
  }
};