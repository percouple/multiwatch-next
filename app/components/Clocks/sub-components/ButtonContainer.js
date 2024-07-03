import React from "react";

export default function ButtonContainer({ punchedIn, onPunchIn, onPunchOut }) {

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
