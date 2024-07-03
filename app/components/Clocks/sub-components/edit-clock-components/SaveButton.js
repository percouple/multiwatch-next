import React from "react";

export default function ButtonContainer() {

  return (
    <div className="flex justify-center my-2">
      <button
        type="submit"
        className={`flex justify-center rounded-lg p-2 w-36 cursor-pointer bg-editClockColor font-light`}
      >
        Save
      </button>
    </div>
  );
}
