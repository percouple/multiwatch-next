"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  setBackgroundOverlay,
  setDisplayCreateUser,
  setDisplayLogin,
  setDisplayPhoneMenu,
} from "../../state/slices/authSlice";
import AuthCard from "../AuthCard";
import CreateNewUserCard from "../../../../../create-account/page";
import PhoneMenu from "../../header/sub-components/PhoneMenu";
import ThemesDisplay from "../ThemesDisplay";

export default function AuthBackgroundOverlay() {
  const dispatch = useDispatch();
  const backgroundOverlay = useSelector(
    (state) => state.auth.backgroundOverlay
  );
  const displayCreateUser = useSelector(
    (state) => state.auth.displayCreateUser
  );
  const displayLogin = useSelector((state) => state.auth.displayLogin);
  const displayPhoneMenu = useSelector((state) => state.auth.displayPhoneMenu);
  const displayThemesSelection = useSelector(
    (state) => state.auth.displayThemesSelection
  );

  // Clears state when user clicks off card on screen
  const clickOffChanger = (e) => {
    e.stopPropagation();
    if (e.target.id === "AuthBackgroundOverlay") {
      dispatch(setDisplayCreateUser(false));
      dispatch(setDisplayLogin(false));
      dispatch(setDisplayPhoneMenu(false));
      dispatch(setBackgroundOverlay(false));
    }
  };

  return (
    <div
      className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30"
      onClick={clickOffChanger}
      id="AuthBackgroundOverlay"
    >
      {backgroundOverlay && displayLogin && <AuthCard />}
      {backgroundOverlay && displayCreateUser && <CreateNewUserCard />}
      {backgroundOverlay && displayPhoneMenu && <PhoneMenu />}
      {backgroundOverlay && displayThemesSelection && <ThemesDisplay />}
    </div>
  );
}
