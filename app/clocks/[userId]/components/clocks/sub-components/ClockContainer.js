"use client";
import { useState, useEffect } from "react";
import ButtonContainer from "./ButtonContainer";
import Stats from "./Stats";
import Title from "./Title";
import CurrentSessionClock from "./CurrentSessionClock";
import DeleteClockButton from "./DeleteClockButton";
import EditClockButton from "./EditClockButton";
import { nonTailwindColors } from "../../../../../helpers";
import { updateClockFromPunchOut } from "../../../../../lib/db-helpers";

export default function ClockContainer({
  theme,
  clock,
  userId,
  clientClocks,
  setClientClocks,
}) {
  let [punchedIn, setPunchedIn] = useState(false);
  let [punchInTime, setPunchInTime] = useState(null);
  let [secondsPassed, setSecondsPassed] = useState(0);
  let [currentClock, setCurrentClock] = useState(clock);

  const clockOn = punchedIn ? "clockOn" : "clockOff";
  const clockColor = nonTailwindColors[theme][clockOn];

  const handlePunchIn = (e) => {
    if (!punchedIn) {
      const timestampInMilliseconds = Date.now();
      const timestampInSeconds = timestampInMilliseconds / 1000;
      setPunchInTime(timestampInSeconds);
      setSecondsPassed(0);
      setPunchedIn(true);
    }
  };

  const handlePunchOut = async (e) => {
    if (punchedIn) {
      setPunchedIn(false);

      // Front-end updating
      setCurrentClock({
        ...currentClock,
        lastSessionTime: (currentClock.lastSessionTime = secondsPassed),
        todaySessionTime: (currentClock.todaySessionTime += secondsPassed),
        thisWeekTime: (currentClock.thisWeekTime += secondsPassed),
        allTime: (currentClock.allTime += secondsPassed),
      });

      // Back End updating
      await updateClockFromPunchOut(currentClock);
      setSecondsPassed(0);
    }
  };

  // // On app load, if punched in,
  // // set secondsPassed to update consistently, cancel timeout if punched out
  useEffect(() => {
    let intervalId; // Declare globally so we can cancel it later
    if (punchedIn) {
      // If punched in, set up interval to update secondsPassed state every second
      intervalId = setInterval(() => {
        // Get the current date in seconds
        const currentDateInSeconds = Date.now() / 1000;
        // Get my constantly updating seconds, send them to state
        setSecondsPassed(Math.floor(currentDateInSeconds - punchInTime));
      }, 1000);
    } else {
      clearInterval(intervalId); // Clear interval when punching out
    }

    return () => clearInterval(intervalId);
  }, [punchedIn]);

  return (
    <div
      className={`p-4 w-[300px] flex flex-col justify-between items-center shadow-md shadow-neutral-900 border-solid border-4 rounded-lg m-8`}
      style={{ borderColor: `${clockColor}` }}
    >
      <div className="flex justify-between w-full mb-4">
        <Title clock={currentClock} clockColor={clockColor} />
        <div className="flex">
          <EditClockButton
            clock={currentClock}
            clockColor={clockColor}
            userId={userId}
            clientClocks={clientClocks}
            setClientClocks={setClientClocks}
          />
          <DeleteClockButton
            clock={currentClock}
            clockColor={clockColor}
            userId={userId}
            clientClocks={clientClocks}
            setClientClocks={setClientClocks}
          />
        </div>
      </div>
      <CurrentSessionClock secondsPassed={secondsPassed || 0} />
      <ButtonContainer
        punchedIn={punchedIn}
        onPunchIn={handlePunchIn}
        onPunchOut={handlePunchOut}
        clockColor={clockColor}
      />
      <Stats
        punchedIn={punchedIn}
        secondsPassed={secondsPassed}
        clock={currentClock}
      />
      {/* /* <ResponseMessage /> */}
    </div>
  );
}
