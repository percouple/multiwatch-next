import React from "react";
import DeleteClockButtonIcon from "../../icons/DeleteClockButtonIcon";
import { deleteClock } from "../../../../../lib/db-helpers";

export default function DeleteClockButton({ clock, clockColor, userId }) {

  return (
    <form action={() => deleteClock(clock.id, userId)}>
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
