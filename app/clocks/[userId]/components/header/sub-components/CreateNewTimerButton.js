"use client";
import { nonTailwindColors } from "../../../../../helper-functions";
import CreateNewTimerButtonIcon from "../../icons/CreateNewTimerButtonIcon";
import { addClock } from "../../../../../lib/db-helpers";

export default function CreateNewTimerButton({ theme, userId }) {
  const clickHandler = async () => {
    const res = await addClock(userId);
    // await revalidatePath(`/clocks/${userId}`);
  };
  return (
    <button
      onClick={clickHandler}
      className="relative h-10 w-10 cursor-pointer rounded-md bg-cover"
      style={{
        color: nonTailwindColors[theme].clockOff,
      }}
      type="submit"
    >
      <CreateNewTimerButtonIcon />
    </button>
  );
}
