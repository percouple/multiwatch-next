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
      className="flex relative cursor-pointer mx-2 rounded-md border-skin-accent-1
      bg-skin-backgroundBase bg-cover text-skin-accent-1 
      hover:text-skin-accent-2 hover:border-skin-accent-2 transition-all 
      duration-300 ease-in-out border-4"
      type="submit"
    >
      <CreateNewTimerButtonIcon />
    </div>
  );
}
