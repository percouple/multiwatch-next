import React from "react";
import { nonTailwindColors } from "../../../../../helper-functions";
import CreateNewTimerButtonIcon from "../../icons/CreateNewTimerButtonIcon";
import { addClock } from "../../../../../lib/db-helpers";

export default function CreateNewTimerButton({ theme, userId }) {

  async function createNewClock () {
    'use server'
    await addClock(userId);
  }

  return (
    <form action={createNewClock}>
      <button
        className="relative h-10 w-10 cursor-pointer rounded-md bg-cover"
        style={{
          color: nonTailwindColors[theme].clockOff,
        }}
        type="submit"
      >
        <CreateNewTimerButtonIcon />
      </button>
    </form>
  );
}
