import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCardMessage } from "../components/state/slices/errorMessagesSlice";
// import { setCurrentClocks } from "../state/slices/clockDataSlice";
// import ErrorMessage from "./common-elements/AuthErrorMessage";
// import SubmitButton from "./common-elements/SubmitButton";
import InputForm from "./InputForm";
import {
  setCurrentUser,
  setDisplayCreateUser,
  setDisplayLogin,
  setBackgroundOverlay,
  toggleLoggedIn,
} from "../components/state/slices/authSlice";

export default function AuthOverlay({ theme }) {
  return (
    <div
      className="flex flex-col justify-around items-center p-2 pt-6 w-72 h-auto absolute rounded-lg border-4 border-accent-1 top-30% z-30 bg-bkg"
      id="authForm"
    >
      <h1 className="text-accent-1 text-4xl font-bold mb-4">Log in</h1>
      or
      <div
        className="underline cursor-pointer mb-8"
        // onClick={createAccountHandler}
      >
        create an account
      </div>
    </div>
  );
}
