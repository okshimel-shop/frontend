import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../Components/Loader/Loader";
import { userLoginOperation } from "../../redux/operations/userOperation";
import { isLoggedSelector } from "../../redux/selectors/selectors";
import css from "./Admin.module.css";

const initialState = { email: "", password: "" };

const Login = ({ history }) => {
  const [form, setForm] = useState(initialState);
  const [loaderStatus, setLoaderStatus] = useState(false);

  const isLogged = useSelector((state) => isLoggedSelector(state));

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      history.push("/");
    }
  }, [history, isLogged]);

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setLoaderStatus(true);
    dispatch(userLoginOperation(form)).finally(
      setTimeout(() => {
        setLoaderStatus(false);
      }, 500)
    );
  };

  return (
    <section className={css.login}>
      <div className={css.login__wrapper}>
        {loaderStatus && <Spinner />}
        {!loaderStatus && isLogged === null && (
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
