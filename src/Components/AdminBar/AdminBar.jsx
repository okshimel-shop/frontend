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
              Добавить
            </p>
          </li>
          <li className={css.admin_bar__menu_item}>
            <p
              className={css.admin_bar__menu_item_btn}
              onClick={() => openModalHandler("admin-list")}
            >
              Товары
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
              Выйти
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AdminBar;
