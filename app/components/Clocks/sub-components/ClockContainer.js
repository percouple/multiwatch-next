import React, { useState, useEffect } from "react";
import ButtonContainer from "./ButtonContainer";
import Stats from "./Stats";
// import ResponseMessage from "./ResponseMessage";
import Title from "./Title";
import CurrentSessionClock from "./CurrentSessionClock";
import DeleteClockButton from "./DeleteClockButton";
import EditClockButton from "./EditClockButton";
import { useDispatch, useSelector } from "react-redux";
import {
  flagForDBUpdate,
  updateClock,
} from "../../../state/slices/clockDataSlice";
import { themes, darken, shadow } from "../../../util/cssUtils";

export default function ClockContainer(props) {
  let [punchedIn, setPunchedIn] = useState(false);
  let [punchInTime, setPunchInTime] = useState(null);
  let [secondsPassed, setSecondsPassed] = useState(0);

  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);
  const clockOn = punchedIn ? "clockOn" : "clockOff";

  const handlePunchIn = (e) => {
    if (!punchedIn) {
      const timestampInMilliseconds = Date.now();
      const timestampInSeconds = timestampInMilliseconds / 1000;
      setPunchInTime(timestampInSeconds);
      setSecondsPassed(0);
      setPunchedIn(true);
      dispatch(flagForDBUpdate());
    }
  };

  const handlePunchOut = (e) => {
    if (punchedIn) {
      setPunchedIn(false);
      dispatch(
        updateClock({
          clock: props.clockInfo,
          secondsPassed: secondsPassed,
        })
      );
      setSecondsPassed(0);
    }
  };

  // On app load, if punched in,
  // set secondsPassed to update consistently, cancel timeout if punched out
  useEffect(() => {
    let intervalId; // Declare globally so we can cancel it later
    if (punchedIn) {
      // If punched in, set up interval to update secondsPassed state every second
      intervalId = setInterval(() => {
        // Get the current date in seconds
        const currentDateInSeconds = Date.now() / 1000;
        // Get my constantly updating seconds, send them to state
        setSecondsPassed(() => Math.floor(currentDateInSeconds - punchInTime));
      }, 1000);
    } else {
      clearInterval(intervalId); // Clear interval when punching out
    }

    return () => clearInterval(intervalId);
  }, [punchedIn]);

  return (
    <div
      className={`p-4 flex flex-col justify-center items-center rounded-lg m-8 ${
        currentTheme === "dark"
          ? `border-4 border-${
              themes[currentTheme].highlightColor[clockOn]
            } bg-${darken(themes[currentTheme].backgroundColor, 8)}`
          : `shadow-lg shadow-${themes[currentTheme].textColor}-30`
      }`}
    >
      <div className="flex justify-between items-center w-full mb-4">
        <Title clock={props.clockInfo} />
        <div className="flex">
          <EditClockButton clock={props.clockInfo} clockOn={clockOn} />
          <DeleteClockButton clock={props.clockInfo} clockOn={clockOn} />
        </div>
      </div>
      <CurrentSessionClock secondsPassed={secondsPassed || 0} />
      <ButtonContainer
        punchedIn={punchedIn}
        onPunchIn={handlePunchIn}
        onPunchOut={handlePunchOut}
      />
      <Stats
        punchedIn={punchedIn}
        secondsPassed={secondsPassed}
        clock={props.clockInfo}
      />
      {/* <ResponseMessage /> */}
    </div>
  );
}
