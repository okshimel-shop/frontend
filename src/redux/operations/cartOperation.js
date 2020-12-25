import { loaderOff, loaderOn } from "../actions/loaderAction";

const { db } = require("../../firebase");

export const getCartProducts = (cartId) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const newArr = [];

    for (const item of cartId) {
      await db
        .collection("products")
        .where("id", "==", Number(item.id))
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((res) => {
            newArr.push(res.data());
          });
        });
    }

    console.log("[CART] BD request");
    return newArr;
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(loaderOff());
  }
};
