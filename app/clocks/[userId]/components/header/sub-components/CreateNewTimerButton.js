import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewClock,
  flagForDBUpdate,
} from "../../state/slices/clockDataSlice";
import { nanoid } from "nanoid";
import { nonTailwindColors } from "../../../../../helper-functions";
import CreateNewTimerButtonIcon from "../../icons/CreateNewTimerButtonIcon";

export default function CreateNewTimerButton({ theme }) {
  const clickHandler = (e) => {
    const clockId = nanoid();
    const clockNeeds = { userId: user, name: "New Clock", clockId: clockId };
  };

  return (
    <div
      className="relative h-10 w-10 cursor-pointer rounded-md bg-cover"
      style={{
        color: nonTailwindColors[theme].clockOff,
      }}
      onClick={clickHandler}
    >
      <CreateNewTimerButtonIcon />
    </div>
  );
}
