import { loaderOff, loaderOn } from "../actions/loaderAction";
import { viewLoad } from "../actions/viewAction";

const { db } = require("../../firebase");

export const getOneProduct = (queryItem) => async (dispatch) => {
  try {
    dispatch(loaderOn());

    await db
      .collection("products")
      .where("id", "==", queryItem)
      .get()
      .then((res) => {
        const data = res.docs[0].data();
        dispatch(viewLoad(data));
      });

    console.log("BD request");
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      dispatch(loaderOff());
    }, 500);
  }
};
