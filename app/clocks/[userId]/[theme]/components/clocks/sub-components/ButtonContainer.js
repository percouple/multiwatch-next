import React from "react";
import StartClockIcon from "../../icons/StartClockIcon";
import PauseClockIcon from "../../icons/PauseClockIcon";

export default function ButtonContainer({ punchedIn, onPunchIn, onPunchOut }) {
  return (
    <>
      {punchedIn ? (
        <button
          className="flex justify-center rounded-full p-1 cursor-pointer bg-skin-accent-1 
          font-light transition-filter duration-150 ease-in-out hover:brightness-125"
          onClick={onPunchOut}
        >
          <PauseClockIcon />
        </button>
      ) : (
        <button
          className="flex justify-center rounded-full p-1 cursor-pointer bg-skin-accent-2 
          font-light transition-filter duration-150 ease-in-out hover:brightness-125"
          onClick={onPunchIn}
        >
          <StartClockIcon />
        </button>
      )}
    </>
  );
}
