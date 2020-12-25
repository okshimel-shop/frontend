import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewProduct } from "../../redux/operations/productOperation";
import { loaderSelector } from "../../redux/selectors/selectors";
import imageCompression from "browser-image-compression";
import Loader from "../../Components/Loader/Loader";
import css from "./AdminAddProduct.module.css";

const initialState = {
  title: "",
  category: "",
  price: 0,
  quantity: 0,
  keywords: "",
  desc: "",
};

const AdminAddProduct = () => {
  const [inputForm, setInputForm] = useState(initialState);
  const [fileImg, setFileImg] = useState([]);
  const [base64Img, setBase64Img] = useState([]);

  const loaderStatus = useSelector((state) => loaderSelector(state));

  const dispatch = useDispatch();
  const history = useHistory();

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

    dispatch(addNewProduct(inputForm, fileImg)).then((res) =>
      history.push(`/products/view?p=${res}`)
    );
  };

  return (
    <>
      {loaderStatus && <Loader />}

      {!loaderStatus && (
        <form className={css.add_product} onSubmit={submitHandler}>
          <div className={css.add_product__input_block}>
            <div className={css.add_product__input_block_list}>
              <input
                className={css.add_product__input_title}
                onChange={inputHandler}
                type="text"
                name="title"
                autoComplete="off"
                minLength="6"
                maxLength="60"
                required
                autoFocus
                placeholder="Название товара"
              />

              <select
                className={css.add_product__input_category}
                onChange={inputHandler}
                name="category"
                defaultValue="unidentified"
                required
              >
                <option value="unidentified" disabled>
                  Категория
                </option>
                <optgroup label="Лето">
                  <option value="June">Июнь</option>
                  <option value="July">Июль</option>
                  <option value="Agust">Август</option>
                </optgroup>
                data
              </select>
              <input
                className={css.add_product__input_price}
                onChange={inputHandler}
                type="number"
                name="price"
                autoComplete="off"
                min="0"
                max="9999"
                required
                placeholder="Цена"
              />
              <input
                className={css.add_product__input_quantity}
                onChange={inputHandler}
                type="number"
                name="quantity"
                autoComplete="off"
                min="0"
                max="999"
                required
                placeholder="Кол. шт."
              />
              <textarea
                className={css.add_product__input_desc}
                onChange={inputHandler}
                type="text"
                name="desc"
                autoComplete="off"
                required
                placeholder="Описание товара"
              />
              <input
                className={css.add_product__input_keywords}
                onChange={inputHandler}
                type="text"
                name="keywords"
                autoComplete="off"
                required
                placeholder="Ключевые слова"
              />
            </div>
          </div>

          <div className={css.add_product__file_block}>
            <ul className={css.add_product__file_image_list}>
              {[0, 1, 2, 3, 4, 5].map((numb) => (
                <li key={numb}>
                  <label htmlFor="img-input">
                    {!base64Img[numb] && (
                      <p className={css.add_product__file_image_picker}>+</p>
                    )}
                  </label>
                  {base64Img[numb] && (
                    <img
                      key={numb}
                      className={css.add_product__file_image_preview}
                      onClick={imgRemoveHandler}
                      src={base64Img[numb]}
                      alt=""
                      id={numb}
                    />
                  )}
                </li>
              ))}
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

          <div className={css.add_product__submit}>
            <button className={css.add_product__submit_btn}>
              Отправить на сервер
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default AdminAddProduct;
