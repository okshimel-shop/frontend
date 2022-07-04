import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import cyrillicToTranslit from "cyrillic-to-translit-js";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import Loader from "../Loader/Loader";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import css from "./AdminCatalogs.module.css";
import * as API from "../../redux/operations/catalogsOperation";

const initialUsedItems = {
  type: null,
  category: null,
  subcategory: null,
};

const initialProcess = {
  type: false,
  category: false,
  subcategory: false,
};

const AdminCatalogs = () => {
  const [types, setTypes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [usedItems, setUsedItems] = useState(initialUsedItems);
  const [addingProcess, setAddingProcess] = useState(initialProcess);
  const [newCatalogTitle, setNewCatalogTitle] = useState("");
  const [loaderStatus, setLoaderStatus] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoaderStatus(true);
    dispatch(API.listAllTypes())
      .then(({ data }) => setTypes(data))
      .finally(
        setTimeout(() => {
          setLoaderStatus(false);
        }, 500)
      );
  }, [dispatch]);

  const handleChangeNewCatalogTitle = ({ target }) => {
    const { value } = target;

    setNewCatalogTitle(value);
  };

  const generateDataObject = () => {
    const title = newCatalogTitle;
    const dirTag = cyrillicToTranslit({ preset: "uk" })
      .transform(newCatalogTitle, "-")
      .toLowerCase();

    return {
      title,
      dirTag,
      typeId: usedItems.type,
      categoryId: usedItems.category,
    };
  };

  const addNewType = () => {
    const data = generateDataObject("type");

    if (data.title.length > 3) {
      dispatch(API.addType(data)).then(({ data }) => setTypes(data));

      setNewCatalogTitle("");
    }
  };

  const addNewCategory = () => {
    const data = generateDataObject("category");

    if (data.title.length > 3) {
      dispatch(API.addCategory(data)).then(({ data }) => {
        const updatedArr = types.map((type) =>
          type.id === data.id ? data : type
        );

        setTypes(updatedArr);
        setCategories(data.categories);
      });

      setNewCatalogTitle("");
    }
  };

  const addNewSubcategory = () => {
    const data = generateDataObject("subcategory");

    if (data.title.length > 3) {
      dispatch(API.addSubcategory(data)).then(({ data }) => {
        const updatedArr = types.map((type) =>
          type.id === data.id ? data : type
        );

        setTypes(updatedArr);
        setCategories(data.categories);

        const findedCategory = data.categories.find(
          (cat) => cat.id === usedItems.category
        );
        setSubcategories(findedCategory.subcategories);
      });

      setNewCatalogTitle("");
    }
  };

  return (
    <>
      {loaderStatus && <Loader />}

      {!loaderStatus && (
        <>
          <div className={css.admin_catalogs__wrapper}>
            <div className={css.admin_catalogs__list_wrapper}>
              <List className={css.admin_catalogs__list} dense>
                <ListSubheader className={css.admin_catalogs__list_subheader}>
                  Типи
                </ListSubheader>

                {types?.map((item) => (
                  <ListItem
                    key={item.id}
                    className={css.admin_catalogs__item}
                    onClick={() => {
                      setUsedItems({
                        type: item.id,
                        category: null,
                        subcategory: null,
                      });
                      setCategories(item.categories);
                      setSubcategories([]);
                    }}
                    selected={usedItems.type === item.id}
                    button
                  >
                    <ListItemText
                      className={css.admin_catalogs__item_text}
                      primary={`${item.title} (${item?.categories?.length})`}
                    />
                  </ListItem>
                ))}
              </List>

              {!addingProcess.type && (
                <Button
                  onClick={() => {
                    setAddingProcess({
                      type: true,
                      category: false,
                      subcategory: false,
                    });
                    setNewCatalogTitle("");
                  }}
                  variant="contained"
                  color="default"
                  size="small"
                  startIcon={<AddIcon />}
                  fullWidth
                >
                  Додати тип
                </Button>
              )}

              {addingProcess.type && (
                <FormControl size="small" variant="outlined" fullWidth>
                  <InputLabel>Новий тип</InputLabel>
                  <OutlinedInput
                    value={newCatalogTitle}
                    onChange={handleChangeNewCatalogTitle}
                    labelWidth={80}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={addNewType} edge="end">
                          <SaveIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              )}
            </div>

            <div className={css.admin_catalogs__list_wrapper}>
              <List className={css.admin_catalogs__list} dense>
                <ListSubheader className={css.admin_catalogs__list_subheader}>
                  Категорії
                </ListSubheader>

                {categories?.map((item) => (
                  <ListItem
                    key={item.id}
                    onClick={() => {
                      setUsedItems((prev) => ({
                        ...prev,
                        category: item.id,
                        subcategory: null,
                      }));
                      setSubcategories(item.subcategories);
                    }}
                    selected={usedItems.category === item.id}
                    button
                  >
                    <ListItemText
                      className={css.admin_catalogs__item_text}
                      primary={`${item.title} (${item?.subcategories?.length})`}
                    />
                  </ListItem>
                ))}
              </List>

              {usedItems.type && (
                <>
                  {!addingProcess.category && (
                    <Button
                      onClick={() => {
                        setAddingProcess({
                          type: false,
                          category: true,
                          subcategory: false,
                        });
                        setNewCatalogTitle("");
                      }}
                      variant="contained"
                      color="default"
                      size="small"
                      startIcon={<AddIcon />}
                      fullWidth
                    >
                      Додати категорію
                    </Button>
                  )}

                  {addingProcess.category && (
                    <FormControl size="small" variant="outlined" fullWidth>
                      <InputLabel>Нова категорія</InputLabel>
                      <OutlinedInput
                        value={newCatalogTitle}
                        onChange={handleChangeNewCatalogTitle}
                        labelWidth={115}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton onClick={addNewCategory} edge="end">
                              <SaveIcon />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  )}
                </>
              )}
            </div>

            <div className={css.admin_catalogs__list_wrapper}>
              <List className={css.admin_catalogs__list} dense>
                <ListSubheader className={css.admin_catalogs__list_subheader}>
                  Підкатегорії
                </ListSubheader>

                {subcategories?.map((item) => (
                  <ListItem
                    key={item.id}
                    onClick={() => {
                      setUsedItems((prev) => ({
                        ...prev,
                        subcategory: item.id,
                      }));
                    }}
                    selected={usedItems.subcategory === item.id}
                    button
                  >
                    <ListItemText
                      className={css.admin_catalogs__item_text}
                      primary={`${item.title} (${item?.products?.length})`}
                    />
                  </ListItem>
                ))}
              </List>

              {usedItems.category && (
                <>
                  {!addingProcess.subcategory && (
                    <Button
                      onClick={() => {
                        setAddingProcess({
                          type: false,
                          category: false,
                          subcategory: true,
                        });
                        setNewCatalogTitle("");
                      }}
                      variant="contained"
                      color="default"
                      size="small"
                      startIcon={<AddIcon />}
                      fullWidth
                    >
                      Додати підкатегорію
                    </Button>
                  )}

                  {addingProcess.subcategory && (
                    <FormControl size="small" variant="outlined" fullWidth>
                      <InputLabel>Нова підкатегорія</InputLabel>
                      <OutlinedInput
                        value={newCatalogTitle}
                        onChange={handleChangeNewCatalogTitle}
                        labelWidth={140}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton onClick={addNewSubcategory} edge="end">
                              <SaveIcon />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  )}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AdminCatalogs;
