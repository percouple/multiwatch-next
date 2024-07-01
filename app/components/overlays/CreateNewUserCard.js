import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setClocksMessage,
  setCardMessage,
} from "../../state/slices/errorMessagesSlice";
import { setLoading, clearLoading } from "../../state/slices/loadingSlice";
import ErrorMessage from "./common-elements/AuthErrorMessage";
import SubmitButton from "./common-elements/SubmitButton";
import styled from "styled-components";
import { themes } from "../../helper-functions";
import {
  setCurrentUser,
  toggleLoggedIn,
  setAuthenticating,
} from "../../state/slices/authSlice";
import * as yup from "yup";

const StyledLoginDropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 20rem;
  height: auto;
  position: absolute;
  border-radius: 5px;
  top: 30%;
  z-index: 2;
  border: 3px solid ${themes.dark.highlightColor.clockOff};
  border-radius: 5px;
`;

const StyledInput = styled.input`
  height: 1.75rem;
  width: auto;
  outline: none;
  border-radius: 5px;
  border: 1px solid black;
`;

const initialValues = {
  username: "",
  password: "",
};

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

export default function CreateNewUserCard() {
  let [userValues, setUserValues] = useState(initialValues);
  let [disabledSubmit, disableSubmit] = useState(true);

  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);
  const errorMessage = useSelector((state) => state.errorMessages.cardMessage);

  // Handle changing local values on inputs
  const changeHandler = (e) => {
    const type = e.target.placeholder;
    if (type === "username") {
      setUserValues({ ...userValues, username: e.target.value });
    } else if (type === "password") {
      setUserValues({ ...userValues, password: e.target.value });
    }
  };

  // Handle validation of user
  // Fetch/establish clocks on success
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(setLoading());
    // Send new user to the backend
    axios
      .post(`http://localhost:9000/create`, {
        username: userValues.username,
        password: userValues.password,
      })
      .then((userRes) => {
        // If successful, return welcome message
        // Set the current user data
        console.log(userRes);
        dispatch(
          setCurrentUser({
            username: userValues.username,
            password: userValues.password,
          })
        );
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

  // Check validation on input change
  useEffect(() => {
    if (userValues.username || userValues.password) {
      schema
        .validate(userValues)
        .then(() => {
          dispatch(setCardMessage(""));
          disableSubmit(false);
        })
        .catch((err) => {
          dispatch(setCardMessage(err.errors[0]));
          disableSubmit(true);
        });
    }
  }, [userValues]); // ignore

  // Clear Error message on load
  useEffect(() => {
    dispatch(setCardMessage(""));
  }, []);

  return (
    <StyledLoginDropdown
      id="authForm"
      style={{ backgroundColor: `${themes[currentTheme].backgroundColor}` }}
    >
      <h1 style={{ color: `${themes[currentTheme].highlightColor.clockOff}` }}>
        Create new user
      </h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={clickHandler}
      >
        <StyledInput
          value={userValues.username}
          type="text"
          placeholder="username"
          onChange={changeHandler}
          style={{ margin: "5px 5px" }}
        ></StyledInput>
        <StyledInput
          value={userValues.password}
          type="password"
          placeholder="password"
          onChange={changeHandler}
          style={{ margin: "5px 5px" }}
        ></StyledInput>
        <SubmitButton
          disabledSubmit={disabledSubmit}
          textContent={"Create new user"}
        />
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </form>
    </StyledLoginDropdown>
  );
}
