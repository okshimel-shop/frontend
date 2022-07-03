import axios from "../../helpers/package/axios";
import { modalClose } from "../actions/modalAction.js";
import { loaderOn, loaderOff } from "../actions/loaderAction.js";
import { quantityGet } from "../actions/quantityAction.js";

export const addNewProduct = (infoArr, imgArr) => async (dispatch) => {
  try {
    dispatch(loaderOn());

    const combinedObject = {
      ...infoArr,
      price: +infoArr.price,
      amount: +infoArr.amount,
      images: [],
      views: 0,
    };

    const bodyFormData = new FormData();
    imgArr.forEach((item) => bodyFormData.append(`img`, item))

    for (const item in combinedObject) {
      bodyFormData.append(item, combinedObject[item])
    }

    const {data} = await axios({
      method: 'post',
      url: '/products',
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    dispatch(modalClose());

    return data.id
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      dispatch(loaderOff());
    }, 1000);
  }
};

export const getOneProduct = (queryItem, isViewFound) => (dispatch) => {
  try {
    dispatch(loaderOn());

    return axios.get(`/products/${queryItem}?viewed=${isViewFound}`)
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      dispatch(loaderOff());
    }, 1000);
  }
};

export const getViewedProducts = (filteredArr) => (dispatch) => {
  try {
    let idsObject = {}
    for (const item of filteredArr) {
      const { id } = item
      idsObject = { ...idsObject, [id]: id }
    }

  return axios.get(`/products/byids`, { params: { ...idsObject } })
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      dispatch(loaderOff());
    }, 1000);
  }
};

export const getAllProducts = (page, limit) => async (
  dispatch
) => {
  try {
    dispatch(loaderOn());

    const result = await axios.get(`/products?page=${page}&limit=${limit}`)

    const { count, rows } = result.data

    dispatch(quantityGet(count))

    return rows
  } catch (error) {
    console.log(error.response);
  } finally {
    setTimeout(() => {
      dispatch(loaderOff());
    }, 1000);
  }
};

export const getPopular = (limitOnPage) => async (dispatch) => {
  try {
    dispatch(loaderOn());

    return axios.get(`/products/popular?limit=${limitOnPage}`)
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      dispatch(loaderOff());
    }, 1000);
  }
};

export const getDiscounts = (limitOnPage) => (dispatch) => {
  try {
    dispatch(loaderOn());

    return axios.get(`/products/discount?limit=${limitOnPage}`)
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      dispatch(loaderOff());
    }, 1000);
  }
};

export const getNewProducts = (limitOnPage) => (dispatch) => {
  try {
    dispatch(loaderOn());

    return axios.get(`/products/new?limit=${limitOnPage}`)
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      dispatch(loaderOff());
    }, 1000);
  }
};

export const getCartProducts = (cartIds) => (dispatch) => {
  try {
    dispatch(loaderOn());

    let idsObject = {}
    for (const item of cartIds) {
      const { id } = item
      idsObject = { ...idsObject, [id]: id }
    }

    return axios.get(`/products/byids`, { params: { ...idsObject } })
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      dispatch(loaderOff());
    }, 1000);
  }
};

export const deleteProduct = (id) => () => {
  try {
    return axios.delete(`/products/${id}`)
  } catch (error) {
    console.log(error);
  }
};
