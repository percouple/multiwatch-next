'use client'

import React, {useState, useEffect} from "react";
import { getUserClocks } from "../../../../../http_helpers";
import ClockContainer from './sub-components/ClockContainer';

export default function ClocksContainer({ theme, userId, clockData, setClockData }) {

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 m-2">
    {clockData.map((clock) =>
      // clock.editing ? (
      //   <EditClockContainer
      //     key={clock.id}
      //     clock={clock}
      //     theme={theme}
      //     setClockData={setClockData}
      //     clockData={clockData}
      //   />
      // ) : 
      (
        <ClockContainer
          id={clock.id}
          key={clock.id}
          userId={clock.userId}
          clock={clock}
          theme={theme}
          clockData={clockData}
          setClockData={setClockData}
        />
      )
    )}
  </div>
  );
}
