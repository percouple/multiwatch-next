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
          className={`flex justify-center rounded-lg p-2 w-36 cursor-pointer bg-accent-2 text-bkg `}
          onClick={onPunchOut}
        >
          Stop
        </button>
      ) : (
        <button
          className={`flex justify-center rounded-lg p-2 w-36 cursor-pointer bg-accent-1 text-bkg `}
          onClick={onPunchIn}
        >
          Start
        </button>
      )}
    </div>
  );
}
