import React from "react";
import { useSelector } from "react-redux";
import { themes } from "../../../../../tailwind.config";

export default function ButtonContainer({ clock }) {
  const currentTheme = useSelector((state) => state.theme.theme);

  const punchedInStyle = `bg-${themes[currentTheme].highlightColor.clockOn} text-${themes[currentTheme].textColor}`;

  return (
    <div className="flex justify-center my-2">
      <button
        type="submit"
        className={`flex justify-center rounded-lg p-2 w-28 cursor-pointer ${punchedInStyle}`}
      >
        Save
      </button>
    </div>
  );
}
