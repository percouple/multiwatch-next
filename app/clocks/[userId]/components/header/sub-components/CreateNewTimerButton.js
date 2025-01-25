"use client";
import CreateNewTimerButtonIcon from "../../icons/CreateNewTimerButtonIcon";
import { addClock } from "../../../../../../http_helpers";

export default function CreateNewTimerButton({ userId, clockData, setClockData }) {
  const clickHandler = async () => {
    const res = await addClock(userId);
    setClockData([...clockData, res])
  };
  return (
    <div
      onClick={clickHandler}
      className="flex relative cursor-pointer mx-2 rounded-md 
      bg-bkg bg-cover text-accent-1 hover:text-accent-2 transition-all 
      duration-300 ease-in-out border-accent-2 border-4"
      type="submit"
    >
      <CreateNewTimerButtonIcon />
    </div>
  );
}
