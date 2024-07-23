import React from "react";
import Header from "./components/header/Header";
import ClocksContainer from "./components/clocks/ClocksContainer";
import BackgroundOverlay from "./components/state-cards/common-elements/BackgroundOverlay";
// import ClockDisplayResponseMessage from "./clocks/ClockDisplayResponseMessage";

export default function App() {
  const theme = "dark"
  return (
    <div
      className={`font-sans font-light h-screen overflow-y-scroll scroll-auto text-base bg-bkg text-txt`}
    >
      {/* <BackgroundOverlay /> */}
      <Header theme={theme} />
      {/*{errorMessage && <ClockDisplayResponseMessage message={errorMessage}/>}*/}
      <ClocksContainer theme={theme} />
    </div>
  );
}
