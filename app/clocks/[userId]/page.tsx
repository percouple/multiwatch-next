import React from "react";
import Header from "./components/header/Header";
import ClocksContainer from "./components/clocks/ClocksContainer";
import BackgroundOverlay from "./components/state-cards/common-elements/BackgroundOverlay";
// import ClockDisplayResponseMessage from "./clocks/ClockDisplayResponseMessage";
require("dotenv").config();

export default function App({ params }) {
  const theme = "dark";

  return (
    <>
      <React.StrictMode>
        <div
          className={`font-sans font-light h-screen overflow-y-scroll scroll-auto text-base bg-bkg text-txt`}
        >
          {/* <BackgroundOverlay /> */}
          <Header theme={theme} userId={params.userId} />
          {/*{errorMessage && <ClockDisplayResponseMessage message={errorMessage}/>}*/}
          <ClocksContainer theme={theme} userId={params.userId} />
        </div>
      </React.StrictMode>
    </>
  );
}
