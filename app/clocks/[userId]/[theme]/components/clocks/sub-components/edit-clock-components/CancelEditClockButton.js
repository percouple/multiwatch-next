import React from "react";
import CancelEditClockButtonIcon from "../../../icons/CancelEditClockButtonIcon";

export default function CancelEditClockButton({ clock, setClockData, clockData }) {

  const clickHandler = async (e) => {
    setClockData(
      clockData.map((clientClock) => {
        if (clientClock.id === clock.id) {
          clientClock.editing = false;
        } 
        return clientClock
      })
    );
  };

  return (
    <div
      className="flex justify-center p-1 rounded-full cursor-pointer bg-editClockColor 
        font-light transform transition-transform duration-300 ease-in-out 
        hover:-translate-y-0.5 hover:shadow-black shadow-md"
      onClick={clickHandler}
    >
      <CancelEditClockButtonIcon />
    </div>
  );
}
