"use client";

import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import ClocksContainer from "./components/clocks/ClocksContainer";
import { getUserClocks } from "../../../../http_helpers";
import "dotenv/config";
import { useParams } from "next/navigation";

export default function Layout({ children }) {

  let [clockData, setClockData] = useState([]);
  const params = useParams();

  // Fetch clock data, using getUserClocks
  useEffect(() => {
    const fetchClockData = async () => {
      try {
        // Assuming getUserClocks is a function that returns a Promise
        const data = await getUserClocks(params.userId);
        setClockData(data); // Update state with fetched clock data
      } catch (error) {
        console.error("Error fetching clock data:", error);
      }
    };

    if (params.userId) {
      fetchClockData();
    }
  }, [params.userId]);

  return (
    <React.StrictMode>
      <div
        className={`theme-${params.theme} bg-skin-backgroundBase 
        text-skin-textBase font-sans font-light h-screen 
        overflow-y-scroll scroll-auto`}
      >
        {children}
        <div className="rounded-xl m-8 border-skin-accent-1 border-4">
          <Header
            clockData={clockData}
            setClockData={setClockData}
            userId={params.userId}
          />
        </div>
        <div className="bg-skin-backgroundMuted rounded-xl p-4 mx-8">
          <ClocksContainer
            clockData={clockData}
            setClockData={setClockData}
            userId={params.userId}
          />
        </div>
      </div>
    </React.StrictMode>
  );
}
