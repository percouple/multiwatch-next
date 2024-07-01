import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCardMessage } from "../../state/slices/errorMessagesSlice";
import { setLoading, clearLoading } from "../../state/slices/loadingSlice";
import { setCurrentClocks } from "../../state/slices/clockDataSlice";
import ErrorMessage from "./common-elements/AuthErrorMessage";
import SubmitButton from "./common-elements/SubmitButton";
import styled from "styled-components";
import { themes, darken } from "../../helper-functions";
import {
  setCurrentUser,
  setCreatingUser,
  setSigningIn,
  setAuthenticating,
  toggleLoggedIn,
} from "../../state/slices/authSlice";

const StyledLoginDropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 18rem;
  height: auto;
  position: absolute;
  border-radius: 5px;
  border: 4px solid ${themes.dark.highlightColor.clockOff};
  top: 30%;
  z-index: 2;
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

export default function AuthOverlay() {
  let [userValues, setUserValues] = useState(initialValues);
  let [disabledSubmit, disableSubmit] = useState(true);

  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);
  const errorMessage = useSelector((state) => state.errorMessages.cardMessage);

  // Changes state to creatingUser overlay
  const createAccountHandler = () => {
    dispatch(clearLoading());
    dispatch(setSigningIn(false));
    dispatch(setCreatingUser(true));
  };

  // Handle changing local values on inputs
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserValues({ ...userValues, [name]: value });
    if (userValues.username && userValues.password) {
      disableSubmit(false);
    }
  };

  // Password encryption

  // Handle validation of user
  // Fetch/establish clocks on success
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setLoading());
    // Fetch user data
    axios
      .get(`http://localhost:9000/`, { params: userValues })
      .then((userRes) => {
        console.log(userRes);
        dispatch(toggleLoggedIn());
        dispatch(setCurrentUser(userRes.data));
        // If successful, get clock data
        axios
          .get(`http://localhost:9000/user/clocks/${userRes.data.userId}`)
          .then((clockRes) => {
            console.log(clockRes);
            dispatch(setCurrentClocks(clockRes.data));
            dispatch(setAuthenticating(false));
            dispatch(clearLoading());
          })
          .catch((err) => {
            // Display error message - unable to retrieve clocks
            console.log(err.message);
            dispatch(setCardMessage(err.message));
            dispatch(clearLoading());
          });
      })
      .catch((err) => {
        console.log(err.response.data.message);
        // Send user to create user screen
        dispatch(setCardMessage(err.response.data.message));
        dispatch(clearLoading());
      });
  };

  // Disable submit button until both fields are filled out
  useEffect(() => {
    if (userValues.username && userValues.password) {
      dispatch(setCardMessage(""));
      disableSubmit(false);
    } else {
      disableSubmit(true);
    }
  }, [userValues]);

  // Clear Error message on component mount
  useEffect(() => {
    dispatch(setCardMessage(""));
  }, []);

  return (
    <StyledLoginDropdown
      id="authForm"
      style={{ backgroundColor: `${themes[currentTheme].backgroundColor}` }}
    >
      <h1 style={{ color: `${themes[currentTheme].highlightColor.clockOff}` }}>
        Log in
      </h1>
      or
      <div
        style={{
          textDecoration: "underline",
          cursor: "pointer",
          marginBottom: "2rem",
        }}
        onClick={createAccountHandler}
      >
        create an account
      </div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={submitHandler}
      >
        <StyledInput
          value={userValues.username}
          type="text"
          placeholder="username"
          name="username"
          onChange={changeHandler}
          style={{ margin: "5px 5px" }}
        ></StyledInput>
        <StyledInput
          value={userValues.password}
          type="password"
          name="password"
          placeholder="password"
          onChange={changeHandler}
          style={{ margin: "5px 5px" }}
        ></StyledInput>
        <SubmitButton disabledSubmit={disabledSubmit} textContent={"Sign In"} />
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </form>
    </StyledLoginDropdown>
  );
}
