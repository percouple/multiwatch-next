import React from "react";
import { deleteClock } from "../../../../../../../http_helpers";

export default function DeleteClockButton({
  clockData,
  setClockData,
  clock,
  clockColor,
  userId,
}) {
  const clickHandler = async () => {
    // Backend
    await deleteClock(clock.id);

    // Frontend
    setClockData(
      clockData.filter((clientClock) => {
        return clientClock.id !== clock.id;
      })
    );
  };

  return (
    <div
      type="submit"
      className="flex w-40 justify-center items-center font-extrabold italic
      text-skin-textInverted cursor-pointer bg-skin-backgroundMuted border-4 border-skin-accent-1
      rounded-sm p-1 mx-2 mt-4 hover:border-skin-accent-2 transition-colors 
      duration-200 ease-in-out"
      onClick={clickHandler}
    >
      Delete Clock
    </div>
  );
}
