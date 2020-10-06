import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLoginOperation } from "../../redux/operations/userOperation";

const initialState = { email: "", password: "" };

const Login = () => {
  const [form, setForm] = useState(initialState);

  const dispatch = useDispatch();

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setForm(initialState);
    dispatch(userLoginOperation(form));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={inputHandler}
          type="email"
          name="email"
          value={form.email}
          minLength="5"
          required
          autoFocus
        />
        <input
          onChange={inputHandler}
          type="password"
          name="password"
          value={form.password}
          minLength="6"
          required
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Login;
