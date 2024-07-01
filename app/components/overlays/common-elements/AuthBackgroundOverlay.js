import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  setAuthenticating,
  setCreatingUser,
  setSigningIn,
} from "../../../state/slices/authSlice";
import {
  clearLoading,
} from "../../../state/slices/loadingSlice";
import AuthCard from "../AuthCard";
import CreateNewUserCard from "../CreateNewUserCard";

const StyledAuthBackgroundOverlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.3);
`;

// Renders greyed-out background that dynamically renders auth cards based on
// User input and need
export default function AuthBackgroundOverlay() {
  const dispatch = useDispatch();
  const authenticating = useSelector(( state ) => state.auth.authenticating);
  const creatingUser = useSelector(( state ) => state.auth.creatingUser);
  const signingIn = useSelector(( state ) => state.auth.signingIn);

  // Changes state to non-authenticating if user clicks on the BackgroundOverlay
  // In otherwords, de-renders cards and auth screen if the user clicks off the card
  const clickOffChanger = (e) => {
    e.stopPropagation();
    console.log();
    if (e.target.id === "AuthBackgroundOverlay") {
      dispatch(setCreatingUser(false));
      dispatch(setSigningIn(false));
      dispatch(clearLoading());
      dispatch(setAuthenticating(false));
    }
  };

  if (authenticating && signingIn) {
    return (
      <StyledAuthBackgroundOverlay
        onClick={clickOffChanger}
        id="AuthBackgroundOverlay"
      >
        <AuthCard />
      </StyledAuthBackgroundOverlay>
    );
  } else if (authenticating && creatingUser) {
    return (
      <StyledAuthBackgroundOverlay
        onClick={clickOffChanger}
        id="AuthBackgroundOverlay"
      >
        <CreateNewUserCard />
      </StyledAuthBackgroundOverlay>
    );
  }
}
