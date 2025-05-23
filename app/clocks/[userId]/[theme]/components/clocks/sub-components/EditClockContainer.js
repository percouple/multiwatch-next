"use client";

import React, { useState } from "react";
import EditStats from "./edit-clock-components/EditStats";
import EditTitle from "./edit-clock-components/EditTitle";
import CurrentSessionClock from "./CurrentSessionClock";
import CancelEditClockButton from "./edit-clock-components/CancelEditClockButton";
import { updateClock } from "../../../../../../../http_helpers";

export default function EditClockContainer({
  clock,
  theme,
  clockData,
  setClockData,
}) {
  const [currentClock, setCurrentClock] = useState(clock);
  const [errMessage, setErrMessage] = useState("");

  const clockUpdater = async (e) => {
    e.preventDefault();
    console.log(currentClock.id, currentClock)

    // Saves edit to the db
    await updateClock(currentClock.id, currentClock);

    const pusherClock = { ...currentClock, editing: false };

    // Sets client clock to non-editing
    setClockData(
      clockData.map((clock) => {
        if (currentClock.id === clock.id) {
          return pusherClock;
        }
        return clock;
      })
    );
  };

  return (
    <div
      className="flex flex-col justify-between items-center bg-skin-backgroundBase shadow-md 
        shadow-neutral-900 border-solid border-4 rounded-lg mt-4 mx-2 px-4
        border-skin-accent-2"
    >
      <form
        onSubmit={clockUpdater}
        className="flex w-full flex-col justify-center items-center"
      >
        <div className="flex justify-between w-full mt-4">
          <EditTitle
            currentClock={currentClock}
            oldClock={clock}
            setCurrentClock={setCurrentClock}
          />
          <CancelEditClockButton
            clock={clock}
            setClockData={setClockData}
            clockData={clockData}
          />
        </div>
        <div className="flex w-full justify-between items-center mt-4">
          <CurrentSessionClock secondsPassed={0} />
        </div>
        <EditStats
          currentClock={currentClock}
          oldClock={clock}
          setCurrentClock={setCurrentClock}
          setErrMessage={setErrMessage}
          errMessage={errMessage}
          />
          {errMessage && (
            <div className="flex justify-center text-center mt-4">{errMessage}</div>
          )}
        <button
          type="submit"
          className="flex w-44 justify-center items-center font-extrabold italic text-lg text-skin-textBase
          bg-skin-backgroundMuted cursor-pointer border-4 rounded-md p-2 mx-4 border-skin-accent-2
          my-4 hover:bg-skin-backgroundBase transition-colors duration-300 ease-in-out"
        >
          Save
        </button>
      </form>
    </div>
  );
}
