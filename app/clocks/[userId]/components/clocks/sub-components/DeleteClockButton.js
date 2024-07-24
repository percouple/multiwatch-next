import React from "react";
import DeleteClockButtonIcon from "../../icons/DeleteClockButtonIcon";
import { deleteClock } from "../../../../../lib/db-helpers";

export default async function DeleteClockButton({ clock, clockColor, userId }) {
  
  async function deleteCurrentClock() {
    "use server";
    await deleteClock(clock.id, userId);
  }

  return (
    <form action={deleteCurrentClock}>
      <button type="submit"
        className={`h-10 w-10 bg-transparent cursor-pointer bg-no-repeat bg-cover`}
        style={{
          color: clockColor,
        }}
      >
        <DeleteClockButtonIcon />
      </button>
    </form>
  );

}
