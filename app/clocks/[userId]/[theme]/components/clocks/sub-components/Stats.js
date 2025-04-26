import React from "react";
import { secondsToTime, dateObjectConverter } from "../../../../../../helpers";
import SingleStat from "./SingleStat";

export default function Stats({
  punchedIn,
  secondsPassed,
  clock,
  clockColor,
  theme,
}) {
  // Display times for printing to the UI
  let todayDisplayTime, thisWeekDisplayTime, allTimeDisplayTime;

  // Handles for formatting displays over the threshold of the time period
  // I.e. Day over 24 hrs
  if (punchedIn) {
    todayDisplayTime = clock.todaySessionTime + secondsPassed;
    thisWeekDisplayTime = clock.thisWeekTime + secondsPassed;
    // Limit input time allowable. Kick back to -84000 or whatever
    // To loop back around
    if (todayDisplayTime >= 86400) {
      todayDisplayTime -= 86400;
    }
    if (thisWeekDisplayTime >= 604800) {
      thisWeekDisplayTime -= 604800;
    }
    allTimeDisplayTime = clock.allTime + secondsPassed;
  } else {
    todayDisplayTime = clock.todaySessionTime;
    thisWeekDisplayTime = clock.thisWeekTime;
    allTimeDisplayTime = clock.allTime;
  }

  const lastTouchedTime = clock.updatedAt.toLocaleString();

  const statArray = [
    { label: "Last Session", time: secondsToTime(clock.lastSessionTime) },
    { label: "Today", time: secondsToTime(todayDisplayTime) },
    { label: "This Week", time: secondsToTime(thisWeekDisplayTime) },
    { label: "All Time", time: secondsToTime(allTimeDisplayTime) },
    { label: "Last Started", time: dateObjectConverter(lastTouchedTime) },
  ];

  return (
    <div
      className="font-normal flex justify-center flex-wrap text-center cursor-default 
    max-w-18rem mx-auto mt-6 bg-cmp_bkg p-4 rounded-lg max-w-[80%]"
    >
      {statArray.map((stat, idx) => {
        return (
          <SingleStat
            key={idx}
            label={stat.label}
            time={stat.time}
            color={clockColor}
            clock={clock}
            theme={theme}
            punchedIn={punchedIn}
          />
        );
      })}
    </div>
  );
}
