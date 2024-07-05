import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthenticating,
  setCreatingUser,
  setSigningIn,
} from "../../state/slices/authSlice";
import { clearLoading } from "../../state/slices/loadingSlice";
import AuthCard from "../AuthCard";
import CreateNewUserCard from "../CreateNewUserCard";

export default function AuthBackgroundOverlay() {
  const dispatch = useDispatch();
  const authenticating = useSelector((state) => state.auth.authenticating);
  const creatingUser = useSelector((state) => state.auth.creatingUser);
  const signingIn = useSelector((state) => state.auth.signingIn);

  const clickOffChanger = (e) => {
    e.stopPropagation();
    if (e.target.id === "AuthBackgroundOverlay") {
      dispatch(setCreatingUser(false));
      dispatch(setSigningIn(false));
      dispatch(clearLoading());
      dispatch(setAuthenticating(false));
    }
  };

  return (
    <div
      className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30"
      onClick={clickOffChanger}
      id="AuthBackgroundOverlay"
    >
      {authenticating && signingIn && <AuthCard />}
      {authenticating && creatingUser && <CreateNewUserCard />}
    </div>
  );
}
