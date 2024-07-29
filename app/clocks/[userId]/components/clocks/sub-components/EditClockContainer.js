"use client"

import React, {useState} from "react";
import EditStats from "./edit-clock-components/EditStats";
import EditTitle from "./edit-clock-components/EditTitle";
import CurrentSessionClock from "./CurrentSessionClock";
import CancelEditClockButton from "./edit-clock-components/CancelEditClockButton";
import { nonTailwindColors } from "../../../../../helper-functions";
import { updateClockFromEdit } from "../../../../../lib/db-helpers";

export default function EditClockContainer({ clock, theme, clientClocks, setClientClocks }) {
  const [currentClock, setCurrentClock] = useState(clock);
  const [errMessage, setErrMessage] = useState("");

  const color = nonTailwindColors[theme].editing;

  const clockUpdater = () => {
    // Saves edit to the db
    updateClockFromEdit(currentClock);
  };

  return (
    <div
      className={
        "p-4 w-[300px] flex flex-col justify-center items-center shadow-xl border-solid border-4 rounded-lg m-8 border-red "
      }
    >
      <form
        onSubmit={clockUpdater}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex justify-between items-center w-full mb-4">
          <EditTitle
            currentClock={currentClock}
            oldClock={clock}
            setCurrentClock={setCurrentClock}
            color={color}
          />
          <div className="w-[40px]"></div>
          <CancelEditClockButton clock={clock} setClientClocks={setClientClocks} clientClocks={clientClocks}/>
        </div>
        <div className="flex justify-center items-center w-full">
          <CurrentSessionClock secondsPassed={0} />
        </div>
        <div className="flex justify-center my-2">
          <button
            type="submit"
            className={`flex justify-center rounded-lg p-2 w-36 cursor-pointer bg-editClockColor font-light`}
          >
            Save
          </button>
        </div>
        <EditStats
          currentClock={currentClock}
          oldClock={clock}
          setCurrentClock={setCurrentClock}
          setErrMessage={setErrMessage}
        />
      </form>
      {errMessage && (
        <div className="flex justify-center text-center mt-4">{errMessage}</div>
      )}
    </div>
  );
}
