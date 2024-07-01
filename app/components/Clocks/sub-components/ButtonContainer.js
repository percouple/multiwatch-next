import React from "react";
import { useSelector } from "react-redux";
import { themes } from "../../../util/cssUtils";

export default function ButtonContainer({ punchedIn, onPunchIn, onPunchOut }) {
  const currentTheme = useSelector((state) => state.theme.theme);
  const clockOn = punchedIn ? "clockOn" : "clockOff";

  const punchedInStyle = `bg-${themes[currentTheme].highlightColor[clockOn]}`;
  const punchedOutStyle = `bg-${themes[currentTheme].highlightColor[clockOn]}`;

  return (
    <div className="flex justify-center my-2">
      {punchedIn ? (
        <button
          className={`flex justify-center rounded-lg p-2 w-28 cursor-pointer ${punchedOutStyle}`}
          onClick={onPunchOut}
        >
          Stop
        </button>
      ) : (
        <button
          className={`flex justify-center rounded-lg p-2 w-28 cursor-pointer ${punchedInStyle}`}
          onClick={onPunchIn}
        >
          Start
        </button>
      )}
    </div>
  );
}
