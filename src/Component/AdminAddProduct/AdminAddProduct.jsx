import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../redux/operations/productOperation";
import imageCompression from "browser-image-compression";
import css from "./AdminAddProduct.module.css";

const initialState = {
  title: "",
  category: "",
  price: "",
  quantity: "",
  keywords: "",
  desc: "",
};

const AdminAddProduct = () => {
  const [inputForm, setInputForm] = useState(initialState);
  const [fileImg, setFileImg] = useState([]);
  const [base64Img, setBase64Img] = useState([]);

  const dispatch = useDispatch();

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setInputForm((state) => ({ ...state, [name]: value }));
  };

  const inputImgHandler = async ({ target }) => {
    if (target.files.length !== 0) {
      const fileArr = Object.values(target.files);
      const oldArr = fileImg;

      if (oldArr.length <= 6) {
        const havePlace = 6 - fileImg.length;

        const compressFileArr = await imgCompressHandler(
          fileArr.slice(0, havePlace)
        );

        oldArr.push(...compressFileArr);
        const slicedArr = oldArr.slice(0, 6);

        setFileImg([...slicedArr]);
      }
    }
  };

  const imgCompressHandler = async (newArr) => {
    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1000,
      useWebWorker: true,
      fileType: "image/jpeg",
    };

    const compressNewArr = [];

    for (const item of newArr) {
      const compressImg = await imageCompression(item, options);
      compressNewArr.push(compressImg);
      imgToBase64Handler([compressImg]);
    }
    return compressNewArr;
  };

  const imgToBase64Handler = (fileArr) => {
    for (const item of fileArr) {
      let reader = new FileReader();

      reader.onload = () => {
        setBase64Img((state) => [...state, reader.result]);
      };
      reader.readAsDataURL(item);
    }
  };

  const imgRemoveHandler = ({ target }) => {
    let fileArr = fileImg;
    let base64Arr = base64Img;

    fileArr.splice(target.id, 1);
    base64Arr.splice(target.id, 1);

    setFileImg([...fileArr]);
    setBase64Img([...base64Arr]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewProduct(inputForm, fileImg));
  };

  return (
    <form className={css.add_product} onSubmit={submitHandler}>
      <div className={css.add_product__title_block}>
        <input
          className={css.add_product__title}
          onChange={inputHandler}
          type="text"
          name="title"
          minLength="10"
          maxLength="30"
          required
          autoFocus
          placeholder="Название товара"
        />
      </div>

      <div className={css.add_product__file_block}>
        <ul className={css.add_product__file_image_list}>
          <li>
            <label htmlFor="img-input">
              {!base64Img[0] && (
                <p className={css.add_product__file_image_picker}>+</p>
              )}
            </label>
            {base64Img[0] && (
              <img
                key="0"
                className={css.add_product__file_image_preview}
                onClick={imgRemoveHandler}
                src={base64Img[0]}
                alt=""
                id="0"
              />
            )}
          </li>

          <li>
            <label htmlFor="img-input">
              {!base64Img[1] && (
                <p className={css.add_product__file_image_picker}>+</p>
              )}
            </label>
            {base64Img[1] && (
              <img
                key="1"
                className={css.add_product__file_image_preview}
                onClick={imgRemoveHandler}
                src={base64Img[1]}
                alt=""
                id="1"
              />
            )}
          </li>

          <li>
            <label htmlFor="img-input">
              {!base64Img[2] && (
                <p className={css.add_product__file_image_picker}>+</p>
              )}
            </label>
            {base64Img[2] && (
              <img
                key="2"
                className={css.add_product__file_image_preview}
                onClick={imgRemoveHandler}
                src={base64Img[2]}
                alt=""
                id="2"
              />
            )}
          </li>

          <li>
            <label htmlFor="img-input">
              {!base64Img[3] && (
                <p className={css.add_product__file_image_picker}>+</p>
              )}
            </label>
            {base64Img[3] && (
              <img
                key="3"
                className={css.add_product__file_image_preview}
                onClick={imgRemoveHandler}
                src={base64Img[3]}
                alt=""
                id="3"
              />
            )}
          </li>

          <li>
            <label htmlFor="img-input">
              {!base64Img[4] && (
                <p className={css.add_product__file_image_picker}>+</p>
              )}
            </label>
            {base64Img[4] && (
              <img
                key="4"
                className={css.add_product__file_image_preview}
                onClick={imgRemoveHandler}
                src={base64Img[4]}
                alt=""
                id="4"
              />
            )}
          </li>

          <li>
            <label htmlFor="img-input">
              {!base64Img[5] && (
                <p className={css.add_product__file_image_picker}>+</p>
              )}
            </label>
            {base64Img[5] && (
              <img
                key="5"
                className={css.add_product__file_image_preview}
                onClick={imgRemoveHandler}
                src={base64Img[5]}
                alt=""
                id="5"
              />
            )}
          </li>
        </ul>

        <input
          onChange={inputImgHandler}
          id="img-input"
          type="file"
          name="image"
          accept=".jpg,.jpeg,.png"
          hidden
          multiple
        />
      </div>

      <div className={css.add_product__input_block}>
        <select
          className={css.add_product__input_category}
          onChange={inputHandler}
          name="category"
          defaultValue="default"
          required
        >
          <option value="default" disabled>
            Категории
          </option>
          <optgroup label="Лето">
            <option value="June">Июнь</option>
            <option value="July">Июль</option>
            <option value="Agust">Август</option>
          </optgroup>
        </select>
        <input
          className={css.add_product__input_price}
          onChange={inputHandler}
          type="number"
          name="price"
          min="0"
          max="9999"
          maxLength="5"
          placeholder="Цена грн."
        />
        <input
          className={css.add_product__input_quantity}
          onChange={inputHandler}
          type="number"
          name="quantity"
          min="0"
          max="999"
          placeholder="Кол. шт."
        />
        <input
          className={css.add_product__input_keywords}
          onChange={inputHandler}
          type="text"
          name="keywords"
          placeholder="Ключевые слова"
        />
        <textarea
          className={css.add_product__input_desc}
          onChange={inputHandler}
          type="text"
          name="desc"
          placeholder="Описание товара"
        />
      </div>
      <div>
        <button>Добавить товар</button>
      </div>
    </form>
  );
};

export default AdminAddProduct;
