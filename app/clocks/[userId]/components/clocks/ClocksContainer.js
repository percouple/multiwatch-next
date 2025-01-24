'use client'

import React, {useState, useEffect} from "react";
import { getUserClocks } from "../../../../../http_helpers";
import ClockContainer from './sub-components/ClockContainer';

export default function ClocksContainer({ theme, userId }) {
  let [clockData, setClockData] = useState([]);

  useEffect(() => {
    const fetchClockData = async () => {
      try {
        // Assuming getUserClocks is a function that returns a Promise
        const data = await getUserClocks(userId);
        setClockData(data);  // Update state with fetched clock data
      } catch (error) {
        console.error('Error fetching clock data:', error);
      }
    };

    if (userId) {
      fetchClockData();
    }
  }, [userId])

  useEffect(() => {
    console.log(clockData)
  }, [clockData])

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 m-2">
    {clockData.map((clock) =>
      // clock.editing ? (
      //   <EditClockContainer
      //     key={clock.id}
      //     clock={clock}
      //     theme={theme}
      //     setClientClocks={setClientClocks}
      //     clientClocks={clientClocks}
      //   />
      // ) : 
      (
        <ClockContainer
          id={clock.id}
          key={clock.id}
          userId={clock.userId}
          clock={clock}
          theme={theme}
          clientClocks={clockData}
          setClientClocks={setClockData}
        />
      )
    )}
  </div>
  );
}
