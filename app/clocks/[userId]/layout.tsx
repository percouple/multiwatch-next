'use client'

import React, {useState, useEffect} from "react";
import Header from "./components/header/Header";
import ClocksContainer from "./components/clocks/ClocksContainer";
import { getUserClocks } from "../../../http_helpers";
import 'dotenv/config';
import { useParams } from 'next/navigation';

export default function Layout({ children }) {
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

  let [clockData, setClockData] = useState([]);
  const params = useParams();
  
  // Fetch clock data, using getUserClocks
  useEffect(() => {
    const fetchClockData = async () => {
      try {
        // Assuming getUserClocks is a function that returns a Promise
        const data = await getUserClocks(params.userId);
        setClockData(data);  // Update state with fetched clock data
      } catch (error) {
        console.error('Error fetching clock data:', error);
      }
    };

    if (params.userId) {
      fetchClockData();
    }
  }, [params.userId])
  return (
    <React.StrictMode>
      <div
        className='font-sans font-light h-screen overflow-y-scroll
          scroll-auto '
      >
        {children}
        <div className="rounded-xl p-4 m-4">
          <Header 
          clockData={clockData}
          setClockData={setClockData}
          userId={params.userId} />
        </div>
        <div className="bg-skin-backgroundMuted rounded-xl p-2 m-4">
          <ClocksContainer 
          clockData={clockData}
          setClockData={setClockData}
          userId={params.userId} />
        </div>
      </div>
    </React.StrictMode>
  );
}
