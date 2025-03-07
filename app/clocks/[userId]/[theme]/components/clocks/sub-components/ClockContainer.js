import { useState, useEffect } from "react";
import ButtonContainer from "./ButtonContainer";
import Stats from "./Stats";
import Title from "./Title";
import CurrentSessionClock from "./CurrentSessionClock";
import DeleteClockButton from "./DeleteClockButton";
import EditClockButton from "./EditClockButton";
import ShowStatisticsIcon from "../../icons/ShowStatisticsIcon";
import { updateClock } from "../../../../../../../http_helpers";

export default function ClockContainer({
  theme,
  clock,
  userId,
  clockData,
  setClockData,
}) {
  let [punchedIn, setPunchedIn] = useState(false);
  let [punchInTime, setPunchInTime] = useState(null);
  let [secondsPassed, setSecondsPassed] = useState(0);
  let [currentClock, setCurrentClock] = useState(clock);
  let [expanded, setExpanded] = useState(false);
  let [clockColor, setClockColor] = useState("skin-accent-1");

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
      const result = await updateClock(currentClock.id, currentClock);
      console.log(result);
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

    punchedIn ? setClockColor("skin-accent-2") : setClockColor("skin-accent-1");
    return () => clearInterval(intervalId);
  }, [punchedIn]);

  return (
    <div
      className={`flex flex-col justify-between items-center h-fit bg-skin-backgroundBase 
      shadow-md shadow-neutral-900 border-solid border-4 rounded-lg m-2 px-4 
      border-${clockColor}`}
    >
      <div className="flex justify-between w-full mt-4">
        <Title clock={currentClock} clockColor={clockColor} />
        <ButtonContainer
          punchedIn={punchedIn}
          onPunchIn={handlePunchIn}
          onPunchOut={handlePunchOut}
        />
      </div>
      <div className="flex w-full justify-between items-center m-4">
        <CurrentSessionClock secondsPassed={secondsPassed || 0} />
        <div
          onClick={() => setExpanded(!expanded)}
          className={`cursor-pointer ml-2 h-fit p-1 rounded-full 
          bg-${clockColor}`}
        >
          <ShowStatisticsIcon />
        </div>
      </div>
      {expanded && (
        <div>
          <Stats
            punchedIn={punchedIn}
            secondsPassed={secondsPassed}
            clock={currentClock}
            clockColor={clockColor}
            theme={theme}
          />
          <div className="flex justify-center flex-wrap my-4">
            <EditClockButton
              clock={currentClock}
              clockColor={clockColor}
              userId={userId}
              clockData={clockData}
              setClockData={setClockData}
            />
            <DeleteClockButton
              clock={currentClock}
              clockColor={clockColor}
              userId={userId}
              clockData={clockData}
              setClockData={setClockData}
            />
          </div>
        </div>
      )}
      {/* /* <ResponseMessage /> */}
    </div>
  );
}
