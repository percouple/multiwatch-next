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
      className="flex w-44 justify-center items-center font-extrabold italic text-lg 
      text-skin-textInverted cursor-pointer bg-skin-accent-1 
      rounded-md p-2 mx-4 mt-4 hover:bg-skin-accent-2 transition-colors 
      duration-200 ease-in-out"
      onClick={clickHandler}
    >
      Delete Clock
    </div>
  );
}
