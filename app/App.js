
import React from "react";
import Header from "./components/header/Header";
import ClocksContainer from "./components/clocks/ClocksContainer";
import BackgroundOverlay from "./components/state-cards/common-elements/BackgroundOverlay";
import { useSelector } from "react-redux";
// import ClockDisplayResponseMessage from "./clocks/ClockDisplayResponseMessage";

export default function App() {
  const currentTheme = useSelector((state) => state.theme.theme);
  const displayingBackgroundOverlay = useSelector(
    (state) => state.auth.backgroundOverlay
  );
  const errorMessage = useSelector(
    (state) => state.errorMessages.clocksMessage
  );

  return (
    <div
      className={`font-sans font-light h-screen overflow-y-scroll scroll-auto text-base bg-bkg text-txt`}
      theme={currentTheme}
    >
      {displayingBackgroundOverlay && <BackgroundOverlay />}
      <Header />
      {/*{errorMessage && <ClockDisplayResponseMessage message={errorMessage}/>}*/}
      <ClocksContainer />
    </div>
  );
}
