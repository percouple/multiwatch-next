import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCardMessage,
  setClocksMessage,
} from "../state/slices/errorMessagesSlice";
import ErrorMessage from "./common-elements/AuthErrorMessage";
import SubmitButton from "./common-elements/SubmitButton";
import {
  setCurrentUser,
  toggleLoggedIn,
  setBackgroundOverlay,
} from "../state/slices/authSlice";
import * as yup from "yup";

export default function CreateNewUserCard() {
  let [userValues, setUserValues] = useState({ username: "", password: "" });
  let [disabledSubmit, setDisabledSubmit] = useState(true);

  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);
  const errorMessage = useSelector((state) => state.errorMessages.cardMessage);

  const schema = yup.object().shape({
    password: yup
      .string()
      .trim()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /[!@#$%^&*.()/?]/,
        'Password must contain at least one special character: "!@#$%^&*.()"'
      )
      .matches(/\d/, "Password must contain at least one digit")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .required("Missing password"),
    username: yup
      .string()
      .trim()
      .min(3, "Username must be at least three characters")
      .required("Missing username"),
  });

  // Handle changing local values on inputs
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
  };

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:9000/create`, {
        username: userValues.username,
        password: userValues.password,
      })
      .then((userRes) => {
        dispatch(setCurrentUser(userValues));
        dispatch(setClocksMessage(userRes.data.message));
        dispatch(setBackgroundOverlay(false));
        dispatch(toggleLoggedIn());
        setTimeout(() => {
          dispatch(setClocksMessage(""));
        }, 3000);
      })
      .catch((err) => {
        dispatch(setCardMessage(err.response.data.message));
      });
  };

  // Validate inputs on change
  useEffect(() => {
    schema
      .validate(userValues, { abortEarly: false })
      .then(() => {
        dispatch(setCardMessage(""));
        setDisabledSubmit(false);
      })
      .catch((err) => {
        dispatch(setCardMessage(err.errors[0]));
        setDisabledSubmit(true);
      });
  }, [userValues]);

  // Clear error message on component mount
  useEffect(() => {
    dispatch(setCardMessage(""));
  }, []);

  return (
    <div
      className="flex flex-col justify-around items-center p-2 pt-6 w-72 h-auto absolute rounded-lg border-4 border-accent-1 top-30% z-30 bg-bkg"
      id="authForm"
    >
      <h1 className="text-accent-1 text-2xl font-bold mb-10 mt-4">
        Create new user
      </h1>
      <form className="flex flex-col items-center" onSubmit={submitHandler}>
        <input
          value={userValues.username}
          type="text"
          placeholder="username"
          name="username"
          onChange={changeHandler}
          className="h-10 w-48 px-2 mb-2 rounded border-accent-2 border-2 outline-none bg-transparent"
        />
        <input
          value={userValues.password}
          type="password"
          name="password"
          placeholder="password"
          onChange={changeHandler}
          className="h-10 w-48 px-2 mb-2 rounded border-accent-2 border-2 outline-none bg-transparent"
        />
        <SubmitButton disabled={disabledSubmit} textContent="Create User" />
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </form>
    </div>
  );
}
