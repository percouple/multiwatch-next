import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteClock,
  flagForDBUpdate,
} from "../../state/slices/clockDataSlice";
import DeleteClockButtonIcon from "./icons/DeleteClockButtonIcon";

export default function DeleteClockButton({ clock, clockColor }) {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteClock(clock.clockId));
    dispatch(flagForDBUpdate());
  };

  return (
    <div
      className={`h-10 w-10 bg-transparent cursor-pointer bg-no-repeat bg-cover`}
      style={{
        color: clockColor,
      }}
      onClick={deleteHandler}
    >
      <DeleteClockButtonIcon />
    </div>
  );
}
