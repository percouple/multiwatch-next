import React from "react";
import DeleteClockButtonIcon from "../../icons/DeleteClockButtonIcon";
import { deleteClock } from "../../../../../lib/db-helpers";

export default function DeleteClockButton({
  clientClocks,
  setClientClocks,
  clock,
  clockColor,
  userId,
}) {

  const clickHandler = async () => {
    
    // Backend
    await deleteClock(clock.id, userId);

    // Frontend
    setClientClocks(
      clientClocks.filter((clientClock) => {
        return clientClock.id !== clock.id;
      })
    )
  };

  return (
    <button
      type="submit"
      className={`h-10 w-10 bg-transparent cursor-pointer bg-no-repeat bg-cover`}
      style={{
        color: clockColor,
      }}
      onClick={clickHandler}
    >
      <DeleteClockButtonIcon />
    </button>
  );
}
