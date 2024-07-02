import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClock, flagForDBUpdate } from "../../../state/slices/clockDataSlice";
import closeClockIconBlue from "../../../stock-data-assets/close-clock-icon-blue.svg";
import closeClockIconOrange from "../../../stock-data-assets/close-clock-icon-orange.svg";
import { themes } from '../../../../tailwind.config'; // Ensure this path is correct based on your project structure

export default function DeleteClockButton({ clock, clockOn }) {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);

  // Determine which icon to use based on clockOn prop
  const dynamicBackgroundImage = clockOn === "clockOn" ? closeClockIconOrange : closeClockIconBlue;

  const deleteHandler = () => {
    dispatch(deleteClock(clock.clockId));
    dispatch(flagForDBUpdate());
  };

  return (
    <div
      className={`h-10 w-10 bg-transparent cursor-pointer bg-no-repeat bg-cover`}
      // style={{
      //   backgroundImage: `url(${dynamicBackgroundImage})`,
      //   color: themes[currentTheme].textColor,
      // }}
      onClick={deleteHandler}
    ></div>
  );
}
