"use client";

import React, { useState } from "react";
import EditStats from "./edit-clock-components/EditStats";
import EditTitle from "./edit-clock-components/EditTitle";
import CurrentSessionClock from "./CurrentSessionClock";
import CancelEditClockButton from "./edit-clock-components/CancelEditClockButton";
import { nonTailwindColors } from "../../../../../helpers";
import { updateClockFromEdit } from "../../../../../lib/db-helpers";

export default function EditClockContainer({
  clock,
  theme,
  clientClocks,
  setClientClocks,
}) {
  const [currentClock, setCurrentClock] = useState(clock);
  const [errMessage, setErrMessage] = useState("");

  const color = nonTailwindColors[theme].editing;

  const clockUpdater = async (e) => {
    e.preventDefault();
    // Saves edit to the db
    await updateClockFromEdit(currentClock);

    const pusherClock = { ...currentClock, editing: false };

    // Sets client clock to non-editing
    setClientClocks(
      clientClocks.map((clientClock) => {
        if (clientClock.id === clock.id) {
          return pusherClock;
        }
        return clientClock;
      })
    );
  };

  return (
    <div
      className="flex flex-col justify-between items-center bg-bkg shadow-md 
        shadow-neutral-900 border-solid border-4 rounded-lg mt-4 mx-2 px-4
        border-editClockColor"
    >
      <form
        onSubmit={clockUpdater}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex justify-between w-full mt-4">
          <EditTitle
            currentClock={currentClock}
            oldClock={clock}
            setCurrentClock={setCurrentClock}
            color={color}
          />
          <CancelEditClockButton
            clock={clock}
            setClientClocks={setClientClocks}
            clientClocks={clientClocks}
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <CurrentSessionClock secondsPassed={0} />
        </div>
        <div className="flex justify-center my-2"></div>
        <EditStats
          currentClock={currentClock}
          oldClock={clock}
          setCurrentClock={setCurrentClock}
          setErrMessage={setErrMessage}
        />
        <button
          type="submit"
          className="flex justify-center rounded-lg p-2 w-36 cursor-pointer 
            bg-editClockColor font-light transform transition-all duration-300 
            ease-in-out hover:-translate-y-1 hover:shadow-txt shadow-md"
        >
          Save
        </button>
      </form>
      {errMessage && (
        <div className="flex justify-center text-center mt-4">{errMessage}</div>
      )}
    </div>
  );
}
