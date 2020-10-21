import { loaderOff } from "../actions/loaderAction.js";
import { viewedLoad } from "../actions/viewedAction.js";

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

    console.log("BD request");
    dispatch(viewedLoad(newArr));
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      dispatch(loaderOff());
    }, 500);
  }
};
