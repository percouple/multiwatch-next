import React from "react";
import { deleteClock } from "../../../../../../http_helpers";

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
    )
  };

  return (
    <div
      type="submit"
      className="flex w-44 justify-center items-center font-extrabold italic text-lg text-txt
      bg-cmp_bkg cursor-pointer border-4 rounded-md p-2 mx-4
      mt-4"
      onClick={clickHandler}
      style={{borderColor: clockColor}}
    >
      Delete Clock
    </div>
  );
}
