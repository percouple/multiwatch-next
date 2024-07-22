"use client"

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCardMessage } from "../state/slices/errorMessagesSlice";
import { setCurrentClocks } from "../state/slices/clockDataSlice";
import ErrorMessage from "./common-elements/AuthErrorMessage";
import SubmitButton from "./common-elements/SubmitButton";
import {
  setCurrentUser,
  setDisplayCreateUser,
  setDisplayLogin,
  setBackgroundOverlay,
  toggleLoggedIn,
} from "../state/slices/authSlice";

// const url = process.env.local;
// console.log(url)

export default function AuthOverlay() {
  let [userValues, setUserValues] = useState({ username: "", password: "" });
  let [disabledSubmit, setDisabledSubmit] = useState(true);

  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessages.cardMessage);

  const createAccountHandler = () => {
    dispatch(setDisplayLogin(false));
    dispatch(setDisplayCreateUser(true));
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/login`, { params: userValues })
      .then((userRes) => {
        console.log(userRes.data)
        dispatch(toggleLoggedIn());
        dispatch(setCurrentUser(userRes.data));

        // axios
        //   .get(`http://localhost:3000/user/clocks/${userRes.data.userId}`)
        //   .then((clockRes) => {
        //     dispatch(setCurrentClocks(clockRes.data));
        //     dispatch(setBackgroundOverlay(false));
        //   })
        //   .catch((err) => {
        //     dispatch(setCardMessage(err.message));
        //   });
      })
      .catch((err) => {
        dispatch(setCardMessage(err.response.data.message));
      });
  };

  useEffect(() => {
    if (userValues.username && userValues.password) {
      setDisabledSubmit(false);
    } else {
      setDisabledSubmit(true);
    }
  }, [userValues]);

  useEffect(() => {
    dispatch(setCardMessage(""));
  }, []);

  return (
    <div
      className="flex flex-col justify-around items-center p-2 pt-6 w-72 h-auto absolute rounded-lg border-4 border-accent-1 top-30% z-30 bg-bkg"
      id="authForm"
    >
      <h1 className="text-accent-1 text-4xl font-bold mb-4">Log in</h1>
      or
      <div
        className="underline cursor-pointer mb-8"
        onClick={createAccountHandler}
      >
        create an account
      </div>
      <form className="flex flex-col items-center" onSubmit={submitHandler}>
        <input
          value={userValues.username}
          type="text"
          placeholder="username"
          name="username"
          onChange={changeHandler}
          className="h-10 w-48 px-2 mb-2 rounded border-accent-2 border-2 outline-none bg-transparent placeholder:text-accent-2"
        />
        <input
          value={userValues.password}
          type="password"
          name="password"
          placeholder="password"
          onChange={changeHandler}
          className="h-10 w-48 px-2 mb-2 rounded border-accent-2 border-2 outline-none bg-transparent placeholder:text-accent-2"
        />
        <SubmitButton disabled={disabledSubmit} textContent="Sign In" />
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </form>
    </div>
  );
}
