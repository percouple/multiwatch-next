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
    <div
      type="submit"
      className="flex w-44 justify-center items-center font-extrabold italic text-lg text-txt
      bg-transparent cursor-pointer border-4 border-editClockColor rounded-md p-2 mx-4
      mt-4"

      onClick={clickHandler}
    >
      Delete Clock
    </div>
  );
}
