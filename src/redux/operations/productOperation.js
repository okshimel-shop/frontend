import axios from "axios";
import { modalClose } from "../actions/modalAction.js";
import { loaderOn, loaderOff } from "../actions/loaderAction.js";
import { quantityGet } from "../actions/quantityAction.js";

const { db, storage } = require("../../firebase");
const storageRef = storage.ref();

axios.defaults.baseURL = "https://okshimel-shop-7afff.firebaseio.com";

export const addNewProduct = (infoArr, imgArr) => async (dispatch) => {
  try {
    dispatch(loaderOn());

    const newProdRef = await db.collection("products").doc();
    const documentId = newProdRef.id;

    const nextId = await axios.get("/counters/nextProductId.json");

    const pathImgArr = [];
    for (let i = 1; i <= imgArr.length; i++) {
      const imagesRef = storageRef.child(`products/${documentId}/${i}.jpg`);
      const resultImgLoad = await imagesRef.put(imgArr[i - 1]);
      const pathRef = storage.ref(resultImgLoad.metadata.fullPath);
      pathImgArr.push(pathRef);
      console.log(`Load img # ${i}`);
    }

    const linkImgArr = [];
    for (const item of pathImgArr) {
      await item.getDownloadURL().then((res) => {
        const slicedLink = res.slice(0, -43);
        linkImgArr.push(slicedLink);
      });
      console.log(`Create link ${item.name}`);
    }

    const combinedObject = {
      ...infoArr,
      price: Number(infoArr.price),
      quantity: Number(infoArr.quantity),
      images: linkImgArr,
      date: Date.now(),
      docId: documentId,
      views: 0,
      id: nextId.data,
    };

    await newProdRef.set(combinedObject);
    console.log("Add products to BD");

    const oldValue = await axios.get("/counters/quantityProducts.json");

    await axios.patch("/counters.json", {
      quantityProducts: oldValue.data + 1,
    });

    console.log(`Update prod quantity to ${oldValue.data + 1}`);

    await axios.patch("/counters.json", {
      nextProductId: nextId.data + 1,
    });

    console.log(`Update next id to ${nextId.data + 1}`);

    dispatch(modalClose());

    return nextId.data;
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(loaderOff());
  }
};

export const getQuantityProducts = () => async (dispatch) => {
  try {
    const quantityProducts = await axios.get("/counters/quantityProducts.json");

    dispatch(quantityGet(quantityProducts.data));
    console.log("[QUANTITY] BD request");
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = (page, limitOnPage, quantityProducts) => async (
  dispatch
) => {
  try {
    dispatch(loaderOn());
    const allProdArr = [];
    await db
      .collection("products")
      .orderBy("id", "desc")
      .startAt(quantityProducts - (page - 1) * limitOnPage)
      .limit(limitOnPage)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((res) => {
          allProdArr.push(res.data());
        });
      });
    console.log("[PRODUCTS] BD request");

    return allProdArr;
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(loaderOff());
  }
};

export const getBestsellers = (limitOnPage) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const allProdArr = [];
    await db
      .collection("products")
      .orderBy("views", "desc")
      .limit(limitOnPage)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((res) => {
          allProdArr.push(res.data());
        });
      });
    console.log("[PRODUCTS] BD request");

    return allProdArr;
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(loaderOff());
  }
};

export const getDiscounts = (limitOnPage) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const allProdArr = [];
    await db
      .collection("products")
      .orderBy("price", "asc")
      .limit(limitOnPage)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((res) => {
          allProdArr.push(res.data());
        });
      });
    console.log("[PRODUCTS] BD request");

    return allProdArr;
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(loaderOff());
  }
};

export const getNewProducts = (limitOnPage) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const allProdArr = [];
    await db
      .collection("products")
      .orderBy("id", "desc")
      .limit(limitOnPage)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((res) => {
          allProdArr.push(res.data());
        });
      });
    console.log("[PRODUCTS] BD request");

    return allProdArr;
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(loaderOff());
  }
};
