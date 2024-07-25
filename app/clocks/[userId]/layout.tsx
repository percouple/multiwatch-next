import React from "react";
import Header from "./components/header/Header";
import ClocksContainer from "./components/clocks/ClocksContainer";
require("dotenv").config();

export default function Layout({ children, params }) {
  const theme = "dark";

  return (
    <div theme={theme}> 
      <React.StrictMode>
        <div
          className={`font-sans font-light h-screen overflow-y-scroll scroll-auto text-base bg-bkg text-txt`}
        >
          {children}
          <Header theme={theme} userId={params.userId} />
          <ClocksContainer theme={theme} userId={params.userId} />
        </div>
      </React.StrictMode>
    </div>
  );
}
