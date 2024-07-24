import React from "react";
import DeleteClockButtonIcon from "../../icons/DeleteClockButtonIcon";
import { deleteClock } from "../../../../../lib/db-helpers";

export default async function DeleteClockButton({ clock, clockColor, user }) {
  return (
    <button
      className={`h-10 w-10 bg-transparent cursor-pointer bg-no-repeat bg-cover`}
      style={{
        color: clockColor,
      }}
      formAction={deleteClock}
    >
      <DeleteClockButtonIcon />
    </button>
  );
}
