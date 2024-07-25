import React from "react";
import CancelEditClockButtonIcon from "../../../icons/CancelEditClockButtonIcon";

export default function CancelEditClockButton({ clock, setClientClocks, clientClocks }) {

  const clickHandler = async (e) => {
    setClientClocks(
      clientClocks.map((clientClock) => {
        if (clientClock.id === clock.id) {
          clientClock.editing = false;
        } 
        return clientClock
      })
    );
  };

  return (
    <div
      className="h-10 w-10 bg-transparent cursor-pointer text-editClockColor"
      onClick={clickHandler}
    >
      <CancelEditClockButtonIcon />
    </div>
  );
}
