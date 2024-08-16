import React from "react";
import StartClockIcon from "../../icons/StartClockIcon";
import PauseClockIcon from "../../icons/PauseClockIcon";

export default function ButtonContainer({ punchedIn, onPunchIn, onPunchOut }) {
  return (
    <>
      {punchedIn ? (
        <button
          className="flex justify-center rounded-full p-1 cursor-pointer bg-accent-2 
        font-light transform transition-transform duration-300 ease-in-out 
        hover:-translate-y-1 hover:shadow-black shadow-md"
          onClick={onPunchOut}
        >
          <PauseClockIcon />
        </button>
      ) : (
        <button
          className="flex justify-center p-1 rounded-full cursor-pointer bg-accent-1 
        font-light transform transition-transform duration-300 ease-in-out 
        hover:-translate-y-1 hover:shadow-black shadow-md"
          onClick={onPunchIn}
        >
          <StartClockIcon />
        </button>
      )}
    </>
  );
}
