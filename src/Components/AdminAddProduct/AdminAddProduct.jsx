import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import { addNewProduct } from "../../redux/operations/productOperation";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import imageCompression from "browser-image-compression";
import Loader from "../../Components/Loader/Loader";
import css from "./AdminAddProduct.module.css";
import * as API from "../../redux/operations/catalogsOperation";

const initialState = {
  title: "",
  price: "",
  type: "",
  category: "",
  subcategory: "",
  subcategoryId: "",
  amount: "",
  size: "",
  material: "",
  color: "",
  age: "",
  gender: "",
  descriptions: "",
  keywords: "",
  video: "",
};

const AdminAddProduct = () => {
  const [inputForm, setInputForm] = useState(initialState);
  const [types, setTypes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [fileImg, setFileImg] = useState([]);
  const [base64Img, setBase64Img] = useState([]);
  const [loaderStatus, setLoaderStatus] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(API.listAllTypes()).then(({ data }) => setTypes(data));
  }, [dispatch]);

  const inputHandler = async ({ target, currentTarget }) => {
    const { name, value } = target;
    const { id } = currentTarget.dataset;

    if (name === "type") {
      setCategories(types[value]?.categories || []);
      setSubcategories([]);
      setInputForm((state) => ({
        ...state,
        [name]: value,
        category: "",
        subcategory: "",
      }));
      return;
    }

    if (name === "category") {
      setSubcategories(categories[value]?.subcategories || []);
      setInputForm((state) => ({ ...state, [name]: value, subcategory: "" }));
      return;
    }

    if (name === "subcategory") {
      setInputForm((state) => ({
        ...state,
        [name]: value,
        subcategoryId: id,
      }));
      return;
    }

    if (name === "keywords") {
      return setInputForm((state) => ({
        ...state,
        [name]: value.replace(/[, ]+/g, ", ").trim(),
      }));
    }

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
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1200,
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

    if (inputForm.title.length < 10) {
      return enqueueSnackbar("В назві має бути мінімум 10 символів", {
        variant: "warning",
      });
    }

    if (inputForm.price < 1) {
      return enqueueSnackbar("Ціна має бути більша ніж 0", {
        variant: "warning",
      });
    }

    if (inputForm.amount === "" || inputForm.amount < 0) {
      return enqueueSnackbar("Кількість має бути не менше ніж 0", {
        variant: "warning",
      });
    }

    if (inputForm.keywords.length < 10) {
      return enqueueSnackbar("Мінімум 10 символів для ключових слів", {
        variant: "warning",
      });
    }

    if (fileImg.length < 1) {
      return enqueueSnackbar("Товар має включати хоча б одне зображення", {
        variant: "warning",
      });
    }

    setLoaderStatus(true);
    dispatch(addNewProduct(inputForm, fileImg))
      .then((res) => history.push(`/products/view?p=${res}`))
      .finally(
        setInterval(() => {
          setLoaderStatus(false);
        }, 500)
      );
  };

  return (
    <>
      {loaderStatus && <Loader />}

      {!loaderStatus && (
        <form className={css.add_product} onSubmit={submitHandler}>
          <div className={css.add_product__input_block}>
            <div className={css.add_product__input_block_list}>
              <TextField
                className={css.add_product__input_title}
                name="title"
                value={inputForm.title}
                onChange={inputHandler}
                label="Заголовок"
                variant="outlined"
                size="small"
                autoFocus
                required
              />

              <TextField
                className={css.add_product__input_price}
                type="number"
                name="price"
                value={inputForm.price}
                onChange={inputHandler}
                label="Ціна"
                variant="outlined"
                size="small"
                required
              />

              <TextField
                className={css.add_product__input_category}
                name="type"
                value={inputForm.type}
                onChange={inputHandler}
                label="Тип"
                variant="outlined"
                size="small"
                select
                required
              >
                {types?.map(
                  (item, idx) =>
                    item.categories.length > 0 && (
                      <MenuItem key={item.id} value={idx}>
                        {item.title}
                      </MenuItem>
                    )
                )}
              </TextField>

              <TextField
                className={css.add_product__input_category}
                name="category"
                value={inputForm.category}
                onChange={inputHandler}
                label="Категорія"
                variant="outlined"
                size="small"
                disabled={!categories.length}
                select
                required
              >
                {categories?.map(
                  (item, idx) =>
                    item.subcategories.length > 0 && (
                      <MenuItem key={item.id} value={idx}>
                        {item.title}
                      </MenuItem>
                    )
                )}
              </TextField>

              <TextField
                className={css.add_product__input_category}
                name="subcategory"
                value={inputForm.subcategory}
                onChange={inputHandler}
                label="Підкатегорія"
                variant="outlined"
                size="small"
                disabled={!subcategories.length}
                select
                required
              >
                {subcategories?.map((item, idx) => (
                  <MenuItem key={item.id} value={idx} data-id={item.id}>
                    {item.title}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                className={css.add_product__input_quantity}
                type="number"
                name="amount"
                value={inputForm.amount}
                onChange={inputHandler}
                label="Кількість"
                variant="outlined"
                size="small"
                required
              />

              <TextField
                className={css.add_product__input_quantity}
                type="number"
                name="size"
                value={inputForm.size}
                onChange={inputHandler}
                label="Розмір"
                variant="outlined"
                size="small"
                required
              />

              <TextField
                className={css.add_product__input_quantity}
                name="material"
                value={inputForm.material}
                onChange={inputHandler}
                label="Матеріал"
                variant="outlined"
                size="small"
                required
              />

              <TextField
                className={css.add_product__input_quantity}
                name="color"
                value={inputForm.color}
                onChange={inputHandler}
                label="Колір"
                variant="outlined"
                size="small"
                required
              />

              <TextField
                className={css.add_product__input_category}
                name="age"
                value={inputForm.age}
                onChange={inputHandler}
                label="Вік"
                variant="outlined"
                size="small"
                select
                required
              >
                <MenuItem value="0-2">0-2</MenuItem>
                <MenuItem value="2-5">2-5</MenuItem>
                <MenuItem value="4-7">4-7</MenuItem>
                <MenuItem value="6+">6+</MenuItem>
              </TextField>

              <TextField
                className={css.add_product__input_category}
                name="gender"
                value={inputForm.gender}
                onChange={inputHandler}
                label="Стать"
                variant="outlined"
                size="small"
                select
                required
              >
                <MenuItem value="Чоловіча">Чоловіча</MenuItem>
                <MenuItem value="Жіноча">Жіноча</MenuItem>
                <MenuItem value="Унісекс">Унісекс</MenuItem>
              </TextField>

              <TextField
                className={css.add_product__input}
                name="descriptions"
                value={inputForm.descriptions}
                onChange={inputHandler}
                label="Опис товару"
                variant="outlined"
                size="small"
                minRows="3"
                maxRows="3"
                multiline
              />

              <TextField
                className={css.add_product__input}
                name="keywords"
                value={inputForm.keywords}
                onChange={inputHandler}
                label="Ключові слова"
                variant="outlined"
                size="small"
                required
              />

              <TextField
                className={css.add_product__input}
                name="video"
                value={inputForm.video}
                onChange={inputHandler}
                label="Посилання на відео"
                variant="outlined"
                size="small"
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
              Додати товар
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default AdminAddProduct;
