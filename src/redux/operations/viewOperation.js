import { loaderOn } from "../actions/loaderAction";

const { db } = require("../../firebase");

export const getOneProduct = (queryItem) => async (dispatch) => {
  try {
    dispatch(loaderOn());

    const product = await db
      .collection("products")
      .where("id", "==", queryItem)
      .get()
      .then((res) => {
        const data = res.docs[0].data();
        return data;
      });

    console.log("[VIEW] BD request");
    return product;
  } catch (error) {
    console.log(error);
  }
};

export const addOneView = (docId, oldValue) => async (dispatch) => {
  try {
    await db
      .collection("products")
      .doc(docId)
      .set({ views: oldValue + 1 }, { merge: true });
  } catch (error) {
    console.log(error);
  }
};
