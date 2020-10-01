import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  gatCurrentUser,
  userLogin,
  signOutUser,
} from "../../redux/operations/userOperation";

const initialState = { email: "", password: "" };

const Login = () => {
  const [form, setForm] = useState(initialState);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(gatCurrentUser());
  // }, []);

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setForm(initialState);
    dispatch(userLogin(form));
  };

  const currentUser = () => {
    dispatch(gatCurrentUser());
  };

  const signOut = () => {
    dispatch(signOutUser());
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
      <button onClick={currentUser}>Current</button>
      <button onClick={signOut}>SignOut</button>
    </div>
  );
};

export default Login;
