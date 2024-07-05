"use client";

import React from "react";
import Header from "./components/header/Header";
import ClocksContainer from "./components/clocks/ClocksContainer";
// import Loading from "./overlays/Loading";
import AuthBackgroundOverlay from "./components/auth/common-elements/AuthBackgroundOverlay";
import { useSelector } from "react-redux";
// import ClockDisplayResponseMessage from "./clocks/ClockDisplayResponseMessage";

export default function App() {
  const currentTheme = useSelector((state) => state.theme.theme);
  const loading = useSelector((state) => state.loading.loading);
  const authenticating = useSelector((state) => state.auth.authenticating);
  const errorMessage = useSelector(
    (state) => state.errorMessages.clocksMessage
  );

  return (
    <div
      className={`font-sans font-light h-screen overflow-y-scroll scroll-auto text-base bg-bkg text-txt`}
      theme={currentTheme}
    >
      {/* {loading && <Loading />} */}
      {authenticating && <AuthBackgroundOverlay />}
      <Header />
      {/*{errorMessage && <ClockDisplayResponseMessage message={errorMessage}/>}*/}
      <ClocksContainer />
    </div>
  );
}
