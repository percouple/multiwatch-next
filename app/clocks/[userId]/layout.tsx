import React from "react";
import Header from "./components/header/Header";
import ClocksContainer from "./components/clocks/ClocksContainer";
import { getUser } from "../../../http_helpers";
import 'dotenv/config';

export default async function Layout({ children, params }) {
  // const user = await getUser(params.userId);
  // Hard coded user for convenience
  const user = {
    id: 'cm605gh420000x2f26r26g7pc',
    username: 'harold',
    password: '1234',
    Clocks: {
      create: [
        {
          name: "superClock",
          allTime: 10000,
          editing: false,
          lastSessionTime: 2,
          thisWeekTime: 222222,
          todaySessionTime: 222,
        },
        {
          name: "third clock",
          allTime: 100,
          editing: true,
          lastSessionTime: 0,
          thisWeekTime: 22,
          todaySessionTime: 2,
        },
        {
          name: "nuh nuh clock",
          allTime: 1000,
          editing: false,
          lastSessionTime: 2,
          thisWeekTime: 2222,
          todaySessionTime: 222356,
        },
      ],
    },
    createdAt: '2025-01-17T02:37:50.883Z',
    updatedAt: '2025-01-17T02:37:50.883Z',
    theme_preference: 'dark'
  }
  console.log(params)
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
        {/* <div className="bg-cmp_bkg rounded-xl p-2 m-4">
          <ClocksContainer theme={user.theme_preference} userId={params.userId} />
        </div> */}
      </div>
    </React.StrictMode>
  );
}
