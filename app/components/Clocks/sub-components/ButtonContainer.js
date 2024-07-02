import React from "react";
import { useSelector } from "react-redux";
import { themes } from '../../../../tailwind.config';

export default function ButtonContainer({ punchedIn, onPunchIn, onPunchOut }) {
  const currentTheme = useSelector((state) => state.theme.theme);
  const clockOn = punchedIn ? "clockOn" : "clockOff";

  // const punchedInStyle = `${themes[currentTheme].highlightColor[clockOn]}`;
  // const punchedOutStyle = `${themes[currentTheme].highlightColor[clockOn]}`;

  return (
    <div className="flex justify-center my-2">
      {punchedIn ? (
        <button
          className={`flex justify-center rounded-lg p-2 w-28 cursor-pointer`}
          onClick={onPunchOut}
        >
          Stop
        </button>
      ) : (
        <button
          className={`flex justify-center rounded-lg p-2 w-28 cursor-pointer`}
          onClick={onPunchIn}
        >
          Start
        </button>
      )}
    </div>
  );
}
