import axios from "../../helpers/package/axios";

export const addType = (data) => () => {
  try {
    return axios.post('/types', { ...data })
  } catch (error) {
    console.log(error.response);
  }
};

export const addCategory = (data) => () => {
  try {
    return axios.post('/categories', { ...data })
  } catch (error) {
    console.log(error.response);
  }
};

export const addSubcategory = (data) => () => {
  try {
    return axios.post('/subcategories', { ...data })
  } catch (error) {
    console.log(error.response);
  }
};

export const listAllTypes = () => () => {
  try {
    return axios.get('/types/all')
  } catch (error) {
    console.log(error.response);
  }
};