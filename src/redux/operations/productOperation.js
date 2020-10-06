import { modalClose } from "../actions/modalAction.js";
import { productsLoad } from "../actions/productAction.js";
const { db, storage } = require("../../firebase");
const storageRef = storage.ref();

export const addNewProduct = (infoArr, imgArr) => async (dispatch) => {
  try {
    const newProdRef = await db.collection("products").doc();

    const documentId = newProdRef.id;

    const pathImgArr = [];
    for (let i = 1; i <= imgArr.length; i++) {
      const imagesRef = storageRef.child(`products/${documentId}/${i}.jpg`);
      const resultImgLoad = await imagesRef.put(imgArr[i - 1]);
      const pathRef = storage.ref(resultImgLoad.metadata.fullPath);
      pathImgArr.push(pathRef);
      console.log(`Load ${i}`);
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
      images: linkImgArr,
      addTime: Date.now(),
      id: documentId,
    };

    await newProdRef.set(combinedObject);
    console.log("Add info to PRODUCTS");

    dispatch(modalClose());
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = () => async (dispatch) => {
  try {
    const allProdArr = [];
    await db
      .collection("products")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach((doc) => {
          allProdArr.push(doc.data());
        });
      });
    console.log("load");
    dispatch(productsLoad(allProdArr));
  } catch (error) {
    console.log(error);
  }
};
