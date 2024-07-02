import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCardMessage,
  clearCardMessage,
} from "../../state/slices/errorMessagesSlice";
import { setLoading, clearLoading } from "../../state/slices/loadingSlice";
import { setCurrentClocks } from "../../state/slices/clockDataSlice";
import ErrorMessage from "./common-elements/AuthErrorMessage";
import SubmitButton from "./common-elements/SubmitButton";
import {
  setCurrentUser,
  setCreatingUser,
  setSigningIn,
  setAuthenticating,
  toggleLoggedIn,
} from "../../state/slices/authSlice";

export default function AuthOverlay() {
  let [userValues, setUserValues] = useState({ username: "", password: "" });
  let [disabledSubmit, setDisabledSubmit] = useState(true);

  const dispatch = useDispatch();
  const errorMessage = useSelector(
    (state) => state.errorMessages.cardMessage
  );

  const createAccountHandler = () => {
    dispatch(clearLoading());
    dispatch(setSigningIn(false));
    dispatch(setCreatingUser(true));
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setLoading());

    axios
      .get(`http://localhost:9000/`, { params: userValues })
      .then((userRes) => {
        dispatch(toggleLoggedIn());
        dispatch(setCurrentUser(userRes.data));

        axios
          .get(`http://localhost:9000/user/clocks/${userRes.data.userId}`)
          .then((clockRes) => {
            dispatch(setCurrentClocks(clockRes.data));
            dispatch(setAuthenticating(false));
            dispatch(clearLoading());
          })
          .catch((err) => {
            dispatch(setCardMessage(err.message));
            dispatch(clearLoading());
          });
      })
      .catch((err) => {
        dispatch(setCardMessage(err.response.data.message));
        dispatch(clearLoading());
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
    dispatch(setCardMessage(''));
  }, []);

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-bkg"
      id="authForm"
    >
      <h1 className="text-txt">
        Log in
      </h1>
      or
      <div
        className="underline cursor-pointer mb-4"
        onClick={createAccountHandler}
      >
        create an account
      </div>
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
        <SubmitButton disabled={disabledSubmit} textContent="Sign In" />
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </form>
    </div>
  );
}
