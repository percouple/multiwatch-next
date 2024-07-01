import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCardMessage,
  setClocksMessage,
} from "../../state/slices/errorMessagesSlice";
import { setLoading, clearLoading } from "../../state/slices/loadingSlice";
import ErrorMessage from "./common-elements/AuthErrorMessage";
import SubmitButton from "./common-elements/SubmitButton";
import { setCurrentUser, toggleLoggedIn, setAuthenticating } from "../../state/slices/authSlice";
import { themes } from "@/app/util/cssUtils";
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
    dispatch(setLoading());

    axios
      .post(`http://localhost:9000/create`, {
        username: userValues.username,
        password: userValues.password,
      })
      .then((userRes) => {
        dispatch(setCurrentUser(userValues));
        dispatch(setClocksMessage(userRes.data.message));
        dispatch(setAuthenticating(false));
        dispatch(toggleLoggedIn());
        dispatch(clearLoading());
        setTimeout(() => {
          dispatch(setClocksMessage(""));
        }, 3000);
      })
      .catch((err) => {
        dispatch(setCardMessage(err.response.data.message));
        dispatch(clearLoading());
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
      className={`absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-30`}
      id="authForm"
      style={{ backgroundColor: `${themes[currentTheme].backgroundColor}` }}
    >
      <h1 className={`text-${themes[currentTheme].highlightColor.clockOff}`}>
        Create new user
      </h1>
      <form
        className="flex flex-col items-center"
        onSubmit={submitHandler}
      >
        <input
          value={userValues.username}
          type="text"
          placeholder="username"
          name="username"
          onChange={changeHandler}
          className="h-10 w-48 px-2 mb-2 rounded border"
        />
        <input
          value={userValues.password}
          type="password"
          name="password"
          placeholder="password"
          onChange={changeHandler}
          className="h-10 w-48 px-2 mb-2 rounded border"
        />
        <SubmitButton
          disabled={disabledSubmit}
          textContent="Create new user"
          className="h-10 w-48 px-2 mb-2 rounded border"
        />
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </form>
    </div>
  );
}
