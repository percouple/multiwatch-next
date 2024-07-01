import React from "react";
import { useSelector } from "react-redux";
import { themes } from "../../../../util/cssUtils";

export default function EditTitle({ currentClock, oldClock, setCurrentClock }) {
  const currentTheme = useSelector((state) => state.theme.theme);

  const changeHandler = (e) => {
    const { value } = e.target;
    setCurrentClock({ ...currentClock, name: value });
  };

  return (
    <input
      className={`flex bg-transparent border-none p-4 shadow-sm outline-none text-xl my-4 ${
        currentTheme === "dark"
          ? `text-${themes[currentTheme].textColor}`
          : ``
      }`}
      placeholder={oldClock.name}
      style={{ color: themes[currentTheme].textColor }}
      onChange={changeHandler}
      value={currentClock.name}
    />
  );
}
