import { loaderOff } from "../actions/loaderAction.js";

const { db } = require("../../firebase");

export const getViewedProducts = (filteredArr) => async (dispatch) => {
  try {
    const newArr = [];

    for (const item of filteredArr) {
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

    console.log("[VIEWED] BD request");
    return newArr;
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(loaderOff());
  }
};
