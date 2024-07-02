import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditingClock } from "../../../state/slices/clockDataSlice";
import EditIcon from './icons/EditClockIcon';

export default function EditClockButton({ clock, clockOn }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => {
    return state.theme.theme;
  });

  const clickHandler = (e) => {
    dispatch(setEditingClock(clock.clockId));
  };

  return (
    <div
      className="w-8 h-8 bg-cover relative top-1 cursor-pointer bg-bkg text-accent-1"
      onClick={clickHandler}
    ><EditIcon clockOn={clockOn} /> </div>
  );
}
