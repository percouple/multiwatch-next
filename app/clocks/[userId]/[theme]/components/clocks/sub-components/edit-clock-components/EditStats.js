import React, { useEffect } from "react";
import { secondsToTime } from "../../../../../../../helpers";
import SingleEditStat from "./SingleEditStat";

export default function EditStats({
  currentClock,
  oldClock,
  setCurrentClock,
  setErrMessage,
  errMessage
}) {
  
  useEffect(() => {
    setErrMessage(
      "Input total seconds desired. For example, 1 yr = 31,536,000s"
    );
  }, []);

  // Array of statistics information for mapping in the component
  const editStatArray = [
    {
      label: "Last Session",
      name: "lastSessionTime",
      placeholder: secondsToTime(oldClock.lastSessionTime),
      value: currentClock.lastSessionTime,
      maxLength: 5,
    },
    {
      label: "Today",
      name: "todaySessionTime",
      placeholder: secondsToTime(oldClock.todaySessionTime),
      value: currentClock.todaySessionTime,
      maxLength: 5,
    },
    {
      label: "This Week",
      name: "thisWeekTime",
      placeholder: secondsToTime(oldClock.thisWeekTime),
      value: currentClock.thisWeekTime,
      maxLength: 6,
    },
    {
      label: "All Time",
      name: "allTime",
      placeholder: secondsToTime(oldClock.allTime),
      value: currentClock.allTime,
      maxLength: 9,
    },
  ];

  return (
    <div
      className="font-normal flex justify-center flex-wrap text-center cursor-default 
    max-w-18rem mx-auto mt-6 bg-cmp_bkg p-4 rounded-lg max-w-[80%]"
    >
      {editStatArray.map((stat, idx) => {
        return (
          <SingleEditStat
            key={idx}
            label={stat.label}
            name={stat.name}
            currentClock={currentClock}
            placeholder={stat.placeholder}
            value={stat.value}
            maxLength={stat.maxLength}
            setErrMessage={setErrMessage}
            setCurrentClock={setCurrentClock}
          />
        );
      })}
    </div>
  );
}
