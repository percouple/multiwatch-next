import React from "react";
import Header from "./components/header/Header";
import ClocksContainer from "./components/clocks/ClocksContainer";
import { getUserInfo } from "../../lib/db-helpers";

require("dotenv").config();

export default async function Layout({ children, params }) {
  const user = await getUserInfo(params.userId);
  console.log(user)
  return (
    <React.StrictMode>
      <div
        className={`font-sans font-light h-screen overflow-y-scroll 
          scroll-auto text-base bg-bkg text-txt`}
        theme={user.theme_preference}
      >
        {children}
        <div className="bg-cmp_bkg rounded-xl p-4 m-4">
          <Header theme={user.theme_preference} userId={params.userId} />
        </div>
        <div className="bg-cmp_bkg rounded-xl p-2 m-4">
          <ClocksContainer theme={user.theme_preference} userId={params.userId} />
        </div>
      </div>
    </React.StrictMode>
  );
}
