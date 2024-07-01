"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthenticating,
  setSigningIn,
} from "../../../state/slices/authSlice";

export default function LoginButton() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);
  const authenticating = useSelector((state) => state.auth.authenticating);

  const clickHandler = (e) => {
    if (e.target.id === "dropdownButton") {
      e.stopPropagation();
      dispatch(setAuthenticating(!authenticating));
      dispatch(setSigningIn(true));
    }
  };

  return (
    <div
      id="dropdownButton"
      onClick={clickHandler}
      className={`flex justify-around items-center cursor-pointer text-base py-2 px-4 border-3 rounded-md min-w-[4rem]`}
    >
      Login
    </div>
  );
}
