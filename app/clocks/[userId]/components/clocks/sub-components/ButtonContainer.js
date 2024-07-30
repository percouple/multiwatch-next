import React from "react";

export default function ButtonContainer({ punchedIn, onPunchIn, onPunchOut }) {
  return (
    <div className="flex justify-center my-2">
      {punchedIn ? (
        <button
          className={`flex justify-center rounded-lg p-2 w-36 cursor-pointer bg-accent-2 font-light transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-black shadow-md`}
          onClick={onPunchOut}
        >
          Stop
        </button>
      ) : (
        <button
          className={`flex justify-center rounded-lg p-2 w-36 cursor-pointer bg-accent-1 font-light transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-black shadow-md`}
          onClick={onPunchIn}
        >
          Start
        </button>
      )}
    </div>
  );
}
