import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutOperation } from "../../redux/operations/userOperation";
import { modalOpen } from "../../redux/actions/modalAction";
import { isloggedSelector } from "../../redux/selectors/selectors";
import css from "./AdminBar.module.css";

const AdminBar = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => isloggedSelector(state));

  const userLogoutHandler = () => {
    dispatch(userLogoutOperation());
  };

  const openModalHandler = (btnType) => {
    dispatch(modalOpen(btnType));
  };

  return (
    <section className="admin_bar">
      <div className={css.admin_bar__wrapper}>
        <ul className={css.admin_bar__menu}>
          <li className={css.admin_bar__menu_item}>
            <p
              className={css.admin_bar__menu_item_btn}
              onClick={() => openModalHandler("admin-add")}
            >
              Створити
            </p>
          </li>
          <li className={css.admin_bar__menu_item}>
            <p
              className={css.admin_bar__menu_item_btn}
              onClick={() => openModalHandler("admin-catalogs")}
            >
              Каталоги
            </p>
          </li>
          <li className={css.admin_bar__menu_item}>
            <p
              className={css.admin_bar__menu_item_btn}
              onClick={() => openModalHandler("admin-list")}
            >
              Товари
            </p>
          </li>
          <li className={css.admin_bar__menu_item}>
            <p>{userInfo}</p>
          </li>
          <li className={css.admin_bar__menu_item}>
            <p
              className={css.admin_bar__menu_item_btn}
              onClick={userLogoutHandler}
            >
              Вийти
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AdminBar;
