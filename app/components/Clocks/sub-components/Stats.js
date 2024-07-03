import React from "react";
import { secondsToTime } from "../../../helper-functions";

export default function Stats({ punchedIn, secondsPassed, clock }) {
  let todayDisplayTime, thisWeekDisplayTime, allTimeDisplayTime;

  if (punchedIn) {
    todayDisplayTime = clock.todaySessionTime + secondsPassed;
    thisWeekDisplayTime = clock.thisWeekTime + secondsPassed;
    allTimeDisplayTime = clock.allTime + secondsPassed;
  } else {
    todayDisplayTime = clock.todaySessionTime;
    thisWeekDisplayTime = clock.thisWeekTime;
    allTimeDisplayTime = clock.allTime;
  }

  return (
    <div className="font-normal grid grid-rows-3 grid-cols-2 text-center max-w-18rem mx-auto mt-6">
      <div className="border-r border-gray-300 py-1 px-2">Last Session</div>
      <div className="border-l border-gray-300 py-1 px-2">{secondsToTime(clock.lastSessionTime)}</div>
      <div className="border-r border-gray-300 py-1 px-2">Today</div>
      <div className="border-l border-gray-300 py-1 px-2">{secondsToTime(todayDisplayTime)}</div>
      <div className="border-r border-gray-300 py-1 px-2">This Week</div>
      <div className="border-l border-gray-300 py-1 px-2">{secondsToTime(thisWeekDisplayTime)}</div>
      <div className="border-r border-gray-300 py-1 px-2">All Time</div>
      <div className="border-l border-gray-300 py-1 px-2">{secondsToTime(allTimeDisplayTime)}</div>
    </div>
  );
}
