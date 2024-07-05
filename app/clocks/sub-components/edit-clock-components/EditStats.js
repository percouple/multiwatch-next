import React, { useEffect } from "react";
import { secondsToTime } from "../../../helper-functions";

export default function EditStats({ currentClock, oldClock, setCurrentClock, setErrMessage }) {

  const changeHandler = (e) => {
    const { value, name } = e.target;
    if (isNaN(value)) {
      setErrMessage("Only digits accepted as input");
    } else {
      setCurrentClock(oldStats => ({ ...oldStats, [name]: Number(value) }));
      setErrMessage('');
    }
  };

  useEffect(() => {
    setErrMessage('Input total seconds desired. For example, 1 yr = 31,536,000s')
  }, [])

  return (
    <div className="font-normal grid grid-rows-3 grid-cols-2 text-center max-w-18rem mx-auto mt-6">
      <div className="border-r border-gray-300 py-1 px-2">Last Session</div>
      <input
        type="text"
        name="lastSessionTime"
        className="border-l border-gray-300 py-1 px-2 bg-transparent stats-input"
        onChange={changeHandler}
        value={currentClock.lastSessionTime}
        placeholder={secondsToTime(oldClock.lastSessionTime)}
      />
      <div className="border-r border-gray-300 py-1 px-2">Today</div>
      <input
        type="text"
        name="todaySessionTime"
        className="border-l border-gray-300 py-1 px-2 bg-transparent stats-input"
        onChange={changeHandler}
        value={currentClock.todaySessionTime}
        placeholder={secondsToTime(oldClock.todaySessionTime)}
      />
      <div className="border-r border-gray-300 py-1 px-2">This Week</div>
      <input
        type="text"
        name="thisWeekTime"
        className="border-l border-gray-300 py-1 px-2 bg-transparent stats-input"
        onChange={changeHandler}
        value={currentClock.thisWeekTime}
        placeholder={secondsToTime(oldClock.thisWeekTime)}
      />
      <div className="border-r border-gray-300 py-1 px-2">All Time</div>
      <input
        type="text"
        name="allTime"
        className="border-l border-gray-300 py-1 px-2 bg-transparent stats-input"
        onChange={changeHandler}
        value={currentClock.allTime}
        placeholder={secondsToTime(oldClock.allTime)}
      />
    </div>
  );
}
