import React from "react";
import { useSelector } from "react-redux";
import { themes } from '../../../../tailwind.config';

export default function ButtonContainer({ punchedIn, onPunchIn, onPunchOut }) {
  const currentTheme = useSelector((state) => state.theme.theme);
  const clockOn = punchedIn ? "clockOn" : "clockOff";

  return (
    <div className="flex justify-center my-2">
      {punchedIn ? (
        <button
          className={`flex justify-center rounded-lg p-2 w-28 cursor-pointer bg-accent-2`}
          onClick={onPunchOut}
        >
          Stop
        </button>
      ) : (
        <button
          className={`flex justify-center rounded-lg p-2 w-5/6 cursor-pointer bg-accent-1 border-solid border-txt text-bkg border-2`}
          onClick={onPunchIn}
        >
          Start
        </button>
      )}
    </div>
  );
}
