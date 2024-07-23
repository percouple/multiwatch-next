import React from "react";
import { useDispatch } from "react-redux";
import { setEditingClock } from "../../../state/slices/clockDataSlice";
import CancelEditClockButtonIcon from "../../../icons/CancelEditClockButtonIcon";

export default function CancelEditClockButton({ clock }) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setEditingClock(clock.clockId));
  };

  return (
    <div
      className="h-10 w-10 bg-transparent cursor-pointer text-editClockColor"
      onClick={clickHandler}
    >
      <CancelEditClockButtonIcon />
    </div>
  );
}
