import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../Components/Loader/Loader";
import { userLoginOperation } from "../../redux/operations/userOperation";
import {
  isloggedSelector,
  loaderSelector,
} from "../../redux/selectors/selectors";
import css from "./Admin.module.css";

const initialState = { email: "", password: "" };

const Login = ({ history }) => {
  const [form, setForm] = useState(initialState);

  const islogged = useSelector((state) => isloggedSelector(state));
  const loaderStatus = useSelector((state) => loaderSelector(state));

  const dispatch = useDispatch();

  useEffect(() => {
    if (islogged) {
      history.push("/");
    }
  }, [history, islogged]);

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLoginOperation(form));
  };

  return (
    <section className={css.login}>
      <div className={css.login__wrapper}>
        {loaderStatus && <Spinner />}
        {!loaderStatus && islogged === null && (
          <form className={css.login__form} onSubmit={submitHandler}>
            <p className={css.login__form_title}>Админ панель</p>
            <input
              className={css.login__input_email}
              onChange={inputHandler}
              type="email"
              name="email"
              value={form.email}
              minLength="5"
              required
              autoFocus
              placeholder="Эмейл"
            />
            <input
              className={css.login__input_pass}
              onChange={inputHandler}
              type="password"
              name="password"
              value={form.password}
              minLength="6"
              required
              placeholder="Пароль"
            />
            <button className={css.login__form_submit_btn} type="submit">
              Войти
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Login;
