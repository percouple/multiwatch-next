import React from "react";
import Header from "./components/header/Header";
import ClocksContainer from "./components/clocks/ClocksContainer";
import {getUserInfo} from '../../lib/db-helpers';

require("dotenv").config();

export default async function Layout({ children, params }) {
  const user = await getUserInfo(params.userId);
  return (
    <React.StrictMode>
      <div theme={user.theme_preference}>
        <div
          className={`font-sans font-light h-screen overflow-y-scroll scroll-auto text-base bg-bkg text-txt`}
        >
          {children}
          <Header theme={user.theme_preference} userId={params.userId} />
          <ClocksContainer theme={user.theme_preference} userId={params.userId} />
        </div>
      </div>
    </React.StrictMode>
  );
}
