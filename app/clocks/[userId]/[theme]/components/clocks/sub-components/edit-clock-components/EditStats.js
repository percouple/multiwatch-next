import React, { useEffect } from "react";
import {
  dateObjectConverter,
  secondsToTime,
} from "../../../../../../../helpers";
import SingleEditStat from "./SingleEditStat";
import SingleStat from "../SingleStat";

export default function EditStats({
  currentClock,
  oldClock,
  setCurrentClock,
  setErrMessage,
  errMessage,
}) {

  useEffect(() => {
    setErrMessage(
      "Input total seconds desired. For example, 1 yr = 31,536,000s"
    );
  }, []);

  // Array of statistics information for mapping in the component
  const editStatArray = [
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
      className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-2
      text-center cursor-default max-w-[90%] mt-6 font-light"
    >
      <SingleStat
        label="Last Session"
        time={secondsToTime(oldClock.lastSessionTime)}
      />
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
      <SingleStat
        label="Last Started"
        time={dateObjectConverter(oldClock.updatedAt)}
      />
    </div>
  );
}
