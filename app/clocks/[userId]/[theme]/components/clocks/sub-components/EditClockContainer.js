"use client";

import React, { useState } from "react";
import EditStats from "./edit-clock-components/EditStats";
import EditTitle from "./edit-clock-components/EditTitle";
import CurrentSessionClock from "./CurrentSessionClock";
import CancelEditClockButton from "./edit-clock-components/CancelEditClockButton";
import { nonTailwindColors } from "../../../../../helpers";
import { updateClockFromEdit } from "../../../../../../http_helpers";

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
        className="flex w-full flex-col justify-center items-center"
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
        <div className="flex w-full justify-between items-center mt-4">
          <CurrentSessionClock secondsPassed={0} />
        </div>
        {errMessage && (
          <div className="flex justify-center text-center mt-4">{errMessage}</div>
        )}
        <div className="flex justify-center mb-2"></div>
        <EditStats
          currentClock={currentClock}
          oldClock={clock}
          setCurrentClock={setCurrentClock}
          setErrMessage={setErrMessage}
          />
        <button
          type="submit"
          className="flex w-44 justify-center items-center font-extrabold italic text-lg text-txt
          bg-cmp_bkg cursor-pointer border-4 rounded-md p-2 mx-4 border-editClockColor
          my-4 hover:bg-bkg transition-colors duration-300 ease-in-out"
        >
          Save
        </button>
      </form>
    </div>
  );
}
