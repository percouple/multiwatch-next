import React from "react";
import Header from "./components/header/Header";
import ClocksContainer from "./components/clocks/ClocksContainer";
import { getUserInfo } from "../../lib/db-helpers";

require("dotenv").config();

export default async function Layout({ children, params }) {
  const user = await getUserInfo(params.userId);
  return (
    <React.StrictMode>
      <div
        className={`font-sans font-light h-screen overflow-y-scroll scroll-auto text-base bg-cmp_bkg text-txt`}
        theme={user.theme_preference}
      >
        {children}
        <div className="bg-bkg rounded-xl p-2 m-4">
          <Header theme={user.theme_preference} userId={params.userId} />
        </div>
        <div className="bg-bkg rounded-xl p-2 m-4">
          <ClocksContainer theme={user.theme_preference} userId={params.userId} />
        </div>
      </div>
    </React.StrictMode>
  );
}
