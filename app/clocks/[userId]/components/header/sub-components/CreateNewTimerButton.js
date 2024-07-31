"use client";
import CreateNewTimerButtonIcon from "../../icons/CreateNewTimerButtonIcon";
import { addClock } from "../../../../../lib/db-helpers";

export default function CreateNewTimerButton({ userId }) {
  const clickHandler = async () => {
    const res = await addClock(userId);
    // await revalidatePath(`/clocks/${userId}`);
  };
  return (
    <button
      onClick={clickHandler}
      className="relative h-10 w-10 cursor-pointer mx-2 rounded-md bg-bkg bg-cover text-accent-1 hover:text-accent-2 transition-all duration-300 ease-in-out"
      type="submit"
    >
      <CreateNewTimerButtonIcon />
    </button>
  );
}
