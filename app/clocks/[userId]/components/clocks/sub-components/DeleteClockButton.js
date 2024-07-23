"use client"
import React from "react";
import DeleteClockButtonIcon from "../../icons/DeleteClockButtonIcon";
import { deleteClock } from "../../../lib/db-helpers";

export default function DeleteClockButton({ clock, clockColor }) {
  return (
    <div
      className={`h-10 w-10 bg-transparent cursor-pointer bg-no-repeat bg-cover`}
      style={{
        color: clockColor,
      }}
      onClick={() => deleteClock(clock.id)}
    >
      <DeleteClockButtonIcon />
    </div>
  );
}
